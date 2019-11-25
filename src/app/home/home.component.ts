import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService } from '../_services';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';


@Component({ templateUrl: 'home.component.html', styleUrls: ['../app.component.css'] })
export class HomeComponent implements OnInit {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    displayedColumns = ['position', 'firstName', 'lastName', 'gender', 'department', 'dob'];
    dataSource = new MatTableDataSource<User>(this.users);

    constructor(private userService: UserService) {
        
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers();
        }, () => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
            this.dataSource = new MatTableDataSource<User>(this.users);
        });
    }
}
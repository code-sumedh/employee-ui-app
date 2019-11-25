import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService, AlertService } from '../_services';
import { formatDate } from "@angular/common";

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    depts: any = ['IT', 'Network and Cloud', 'AI', 'Machine Learning'];
    public dateValue: Date = new Date ();

    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,
    private alertService: AlertService) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            department: ['', Validators.required],
            dob: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        console.log(this.registerForm.value);
        const format = 'yyyy-MM-dd HH:mm';
        const locale = 'en-US';
        const formattedDate = formatDate(this.dateValue, format, locale);
        this.registerForm.controls['dob'].setValue(formattedDate);
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

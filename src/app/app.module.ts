import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import {MatTableModule} from '@angular/material/table';
import { MaterialModule } from './material.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        BrowserModule,
        DatePickerModule,
        ReactiveFormsModule,
        HttpClientModule, MaterialModule,
        routing, MatTableModule, BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
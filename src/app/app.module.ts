import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

// services
import { AuthService } from './shared/Auth/auth.service';
import { UserService } from './shared/User/user.service';
import { PatientsService } from'./shared/Patients/patients.service';
import { ReservationsService } from'./shared/Reservations/reservations.service';
import { DoctorsService } from'./shared/Doctors/doctors.service';




import { AuthGuard } from './shared/Guards/auth.guard';


// Routing
import { RouterModule, Routes } from '@angular/router';

//Interfaces
import { Iuser } from './Interfaces/iuser';
import { Ipatient } from './Interfaces/ipatient';
import { Ireservation } from './Interfaces/ireservation';


import { UserComponent } from './user/user.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { NavComponent } from './nav/nav.component';





@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    DoctorComponent,
    SecretaryComponent,
    PatientsComponent,
    PatientDetailsComponent,
    ReservationsComponent,
    AddReservationComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
     FormsModule,
      HttpModule,
      RouterModule.forRoot([
        {
          path:"signin",component:SigninComponent,
        },
        {
          path:"signup",component:SignupComponent,
        },
        {
          path:"user",
          component :  UserComponent,
          canActivate:[AuthGuard]
        },
        {
          path:"doctor",
          component :  DoctorComponent,
          //canActivate:[AuthGuard]
        },
        {
          path:"secretary",
          component:SecretaryComponent,
           //canActivate:[AuthGuard]
        },
        {
          path:"patients/:date",component:PatientsComponent,
        },
        {
          path:"patient-details/:id",component:PatientDetailsComponent,
        },
        {
          path:"add-reservation",component:AddReservationComponent,
        },
        {
          path:"reservation-details/:data.reservation_id",component:ReservationsComponent,
        },
        {
          path:" ",component:AppComponent,
        },
        ]),
  ],
  providers: [AuthService,UserService,AuthGuard,PatientsService,ReservationsService,DoctorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

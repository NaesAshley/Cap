import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ChoicesComponent } from './Pages/choices/choices.component';
import { EligibilityComponent } from './Pages/eligibility/eligibility.component';
import { EnrollmentComponent } from './Pages/enrollment/enrollment.component';
import { MedicareComponent } from './Pages/medicare/medicare.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { NavbarComponent } from './Sharepage/Navbar/navbar.component';
import { FooterComponent } from './Sharepage/Footer/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //only do this when its empty
  { path: 'choices', component: ChoicesComponent },
  { path: 'eligibility', component: EligibilityComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'medicare', component: MedicareComponent },
  { path: 'contactus', component: ContactUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChoicesComponent,
    EligibilityComponent,
    EnrollmentComponent,
    MedicareComponent,
    ContactUsComponent,
  ],

  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule,LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component'
import {RouterModule} from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component'
import { HttpClientModule } from '@angular/common/http';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDateFnsModule} from '@angular/material-date-fns-adapter';
import ptBr from '@angular/common/locales/pt';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule}from '@angular/material/list';
import { NavigationComponent } from './components/navigation/navigation.component';
registerLocaleData(ptBr)
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    ForgotpwComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component:LoginComponent},
      {path:'home', component:HomeComponent},
      {path:'registro',component:RegistroComponent},
      {path:'esqueci',component:ForgotpwComponent},
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    MatSliderModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    HttpClientModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDateFnsModule,
    MomentDateModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

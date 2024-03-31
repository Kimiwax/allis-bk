import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbTabsetModule, NbCalendarModule, NbButtonModule, NbDialogModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CalendarioDineroComponent } from './calendario-dinero/calendario-dinero.component';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ModalAgregarEditComponent } from './modal-agregar-edit/modal-agregar-edit.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {AngularFireModule} from '@angular/fire/compat';
import {environment } from 'src/environments/environment'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NgxSpinnerModule } from 'ngx-spinner';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {provideFirestore,getFirestore} from '@angular/fire/firestore'
registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent,
    CalendarioDineroComponent,
    ModalAgregarEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbTabsetModule,
    NbCalendarModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbInputModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    NbSpinnerModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  exports: [NgxSpinnerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-AR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

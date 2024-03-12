import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbTabsetModule, NbCalendarModule, NbButtonModule, NbDialogModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CalendarioDineroComponent } from './calendario-dinero/calendario-dinero.component';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ModalAgregarEditComponent } from './modal-agregar-edit/modal-agregar-edit.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

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
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-AR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

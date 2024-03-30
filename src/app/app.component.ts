import { Component,ChangeDetectionStrategy } from '@angular/core';
import { CalendarioDineroComponent } from './calendario-dinero/calendario-dinero.component';
import { NbDialogService } from '@nebular/theme';
import { ModalAgregarEditComponent } from './modal-agregar-edit/modal-agregar-edit.component';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputModal = 0;
  showContent:boolean = false;
  constructor(private dialogService: NbDialogService, private spinner: NgxSpinnerService){
    this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.showContent = true;
        this.spinner.hide();
      }, 1500);
  }

agregarEditarImporte() {
  this.dialogService.open(ModalAgregarEditComponent).onClose.subscribe(importe => this.inputModal = importe);
  console.log(this.inputModal);
  
}
  title = 'allis-bk';
  date = new Date();
  data = '';
  dayCellComponent = CalendarioDineroComponent;

  
}

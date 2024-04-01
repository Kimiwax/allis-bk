import { Component,ChangeDetectionStrategy } from '@angular/core';
import { CalendarioDineroComponent } from './calendario-dinero/calendario-dinero.component';
import { NbDialogService } from '@nebular/theme';
import { ModalAgregarEditComponent } from './modal-agregar-edit/modal-agregar-edit.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServVarsService } from './serv-vars.service';
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputModal = 0;
  showContent:boolean = false;
  arrayFechastest:any = [];
  constructor(private dialogService: NbDialogService, private spinner: NgxSpinnerService, private serv:ServVarsService){
    let localStorageData = localStorage.getItem('testObj');

    if(localStorageData){
      console.log("Tengo data");
      
    }
    else{
      this.spinner.show();
      let primeraVez = true;
      localStorage.setItem('primeraVezLog', primeraVez.toString())
      setTimeout(() => {
        this.showContent = true;
        window.location.reload();
        this.spinner.hide();
      }, 2000);
    }

    this.serv.leerDatos().subscribe(res => {
      this.arrayFechastest = res.map((element: any) => element.payload.doc.data());
      localStorage.setItem('testObj', JSON.stringify(this.arrayFechastest));
    })
    
  


    
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

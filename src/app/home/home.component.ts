import { NbDialogService } from '@nebular/theme';
import { Component,ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { CalendarioDineroComponent } from '../calendario-dinero/calendario-dinero.component';
import { ModalAgregarEditComponent } from '../modal-agregar-edit/modal-agregar-edit.component';
import { ServVarsService } from '../serv-vars.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//  testObj: any = [{saldo: '88', timeStamp: 'Wed Mar 06 2024 00:00:00 GMT-0300 (hora estándar de Argentina)'}]
 testObj: any;
 arrayTest:any = []
  constructor(private dialogService: NbDialogService, private myServ: ServVarsService, private cdr: ChangeDetectorRef){
    this.saldoDelDia = '';
    console.log(navigator.userAgent);
    
  }

  ngOnInit(): void {
     this.test();
      
  }


  test(){
    let testObjs: any = localStorage.getItem('testObj') || [];
    this.testObj = JSON.parse(testObjs);
    console.log("Hola");
  }

agregarEditarImporte() {
  
  // let testObj: any = localStorage.getItem('testObj') || [];
  // let testOBjF = JSON.parse(testObj)
  let fechaSeleccionada = (this.date).toString();
  let fechaSeleccionadaParseada = new Date(fechaSeleccionada);
  let diaFechaSeleccionadaParseada = fechaSeleccionadaParseada.getDate();
  let mesFechaSeleccionadaParseada = fechaSeleccionadaParseada.getMonth() + 1;
  let anioFechaSeleccionadaParseada = fechaSeleccionadaParseada.getFullYear();
  const fechaSeleccionadaFormateada = `${diaFechaSeleccionadaParseada}/${mesFechaSeleccionadaParseada}/${anioFechaSeleccionadaParseada}`;
console.log(fechaSeleccionada);

// testOBjF.push({
//   timeStamp: fechaSeleccionada,
//   saldo: this.inputModal
// });
  
// localStorage.setItem('testObj', JSON.stringify(testOBjF));
// Agregar nuevos elementos al objeto
this.myServ.fechaSeleccionada = fechaSeleccionada;
this.dialogService.open(ModalAgregarEditComponent).onClose.subscribe(()=> {
  console.log("Se cerro");
   setTimeout(() => {
    window.location.reload();
    
   }, 1500);
  
  // let testObj: any = localStorage.getItem('testObj') || [];
  // let testOBjF = JSON.parse(testObj)
  
});

// localStorage.setItem('testObj', JSON.stringify(testOBjF));
// console.log(testOBjF)
}



editarDia(saldo:number) {
  let timeStamp = Date.now();
  let fecha = new Date(timeStamp);
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let anio = fecha.getFullYear();

  let objDate = {
    timeStamp: timeStamp,
    saldo: saldo
  }

  this.myServ.agregar(objDate);

}

  title = 'allis-bk';
  date = new Date();
  data = '';
  dayCellComponent = CalendarioDineroComponent;
  saldoDelDia:any;
  transformarDia(timestamp:any){
    let fecha = new Date(timestamp);
    return fecha.getDate();
    }
    
    transformarMes(timestamp:any){
    let fecha = new Date(timestamp);
    return fecha.getMonth() + 1;
    }

    buscarCoincidencia(day:any){
     
    day.setHours(0, 0, 0, 0);
    console.log("buscarC",this.testObj);

    if(this.testObj){
      let res = this.testObj.find((obj:any) => obj.timeStamp == day )
      if(res){
        console.log("true");
        
        this.saldoDelDia = res.saldo
        return true
      }
      else{ 
        console.log("false");
        
        return false
      }
    }
    else{
      return false
    }
    
      
      
      
    }

  
}

import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ServVarsService } from '../serv-vars.service';

@Component({
  selector: 'app-modal-agregar-edit',
  templateUrl: './modal-agregar-edit.component.html',
  styleUrls: ['./modal-agregar-edit.component.scss']
})
export class ModalAgregarEditComponent {
  inputImporte = 0;
  diaSeleccionada:any;
constructor(protected dialogRef: NbDialogRef<ModalAgregarEditComponent>, private myServ: ServVarsService){};
date = []


close(){
  this.diaSeleccionada = this.myServ.fechaSeleccionada;

  let fechaActual = (new Date()).toString();
  let fechaParseada = new Date(fechaActual);
  let timeStamp = Date.now();
  let fecha = new Date(timeStamp);
  let diaParseado = fechaParseada.getDate();
  let mesParseado = fechaParseada.getMonth() + 1;
  let anioParseado = fechaParseada.getFullYear();
  const fechaFormateada: string = `${diaParseado}/${mesParseado}/${anioParseado}`;
  console.log(fechaFormateada);
    
  let testObj: any = localStorage.getItem('testObj') || [];
  let testOBjF = JSON.parse(testObj)
  let fechaSeleccionada = (this.diaSeleccionada).toString();
  let fechaSeleccionadaParseada = new Date(fechaSeleccionada);
  let diaFechaSeleccionadaParseada = fechaSeleccionadaParseada.getDate();
  let mesFechaSeleccionadaParseada = fechaSeleccionadaParseada.getMonth() + 1;
  let anioFechaSeleccionadaParseada = fechaSeleccionadaParseada.getFullYear();
  const fechaSeleccionadaFormateada = `${diaFechaSeleccionadaParseada}/${mesFechaSeleccionadaParseada}/${anioFechaSeleccionadaParseada}`;
  let fechaActualP = new Date()
  let fechaActualHora0 = (fechaActualP.setHours(0, 0, 0, 0)).toString();
  
  let fechaActualHora0Parseada = new Date(fechaActualHora0)
  // console.log(22, fechaActualP);
  // console.log(1, fechaFormateada);
  // console.log(2, fechaSeleccionadaFormateada);
  let fechaSeleccionadaP = (this.diaSeleccionada);
  
  if(fechaFormateada != fechaSeleccionadaFormateada){
    console.log("diferente fecha");
    let res = testOBjF.find((obj:any) => obj.timeStamp == fechaSeleccionadaP)
    if(res){
      res.saldo =  this.inputImporte;

      localStorage.setItem('testObj', JSON.stringify(testOBjF));
    }
    else{
  testOBjF.push({
      timeStamp: fechaSeleccionada,
      saldo: this.inputImporte
    });
    localStorage.setItem('testObj', JSON.stringify(testOBjF));
    }
    
  }
  else{
    // console.log("Misma fecha");
    // console.log(fechaActualHora0);
    
    let res = testOBjF.find((obj:any) => obj.timeStamp == fechaActualP)
    // console.log("res",res);
    res.saldo =  this.inputImporte;
    // console.log("res",res);
    localStorage.setItem('testObj', JSON.stringify(testOBjF));
    
  }
  
   this.dialogRef.close();
}
}

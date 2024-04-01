import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ServVarsService } from '../serv-vars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-agregar-edit',
  templateUrl: './modal-agregar-edit.component.html',
  styleUrls: ['./modal-agregar-edit.component.scss']
})
export class ModalAgregarEditComponent implements OnDestroy {
  inputImporte:any;
  diaSeleccionada:any;
  arrayFechastest:any = [];
  private mySubscription: Subscription;

constructor(protected dialogRef: NbDialogRef<ModalAgregarEditComponent>, private myServ: ServVarsService){
  console.log("soy constructor");
  this.mySubscription = this.myServ.leerDatos().subscribe(res => {
    console.log("res",res);
  
    res.forEach((element:any) => {
      console.log(element.payload.doc.id);
      console.log(element.payload.doc.data());
      console.log({id: element.payload.doc.id, data: element.payload.doc.data()});
      
      this.arrayFechastest.push({id: element.payload.doc.id, data: element.payload.doc.data()})
    });
    console.log("f2", this.arrayFechastest);
    
  })
  
};
date = []

ngOnDestroy(): void {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}

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

  let fechaSeleccionadaP = (this.diaSeleccionada);


if(fechaFormateada != fechaSeleccionadaFormateada){
      console.log("diferente fecha", this.arrayFechastest);
  let res = this.arrayFechastest.find((obj: any) => obj.data.timeStamp == fechaSeleccionadaP)
      // let res = testOBjF.find((obj:any) => obj.timeStamp == fechaSeleccionadaP)
      console.log("soy res exitoso",res);
      
      if(res){
        this.myServ.actualizarDatos(res.id,{saldo: this.inputImporte} ).then(()=> {
          console.log("Datos Actualizados");
        })
        res.saldo =  this.inputImporte;
        // this.myServ.guardarDato({timeStamp:fechaSeleccionada, saldo: this.inputImporte}).then(()=>{
        //   console.log("Se agrego");
           //window.location.reload();
        // })
        console.log("local",testOBjF);
        localStorage.clear();
        localStorage.setItem('testObj', JSON.stringify(testOBjF));
      }
      else{
        this.myServ.guardarDato({timeStamp:fechaSeleccionada, saldo: this.inputImporte}).then(()=>{
          console.log("Se agrego nuevo registro");
          //window.location.reload();
        })
    testOBjF.push({
        timeStamp: fechaSeleccionada,
        saldo: this.inputImporte
      });
      console.log("local2",testOBjF);
      localStorage.clear();

      localStorage.setItem('testObj', JSON.stringify(testOBjF));
      }
      
    }
    else{
       console.log("Misma fecha");
      // console.log(fechaActualHora0);
      
      let res = testOBjF.find((obj:any) => obj.timeStamp == fechaActualP)
      // console.log("res",res);
      res.saldo =  this.inputImporte;
      // console.log("res",res);
      console.log("local3", testOBjF);
      localStorage.clear();

      localStorage.setItem('testObj', JSON.stringify(testOBjF));
      
    }
    
     this.dialogRef.close();
  }
}

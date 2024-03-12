import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServVarsService {
  fechasYImportes:any[] = [{
    timeStamp: "Sat Mar 02 2024 00:00:00 GMT-0300 (hora estándar de Argentina)",
      saldo: 400
  },
  {
    timeStamp:"Fri Mar 01 2024 00:00:00 GMT-0300 (hora estándar de Argentina)",
    saldo: 322}];

fechaSeleccionada: any;


  constructor() { }

  agregar(valor:any){
    this.fechasYImportes.push(valor)
  }

  getFechasEImportes(){
    return this.fechasYImportes
  }

  cambioDeEstado(){
    return true
  }

  get FechaSeleccionada():any{
    console.log(this.fechaSeleccionada);
    return this.fechaSeleccionada
  }

  set FechaSeleccionada(fechaSParam:any){
    this.fechaSeleccionada = fechaSParam;
  }
  
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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


  constructor(private firebase: AngularFirestore) { }

  guardarDato(datos:any): Promise<any>{
    return this.firebase.collection('anioID').add(datos)
  }

  leerDatos(): Observable<any>{
   return this.firebase.collection('anioID').snapshotChanges();
  }

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

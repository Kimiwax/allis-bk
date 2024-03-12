import { Component, ChangeDetectionStrategy, Output,EventEmitter, OnInit} from '@angular/core';
import { NbCalendarDayCellComponent, NbCalendarMonthCellComponent } from '@nebular/theme';

@Component({
  selector: 'app-calendario-dinero',
  templateUrl: './calendario-dinero.component.html',
styles: [`
.cell-content {
  flex-direction: column;
}
`],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarioDineroComponent extends NbCalendarDayCellComponent<Date> implements OnInit {
@Output() diaEventEmitter = new EventEmitter<any>();
testObj: any;

ngOnInit(): void {
  let testObjs: any = localStorage.getItem('testObj') || [];
  let testOBjF = JSON.parse(testObjs);
  // console.log(testOBjF);
  
  this.testObj = testOBjF
}

// testObj = [{
//   timeStamp: "Sat Mar 02 2024 00:00:00 GMT-0300 (hora estándar de Argentina)",
//     saldo: 400
// },
// {
//   timeStamp:"Fri Mar 01 2024 00:00:00 GMT-0300 (hora estándar de Argentina)",
//   saldo: 322}];
// saldoAlDia = 0;

editarDia(day:any) {

  let fechaActual = (new Date()).toString();
  let fechaParseada = new Date(fechaActual);
  let timeStamp = Date.now();
  let fecha = new Date(timeStamp);
  let diaParseado = fechaParseada.getDate();
  let mesParseado = fechaParseada.getMonth() + 1;
  let anioParseado = fechaParseada.getFullYear();
  const fechaFormateada: string = `${diaParseado}/${mesParseado}/${anioParseado}`;
  console.log(fechaFormateada);
  

  let fechaSeleccionada = (this.date).toString();
  let fechaSeleccionadaParseada = new Date(fechaSeleccionada);
  let diaFechaSeleccionadaParseada = fechaSeleccionadaParseada.getDate();
  let mesFechaSeleccionadaParseada = fechaSeleccionadaParseada.getMonth() + 1;
  let anioFechaSeleccionadaParseada = fechaSeleccionadaParseada.getFullYear();
  const fechaSeleccionadaFormateada = `${diaFechaSeleccionadaParseada}/${mesFechaSeleccionadaParseada}/${anioFechaSeleccionadaParseada}`;
console.log(fechaSeleccionada);


// for (const iterator of this.testObj) {
//   if(fechaFormateada != fechaSeleccionadaFormateada && iterator.timeStamp){
//     console.log("diferente fecha");

//   }
//   else{
//     console.log("Misma fecha");
    
//   }
  
// }

}

transformarDia(timestamp:any){
let fecha = new Date(timestamp);
return fecha.getDate();
}

transformarMes(timestamp:any){
let fecha = new Date(timestamp);
return fecha.getMonth() + 1;
}

}
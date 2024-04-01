import { Component, ChangeDetectionStrategy, Output,EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbCalendarDayCellComponent, NbCalendarMonthCellComponent } from '@nebular/theme';
import { Observable } from 'rxjs';

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
  console.log("cambio algo");
  

  let testObjs: any = localStorage.getItem('testObj') || [];
  let testOBjF = JSON.parse(testObjs);
  // console.log(testOBjF);
  
  this.testObj = testOBjF
}
test(event:StorageEvent):void{
console.log("cambie datos storage", event);
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
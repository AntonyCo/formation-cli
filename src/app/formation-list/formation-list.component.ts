import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  @Input()
  public formation:Formation;

  @Output()
  formationSelected:EventEmitter<Formation> = new EventEmitter<Formation>();
  
  selectFormation() {
    this.formationSelected.emit(this.formation);
  }

  @Input()
  public isFirst:boolean;
  @Input()
  public isLast:boolean;
  @Input()
  public isEven:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}

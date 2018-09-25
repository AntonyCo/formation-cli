import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css'],
})
export class InterpolateComponent implements OnInit {

  public firstname:string = 'Default firstname';
  public lastname:string = 'Default lastname';
  public formation:Formation = new Formation('formation java', 'about JEE', 10, new Date(2018, 1, 10) , new Date(2018, 1, 20));
  public formationJS:Formation;
  public colorSwitch:string = 'red';
  public isHidden:boolean = false;
  public isDisplay:boolean = true;

  public formationList:Formation[] = [
    new Formation('formation java', 'about JEE', 10, new Date(2018, 1, 10) , new Date(2018, 1, 20)),
    new Formation('formation css', 'about style', 12.5, new Date(2018, 2, 10) , new Date(2018, 2, 20)),
    new Formation('formation html', 'about html', 8, new Date(2018, 3, 10) , new Date(2018, 3, 20)),
    new Formation('formation angular', 'about ng', 5.55, new Date(2018, 4, 10) , new Date(2018, 4, 20))
  ]
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.formationJS= new Formation('Angular', 'about ng', 5.55, new Date(2018, 4, 10) , new Date(2018, 4, 20));
    }, 3000)
    setInterval(() =>{
      this.colorSwitch === 'first' ? this.colorSwitch='last' : this.colorSwitch='first';
      }, 1000)    
    }

  handleClick() {
    this.isHidden = !this.isHidden;
  }

  mouseOver(){
    console.log('Mouse over !');
  }

  mouseOut(){
    console.log('Mouse out !');
  }

  displayFormation(){
    this.isDisplay = !this.isDisplay;
  }

  getFullName():string{
    return `${this.firstname} ${this.lastname}`;
  }

  handleFormationSelected(formation) {
    console.log('Formation selected', formation.name);
    }
  
}

import { Component, OnInit } from '@angular/core';
import { Porudzbina } from 'src/app/models/porudzbina.model';

@Component({
  selector: 'app-potrosac-home',
  templateUrl: './potrosac-home.component.html',
  styleUrls: ['./potrosac-home.component.css']
})
export class PotrosacHomeComponent implements OnInit {
  
  Lista: Porudzbina[] = [];
   prikaz: Porudzbina[]= new Array()

  constructor() { }

  ngOnInit(): void {

    this.Lista.forEach(element => {
      if(element.deliveryTime < new Date()){
        element.status = "Izvrseno";
      }
      if(element.status === "Dostavlja se"){
        this.prikaz.push(element);
      }
      
    });
    console.log(this.Lista);
    }
  

}

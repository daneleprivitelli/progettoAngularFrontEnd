import { Component, OnInit } from '@angular/core';
import { Recensione } from '../models/recensioni';
import {RecensioneDataService} from './recensione-data.service';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.css']
})
export class RecensioneComponent implements OnInit {

  recensioni: Recensione[] = [];

  constructor(private recensioneService: RecensioneDataService) { }

  ngOnInit(): void {

    this.recensioneService.getRecensioni().subscribe(
      response => {
        console.log('test');
        this.recensioni = response;
        console.log(this.recensioni.length);
      },

      error =>{
        console.log(error);
      }
    )

  }

}

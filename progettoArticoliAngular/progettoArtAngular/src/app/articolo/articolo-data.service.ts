import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Articolo } from '../models/articoli';

@Injectable({
    providedIn: 'root'
})
export class ArticoloDataService{


    constructor(private httpClient: HttpClient){}

    getArticoli(){
        return this.httpClient.get<Articolo[]>('http://localhost:8083/api/rest');
    }

}
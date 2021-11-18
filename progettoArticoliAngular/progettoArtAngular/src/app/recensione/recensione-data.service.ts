import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recensione } from '../models/recensioni';

@Injectable({
    providedIn: 'root'
})
export class RecensioneDataService{


    constructor(private httpClient: HttpClient){}

    getRecensioni(){
        return this.httpClient.get<Recensione[]>('http://localhost:8083/api/rest');
    }

}
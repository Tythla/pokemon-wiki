import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor(private http:HttpClient) { }

  getList() {
    return this.http.get<any>(this.api)
  }
}

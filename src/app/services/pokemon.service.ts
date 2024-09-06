import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
  private selectedPokemon = new BehaviorSubject<Pokemon | null>(null);

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<any>(this.api).pipe(map((res) => res.results));
  }

  setSelectedPokemon(pokemon: Pokemon): void {
    this.selectedPokemon.next(pokemon);
  }

  getSelectedPokemon(): Observable<Pokemon | null> {
    return this.selectedPokemon.asObservable();
  }

  getPokemon(url: string) {
    return this.http.get<any>(url);
  }
}

export interface Pokemon{
  name: string;
  url: string;
}

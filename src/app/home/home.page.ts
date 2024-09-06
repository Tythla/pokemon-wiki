import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { PokemonService, Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  private pokemonS = inject(PokemonService);
  pokemons:Pokemon[]= [];

  constructor() {
    this.getPokemons();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getPokemons() {
    this.pokemonS.getList().subscribe(pokemons => {
      this.pokemons = pokemons;
    })
  }

  setPokemon(pokemon:Pokemon) {
    this.pokemonS.setSelectedPokemon(pokemon);
  }
}

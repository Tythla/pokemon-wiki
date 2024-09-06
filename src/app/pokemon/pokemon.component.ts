import { Component, Input, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { IonButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PokemonService, Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class PokemonComponent implements OnInit {
  name!: string;
  url!: string;
  img!: string;
  type!: string;

  constructor(private route:ActivatedRoute, private pokemonS:PokemonService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name') || '';
      
    });
    this.pokemonS.getSelectedPokemon().subscribe(res => (this.url = res!.url))
    this.pokemonS
      .getPokemon(this.url)
      .subscribe(
        (res) => {
          this.img = res.sprites.other.home.front_default;
          this.type = res.types[0].type.name;
        }
      );
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  standalone: true,
})
export class PokemonComponent implements OnInit {
  @Input() name!: string;
  @Input() url!: string;

  constructor() {}

  ngOnInit() {}
}

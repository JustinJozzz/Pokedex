import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';
import { Observable } from 'rxjs/internal/Observable';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  $pokemon: Observable<Pokemon>;

  constructor(private pokemonService: PokemonService) {
    this.$pokemon = this.pokemonService.getPokemonById(1);
  }

  ngOnInit() {
  }

}

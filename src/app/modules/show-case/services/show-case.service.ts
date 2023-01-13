import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface Pokemon {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ShowCaseService {
  readonly URL_API = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getDataImgPokemon(): Observable<string[]> {
    return this.http.get<{ results: Pokemon[] }>(this.URL_API).pipe(
      map((res) => {
        return res.results.map((pok) => {
          const id = pok.url.split('/')[6];
          return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        });
      })
    );
  }
}

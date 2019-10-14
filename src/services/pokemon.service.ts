import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  route = `${environment.apiUrl}/pokemon`;

  constructor(private http: HttpClient) { }

  getPokemonById(id: number) {
    return this.http.get(`${this.route}/${id}`);
  }
}

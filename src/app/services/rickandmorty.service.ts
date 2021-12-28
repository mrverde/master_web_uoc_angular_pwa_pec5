import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';
import { getAllCharacters } from '../models/allCharacters.interface';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  getAllCharacters(page?: number): Observable<getAllCharacters> {
    return this.http.get<getAllCharacters>(`https://rickandmortyapi.com/api/character?page=${page ? page : 1}`)
  }

  getCharacterById(id: String): Observable<Character> {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}

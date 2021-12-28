import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  characters: Character[] = []
  currentPage: number
  maxPages: number
  loading: boolean

  constructor(private rickandmortyService: RickandmortyService) {
    this.loading = false
    this.currentPage = 1
  }

  goToPage(): void {
    this.loading = true
    this.rickandmortyService
      .getAllCharacters(this.currentPage)
      .subscribe(response => {
        this.characters = response.results
        this.maxPages = response.info.pages
      },
        error => console.log("error: " + error),
        () => this.loading = false
      )
  }

  ngOnInit(): void {
    this.goToPage()
  }

  nextPage(): void {
    this.currentPage += 1
    this.goToPage()
  }

  prevPage(): void {
    this.currentPage -= 1
    this.goToPage()
  }
}

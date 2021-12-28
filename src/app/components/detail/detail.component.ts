import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

  character: Character;
  showDetails: boolean;

  constructor(
    private rickandmortyService: RickandmortyService,
    // to read parameter from url
    private activatedRoute: ActivatedRoute,
    // to redirect the user of htis view if we don't have a valid identifier
    private router: Router
  ) {
    this.showDetails = false;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('Identifier --> ', id)

    this.rickandmortyService.getCharacterById(id).subscribe(character => {

      if (!character) {
        return this.router.navigateByUrl('/')
      }

      this.character = character
      console.log('character:::: ', this.character)
    })
  }

  toggleShowDetails(): void {
    this.showDetails = !this.showDetails
  }

}

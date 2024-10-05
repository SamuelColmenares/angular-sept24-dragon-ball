import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 500,
    },
    {
      name: 'Goku',
      power: 9700,
    },
    {
      name: 'Vegueta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    console.log('character MAIN-PAGE:>> ', character);
    this.characters.push({...character});
  }
}

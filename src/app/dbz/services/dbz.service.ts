import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 500,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9700,
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 7500,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };

    console.log('character MAIN-PAGE:>> ', newCharacter);
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((c) => c.id !== id);
    // this.characters.splice(index, 1);
  }
}

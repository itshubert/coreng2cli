import { Injectable } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
    { id: 1, name: "Hubert" },
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Injectable()
export class HeroService {

    heroes: Hero[] = HEROES;

    constructor() { }

    getHeroes(): Hero[] {
        return HEROES;
    }

    getHeroesPromise(): Promise<Hero[]> {
        return Promise.resolve(this.heroes);
    }

}

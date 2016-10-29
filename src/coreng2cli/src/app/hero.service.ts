import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';

// can't seem to get toPromise to work with .NET Web API so we use rx Observables instead
//import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

//const HEROES: Hero[] = [
//    { id: 1, name: "Hubert" },
//    { id: 11, name: 'Mr. Nice' },
//    { id: 12, name: 'Narco' },
//    { id: 13, name: 'Bombasto' },
//    { id: 14, name: 'Celeritas' },
//    { id: 15, name: 'Magneta' },
//    { id: 16, name: 'RubberMan' },
//    { id: 17, name: 'Dynama' },
//    { id: 18, name: 'Dr IQ' },
//    { id: 19, name: 'Magma' },
//    { id: 20, name: 'Tornado' }
//];

const HEROESURL = "/api/heroes";

@Injectable()
export class HeroService {

    private headers;
    //heroes: Hero[] = HEROES;
    heroes: Hero[];

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    //getHeroes(): Hero[] {
    //    return HEROES;
    //}

    //getHeroesPromise(): Promise<Hero[]> {
    //    //return Promise.resolve(this.heroes);
    //    return this.http.get(HEROESURL)
    //        .toPromise()
    //        .then(response => {
    //            console.log('resonse ' + response);
    //            return response.json().data as Hero[];
    //        })
    //        .catch(this.handleError);
    //}

    getHero(id: Number) {
        return this.http.get(HEROESURL + '/' + id)
            .map(response => response.json() as Hero);
    }

    getHeroes() {
        return this.http.get(HEROESURL)
            .map(response => response.json() as Hero[]);
    }

    save(hero: Hero) {
        return this.http.post(HEROESURL, hero, { headers: this.headers })
            .map(response => response.json() as Hero);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

}

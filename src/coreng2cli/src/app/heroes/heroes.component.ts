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
    //newHero: Hero = {
    //    Id: 0,
    //    Name: ''
    //};

    newName: string;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.reloadHereos();
    }

    private reloadHereos(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        let link = ['/detail', hero.Id];
        this.router.navigate(link);
    }

    add(): void {

        console.log('newName: ' + this.newName);

        let newHero: Hero = {
            Id: 0,
            Name: this.newName
        };

        this.heroService.save(newHero)
            .subscribe(hero => {
                //this.newHero = {
                //    Id: 0,
                //    Name: null
                //};

                this.newName = null;
                this.reloadHereos();
            });
    }

}

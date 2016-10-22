import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

declare var $: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    // hero: MyHero = {
    //   id: 1,
    //   name: "Test"
    // };

    // hero: Hero;

    constructor(
        private heroService: HeroService
    ) { }

    //constructor(
    //    private heroService: HeroService,
    //    private router: Router
    //) { }

    ngOnInit() {
        
        // this.hero = new Hero();
        // this.hero.id = 1;
        // this.hero.name = "Hubert";

        // this.hero = {
        //   id: 1,
        //   name: "Hubert"
        // };

        this.heroService.getHeroesPromise().then(heroes => this.heroes = heroes.slice(0, 5));
        $("body").css('background-color', 'yellow');
    }

    //gotoDetail(hero: Hero): void {
    //    let link = ['/detail', hero.id];
    //    this.router.navigate(link);
    //}

}

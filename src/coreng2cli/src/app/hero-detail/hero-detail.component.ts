import { Component, Input, OnInit } from '@angular/core';
// so we can fetch parameters from route
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from '../hero.service';

import { Hero } from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            // route params are always string so we convert to int using (+) js operator
            let id = +params['id'];
            console.log('id: ' + id);
            this.heroService.getHero(id)
                .subscribe(hero => this.hero = hero);
        });
    }

    save(): void {

    }

    goBack(): void {
        window.history.back();
    }

}

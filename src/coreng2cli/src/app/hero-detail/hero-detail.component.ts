import { Component, Input, OnInit } from '@angular/core';
// so we can fetch parameters from route
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Follower } from '../follower';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;
    follower: Follower = { Id: 0, HeroId: null, Name: null };
    followers: Follower[];
    
    updateSuccessful: boolean = false;
    updateFollowerSuccessful: boolean = false;se

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
                .subscribe(hero => {
                    this.hero = hero;

                    if (this.hero) {
                        this.follower.HeroId = this.hero.Id;
                        
                    }
                });
        });
    }

    getFollowers(): void {
        this.heroService.getFollowersByHero(this.hero.Id)
            .subscribe(followers => this.followers = followers);
    }

    save(): void {
        this.updateSuccessful = false;

        this.heroService.save(this.hero)
            .subscribe(hero => {
                this.hero = hero;
                this.updateSuccessful = true;
            });
    }

    goBack(): void {
        window.history.back();
    }

    addFollower(): void {
        this.heroService.saveFollower(this.follower)
            .subscribe(follower => {
                this.follower = {
                    Id: 0,
                    HeroId: this.hero.Id,
                    Name: null
                };

                this.getFollowers();
            });
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lookedup',
  templateUrl: './lookedup.component.html'
})
export class LookedupComponent implements OnInit {

    heroes:any[] = []
    result:string;

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router ) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
        this.result = params['value']
        this.heroes = this._heroesService.searchHero( params['value'] );
        console.log(this.heroes);
    })

  }

  seeHero(idx:number) {
    this.router.navigate( ['/hero', idx] );
  }

}

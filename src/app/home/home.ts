import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Food} from '../services/food/food'
import { CommonModule } from '@angular/common';
import {FOOD} from '../shared/models/food'
import { ActivatedRoute } from '@angular/router';
import {Search} from '../search/search'
import { Tags } from "../tags/tags";



@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterModule, CommonModule, Search, Tags],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  foods:FOOD[]=[]
  constructor(private foodService:Food , private route : ActivatedRoute){}
  ngOnInit():void{
      this.route.params.subscribe(params =>{
        if(params['searchTerm'])
          this.foods= this.foodService.getAllFoodsBySearchTerm(params['searchTerm'])
        else if(params['tagName'])
            this.foods= this.foodService.getAllFoodsByTag(params['tagName'])
        else
                this.foods =this.foodService.getAll();
            

          
      })
  }

  getStarsArray(stars: number): number[] {
  return Array(5).fill(0).map((_, i) => i < Math.round(stars) ? 1 : 0);
}
}
 
import { Component } from '@angular/core';
import { FOOD } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../services/food/food';
import {Tags} from '../tags/tags';


import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, Tags],
  templateUrl: './food-page.html',
  styleUrl: './food-page.scss',
})
export class FoodPage {
  food!:FOOD;
 
  constructor(private activatedRoute:ActivatedRoute , private foodService:Food) {
    activatedRoute.params.subscribe((params) =>{
      if(params['id'])
        this.food=this.foodService.getFoodById(params['id'])


      
    })
  }



    getStarsArray(stars: number): number[] {
  return Array(5).fill(0).map((_, i) => i < Math.round(stars) ? 1 : 0);
}
  ngOnInit():void{
    
  }
}


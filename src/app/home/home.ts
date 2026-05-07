import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Food} from '../services/food/food'
import { CommonModule } from '@angular/common';
import {FOOD} from '../shared/models/food'


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterModule ,CommonModule,],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  foods:FOOD[]=[]
  constructor(private foodService:Food){}
  ngOnInit():void{
    this.foods =this.foodService.getAll();
  }

  getStarsArray(stars: number): number[] {
  return Array(5).fill(0).map((_, i) => i < Math.round(stars) ? 1 : 0);
}
}
 
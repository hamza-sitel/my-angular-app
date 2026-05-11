import { Component } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { CommonModule } from '@angular/common';

// import { NgIf, NgForOf } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { RouterLink } from "@angular/router";
import { Food } from '../services/food/food';

@Component({
  selector: 'app-tags',
  standalone:true,
  imports: [ RouterLink,CommonModule],
  templateUrl: './tags.html',
  styleUrl: './tags.scss',
})
export class Tags {

    tags:Tag[]=[];
      constructor(private foodService:Food ){}
  ngOnInit():void{
    this.tags= this.foodService.getAllTag()
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  subs:any;
  catId:any;

  constructor(private routes: ActivatedRoute, private dataService: DataService) {
    this.catId = this.routes.snapshot.paramMap.get('catId')
    this.dataService.getSubcategory(this.catId).subscribe( response=>{this.subs=response.data})
    }

  ngOnInit(): void {
  }

}

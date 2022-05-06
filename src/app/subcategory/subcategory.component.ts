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
  id1:any;

  constructor(private routes: ActivatedRoute, private dataService: DataService) {
    this.id1 = this.routes.snapshot.paramMap.get('catId')
    this.dataService.getSubcategory(this.id1).subscribe( response=>{this.subs=response.data})
    }

  ngOnInit(): void {
  }

}

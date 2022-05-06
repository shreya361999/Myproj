import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories:any;
  public image_url = 'http://rjtmobile.com/grocery/images/';

  constructor(private dataService:DataService , private router: Router) { }
  
  
  ngOnInit(): void {
    this.dataService.getCategory().subscribe(
      x=> {this.categories=x.data
      })
  }

  
}

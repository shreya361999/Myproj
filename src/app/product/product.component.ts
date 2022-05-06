import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products:any;
  id:any;
  public image_url = 'http://rjtmobile.com/grocery/images/';
  constructor(private routes: ActivatedRoute, private dataService: DataService) {
    this.id = this.routes.snapshot.paramMap.get('catId')
    
   }

  ngOnInit(): void {
    this.dataService.getProducts(this.id).subscribe(
      x=> {this.products = x.data
      })
  }
  

}

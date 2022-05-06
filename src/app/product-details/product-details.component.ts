import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
_id:any;
dets:any;
  constructor(private routes:ActivatedRoute, private dataService:DataService) { 
    this._id = this.routes.snapshot.paramMap.get('_id');

    this.dataService.getProductsDetails(this._id).subscribe((respon: { data: any; })=>{

    this.dets=respon.data
})
  }

  ngOnInit(): void {
  }

}

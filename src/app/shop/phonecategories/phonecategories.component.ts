import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Categoryproducts } from 'src/app/interfaces/category-products';
import { CategoriesService } from 'src/app/services/categories.service';
import { HomecategoriesService } from 'src/app/services/homecategories.service';

@Component({
  selector: 'app-phonecategories',
  templateUrl: './phonecategories.component.html',
  styleUrls: ['./phonecategories.component.css']
})
export class PhonecategoriesComponent implements OnInit {

  catproducts:Categoryproducts[] = [];
  cats: Category[] = [];
  id:number = 0;

  constructor(private categoriesService : CategoriesService,private route:ActivatedRoute, private homecategoriesService: HomecategoriesService) {}

  ngOnInit(): void {

    this.homecategoriesService.getPhoneCategories().subscribe(data => {
      this.cats = data;
    });
    
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.categoriesService.getCategoryPhones(this.id).subscribe(
          datax =>{
            this.catproducts = datax;
            console.log(this.catproducts)
          }
        )
      }
    );
  }

}

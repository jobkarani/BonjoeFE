import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { TopsellingService } from 'src/app/services/topselling.service';

@Component({
  selector: 'top-homeappliances',
  templateUrl: './top-homeappliances.component.html',
  styleUrls: ['./top-homeappliances.component.css']
})
export class TopHomeappliancesComponent implements OnInit{
  
  constructor(private topsellingService: TopsellingService) {}

  topSales: Product [] = [];
  phonenumber: number = 254724087213;

  ngOnInit(): void {
    this.topsellingService.getTopHomeAppliances().subscribe(products => {
      this.topSales = products;
      console.log(this.topSales);
    });
  }

  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.topSales[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.topSales[index].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://bonjoe-fe.vercel.app/shop/product-details/${this.topSales[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }

}

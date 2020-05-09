import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from './IProduct';
import {IdFilterPipePipe} from './id-filter-pipe.pipe';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  title = 'ecommerce';
  priceval = '';

  products: Array<IProduct> = new Array<IProduct>();
  imageWidth = 100;
  imageMargin = 2;
  flippedImages = false;
  tshirt: string;
  hoveredProductId: string;

  @ViewChild('searchbox', { static: false }) public searchbox: ElementRef;

  ngOnInit(){
    this.products = this.getProducts();
    console.log(this.products);
  }

  toggleImage(hoveredProductId: string){
    this.flippedImages = null;
    this.hoveredProductId = hoveredProductId;
  }

  flipAllImages(){
    this.hoveredProductId = null;
    this.flippedImages = !this.flippedImages;
  }

  searchByPrice(event){
    this.priceval = event.target.value;
  }

  // service, API,
  getProducts(): IProduct[]{
    return [{
      productId: 1,
      productName: 'Google logo',
      productCode: 'GEO-312',
      price: 33.88,
      description: 'Graphical presentation of a google G',
      starRating: 4.2,
      imageUrl: 'https://media.tractorsupply.com/is/image/TractorSupplyCompany/1023422?$456$',
      imageUrlfrnt: 'https://cdn.shopify.com/s/files/1/0862/2088/products/MIESAI-Mono-Black-1.jpg?v=1525115032',
      imageUrlBack: 'https://cdn.shopify.com/s/files/1/0862/2088/products/MIESAI-Mono-Black-4.jpg?v=1525115047',
      inStock: true,
    }, {
      productId: 2,
      productName: 'Neck Tee',
      productCode: 'SEO-999',
      price: 99.99,
      description: 'Supply your own design to this low neck',
      starRating: 2.5,
      imageUrl: 'https://www.ikea.com/ca/en/images/products/socker-watering-can__0635850_PE697471_S5.JPG?f=xxl',
      imageUrlfrnt: 'https://cdn.shopify.com/s/files/1/0862/2088/products/Riga-White-Ladies1.jpg?v=1585735913',
      imageUrlBack: 'https://cdn.shopify.com/s/files/1/0862/2088/products/Riga-White-Ladies3.jpg?v=1585735913',
      inStock: false
    }, {
      productId: 3,
      productName: 'Polo',
      productCode: 'DDD-777',
      price: 73.44,
      description: 'Polo shirt',
      starRating: 4.4,
      imageUrl: 'https://www.brights.co.za/wp-content/uploads/2019/07/64283.png',
      imageUrlfrnt: 'https://cdn.shopify.com/s/files/1/0862/2088/products/Mono-BalticWhite-W-front.jpg?v=1525114906',
      imageUrlBack: 'https://cdn.shopify.com/s/files/1/0862/2088/products/Mono-BalticWhite-W-back.jpg?v=1525114929',
      inStock: true
    }, {
      productId: 4,
      productName: 'Hello Summer',
      productCode: 'DDD-777',
      price: 72.22,
      description: 'Cartoon summer shirt',
      starRating: 4.4,
      imageUrl: 'https://www.brights.co.za/wp-content/uploads/2019/07/64283.png',
      imageUrlfrnt: 'https://bornlion.com/wp-content/uploads/2018/12/antony-joshua-born-lion-boxing-tshirt-front.jpg',
      imageUrlBack: 'https://bornlion.com/wp-content/uploads/2018/12/antony-joshua-born-lion-boxing-tshirt-back.jpg',
      inStock: false
    }];
  }
}

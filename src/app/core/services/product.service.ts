import { Product } from './../model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public listProduct : Product[] =[
    {id:15,
      title: 'Outfit 3',
      price: 280,
      nbrLike: 40,
      description: 'nice Outfit',
      category: 'men',
      quantity: 3,
      picture:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2F3d%2Fbc3d02841768421f1fab4e03f68be288b8851c5c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'},
    {id:12,
     title: 'T-shirt 1',
     price: 28,
     nbrLike: 40,
     description: 'nice T-shirt',
     category: 'women',
     quantity: 3,
     picture:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F55%2Fff55f8591a27acf2678a6f531add67167d41993a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    },
    {
      id: 12,
      title: 'T-shirt 2',
      price: 18,
      nbrLike: 40,
      description: 'nice T-shirt',
      category: 'women',
      quantity: 0,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F94%2Fa0%2F94a0f95305117dab710e5e5a829422b43dde52e2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'
    },
    {id:12,
      title: 'Outfit 1',
      price: 280,
      nbrLike: 0,
      description: 'nice T-shirt',
      category: 'men',
      quantity: 0,
      picture:'http://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F42%2F31%2F4231ea87da0d835e0a19486450d2d233cfdc2564.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'}
    ];

  constructor() { }
}

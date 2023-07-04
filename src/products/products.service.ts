import { Injectable } from '@nestjs/common';
import { Products } from './products.model';

@Injectable() // Injectable 데코레이터는 다른 컴포넌트에서 이 서비스를 사용할 수 있게 함
export class ProductsService {
    private products: Products[] = []; // products 값을 수정하는 것을 방지하기 위해 private 사용
    
    getAllProducts(): Products[] {
        return this.products;
    }
    createProducts(name: string, description: string, image: string, price: string, createdAt: Date, category:String ) {
        const products: Products = {
            name: name,
            description: description,
            image: image,
            price: price,
            createdAt: createdAt,
            category: category
        }
        this.products.push(products)
    }
}

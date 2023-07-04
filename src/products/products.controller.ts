import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.model';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { } // 암묵적으로 Property 선언
    
    @Get('/') // 모든 상품 목록을 불러옴
    getAllProducts(): Products[] {
        return this.productsService.getAllProducts();
    }
    
    @Post()
    createProducts(
        @Body('name') name:string,
        @Body('description') description:string,
        @Body('image') image:string,
        @Body('price') price:string,
        @Body('createdAt') createdAt:Date,
        @Body('category') category:string,
     ): void {
        return this.productsService.createProducts(
            name,
            description,
            image,
            price,
            createdAt,
            category,
          );
          
     } 
}

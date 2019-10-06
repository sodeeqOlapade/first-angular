import { ProductService } from "./product.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "./product";

@Component({
  selector: "pm-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = "Product Detail";
  errorMessage = "";
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get("id");
    this.pageTitle += param;
    this.productService.getProducts().subscribe({
      next: data => {
        this.product = data.filter(product => product.productId === param)[0];
      },
      error: err => {
        this.errorMessage = err;
        console.log(`Error: ${this.errorMessage}`);
      }
    });

    // this.product = {
    //   productId: 2,
    //   productName: "Garden Cart",
    //   productCode: "GDN-0023",
    //   releaseDate: "March 18, 2019",
    //   description: "15 gallon capacity rolling garden cart",
    //   price: 32.99,
    //   starRating: 4.2,
    //   imageUrl: "assets/images/garden_cart.png"
    // };
  }

  onBack(): void {
    this.router.navigate(["/products"]);
  }
}

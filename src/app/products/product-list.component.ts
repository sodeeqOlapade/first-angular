import { ProductService } from "./product.service";
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageHeightAndWidth: number = 50;
  showImage: boolean = false;
  filteredProducts: IProduct[];
  products: IProduct[];
  errMessage: string;

  constructor(private productService: ProductService) {
    // this.filterString = "cart";
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }

  _filterString: string;

  get filterString(): string {
    return this._filterString;
  }

  set filterString(value: string) {
    this._filterString = value;
    this.filteredProducts = this.filterString
      ? this.performFilter(this.filterString)
      : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => {
        this.errMessage = err;
        console.log(`Error: ${this.errMessage}`);
      }
    });
  }
}

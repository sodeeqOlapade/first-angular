import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pm-page-notfound",
  templateUrl: "./page-notfound.component.html",
  styleUrls: ["./page-notfound.component.css"]
})
export class PageNotfoundComponent implements OnInit {
  pageTitle = "Page Not Found";

  constructor() {}

  ngOnInit() {}
}

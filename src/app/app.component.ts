import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Cat } from './cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cats: Array<Cat>;
  selectedItems: Array<number> = [];

  constructor( private httpService: HttpService ) { }

  ngOnInit() {
    this.httpService.getData().subscribe(
      (data: Array<Cat>) => {
        this.cats = data;
      },
      error => console.log(error)
      );
  }

  onSelect(id: number): void {
    const index = this.selectedItems.indexOf(id);
    if (index === -1) {
      this.selectedItems.push(id);
    } else {
      this.selectedItems.splice(index, 1);
    }
  }

  showSelectedItems(): void {
    alert(this.selectedItems.sort());
  }

}

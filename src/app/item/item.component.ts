import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() cat: Cat;
  @Output() onSelect = new EventEmitter<number>();
  marked = false;

  constructor() { }

  selectItem(id: number): void {
    this.onSelect.emit(id);
    this.marked = !this.marked;
  }

}

import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output() onIncrement = new EventEmitter<number>();
  onClick = output();

  @Output() onSearch = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();
  @Input() search = '';

  mysearch = input<string>();
  mysearchChange = output<string>();

  emitSearch(value: string){
    this.onSearch.emit(value);
  }

  emitSearch2(value: string){
    this.searchChange.emit(value);
  }

  incrementCounter(){
    this.onIncrement.emit();
  }
}

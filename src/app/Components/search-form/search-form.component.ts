import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchSome: string;
  @Output() issearch = new EventEmitter<any>();

  @Output() isrepossearch = new EventEmitter<any>();

  search() {
    this.issearch.emit(this.searchSome);
  }

  reposSearch() {
    this.isrepossearch.emit(this.searchSome);
  }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchUser: string;
  @Output() searchOutput = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  search() {
    this.searchOutput.emit(this.searchUser);
    this.searchUser = '';
  }
}

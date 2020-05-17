import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  @Output() searchOutput = new EventEmitter<any>();

  searchUser: string;

  search() {
    this.searchOutput.emit(this.searchUser);
    this.searchUser = '';
  }

  constructor() {}

  ngOnInit() {}
}

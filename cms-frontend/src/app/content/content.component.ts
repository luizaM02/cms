import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  viewType: string = "card";

  constructor() {
  }

  ngOnInit(): void {

  }

  viewTypeChanged(viewType: string) {
    this.viewType = viewType;
  }

}

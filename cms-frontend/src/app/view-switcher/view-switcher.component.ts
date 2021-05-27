import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.css']
})
export class ViewSwitcherComponent implements OnInit {

  @Output() viewTypeChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  viewTypeChangedTriggered(matButtonToggleChange: MatButtonToggleChange) {
    this.viewTypeChanged.emit(matButtonToggleChange.value)
  }

}

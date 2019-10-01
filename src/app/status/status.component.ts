import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() error: string;
  classNamed: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (this.error === "Successfully sent." || this.error == "Wait...") {
      console.log('success');
      this.classNamed = "success";
    } else {
      this.classNamed = "type_err";
    }
  }

}
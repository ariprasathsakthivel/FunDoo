import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DashboardComponent implements OnInit {

  isExpanded = false;
  centered = false;
  disabled = false;
  unbounded = false;
  radius=0;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  notes(){
    this.route.navigateByUrl("/dashboard/notes");
  }

  archive(){
    this.route.navigateByUrl("/dashboard/archive")
  }

  trash(){
    this.route.navigateByUrl("/dashboard/trash")
  }

}

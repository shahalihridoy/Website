import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.css']
})
export class LeftAsideComponent implements OnInit {

  term:string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  search(){
      this.router.navigate(['/search/'+this.term]);
  }
}

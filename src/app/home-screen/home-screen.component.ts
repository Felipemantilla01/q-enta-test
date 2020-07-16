import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  redirect(to){
    this.router.navigate([to],{relativeTo:this.activeRoute})
  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadServer() {
    this.router.navigate(['/servers']);
  }

  loadServer1(id : number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams : {ok: 'not', really: 'yes'}, fragment:'loading'});
  }

}

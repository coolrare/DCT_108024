import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export interface Item {
  Name: string;
  Position: string;
  Office: string;
  Age: string;
  'Start date': string;
  Salary: string;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  list: Item[];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(paramMap => {
      const num = +paramMap.get('num');
      this.httpClient.get('http://www.mocky.io/v2/5c9e523f3000005500ee97cf').subscribe((data: Item[]) => {
        console.log(data);
        this.list = data.slice(0, num ? num : data.length);
        console.log(this.list);
      });
    });
  }
}

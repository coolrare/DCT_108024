import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, takeUntil } from 'rxjs/operators';
import { interval, Subject, Subscription } from 'rxjs';

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
export class TablesComponent implements OnInit, OnDestroy {
  list: Item[];

  destroy$ = new Subject();
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {

    // interval(1000).pipe(takeUntil(this.destroy$)).subscribe(console.log);
    this.subscription = interval(1000).subscribe(console.log);

    this.route.queryParamMap
      .pipe(
        map(paramMap => +paramMap.get('num')),
        switchMap(num => this.getData(num).pipe(map((data: Item[]) => ({ data, num }))))
      )
      .subscribe((result: { data: Item[]; num: number }) => {
        console.log(result.data);
        this.list = result.data.slice(0, result.num ? result.num : result.data.length);
        console.log(this.list);
      });

    this.route.queryParamMap.subscribe(paramMap => {
      const num = +paramMap.get('num');
      this.getData(+paramMap.get('num')).subscribe((data: Item[]) => {
        console.log(data);
        this.list = data.slice(0, num ? num : data.length);
        console.log(this.list);
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();

    this.subscription.unsubscribe();
  }

  getData(num: number) {
    return this.httpClient.get<Item[]>('http://www.mocky.io/v2/5c9e523f3000005500ee97cf');
  }
}

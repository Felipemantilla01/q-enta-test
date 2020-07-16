import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { TableConfiguration, TableColumns, MessageService } from 'eter-ui';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, AfterViewInit {
  
  
  ELEMENT_DATA = []

  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  page

  displayedColumns: string[] = ['first_name', 'last_name', 'team', 'position'];
  dataSource 
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private http : HttpClient,
    private message : MessageService
  ) { }

  ngOnInit(): void {

    this.callApi()
  }

  ngAfterViewInit(){
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  change($event){
    console.log($event)

    this.pageSize = $event.pageSize
    this.page = $event.pageIndex

    this.callApi()
  }


  callApi(){
    
    this.http.get(`${environment.endpoint}/players?page=${this.page+1}&per_page=${this.pageSize}`).subscribe(
      res=>{
        console.log(res)
        this.ELEMENT_DATA = res['data']
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

        this.length = res['meta']['total_count']
      },
      err=>{
        this.message.Error('Error!',err.message)
      }
    )
  }

}



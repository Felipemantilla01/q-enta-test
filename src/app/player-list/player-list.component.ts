import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { TableConfiguration, TableColumns, MessageService } from 'eter-ui';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MdlPlayerInfoComponent } from '../mdl-player-info/mdl-player-info.component';
import { MdlPlayerAddEditComponent } from '../mdl-player-add-edit/mdl-player-add-edit.component';

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

  selection = new SelectionModel(true, []);

  displayedColumns: string[] = ['select','first_name', 'last_name', 'team', 'position'];
  dataSource 
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private http : HttpClient,
    private message : MessageService,
    public dialog: MatDialog
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

    this.selection.clear()
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


  selectionRow(element){
    console.log(element)
    this.message.InfoToast('Loading player info...',1000)
    this.http.get(`${environment.endpoint}/players/${element.id}`).subscribe(
      res=>{
        // this.message.SuccessToast('Correct!',1000)
        this.dialog.open(MdlPlayerInfoComponent, {
          width: '60vh',
          data:res
        })
      },
      err=>{
        this.message.Error('Error!', err.message)
      }
    )



    
  }

  isAllSelected() {
    if(this.dataSource){
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }else{
      return 0
    }
  }


  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  action(type){
    switch(type){
      case 'add':
        this.dialog.open(MdlPlayerAddEditComponent,{
          width: '70vh',
          data:{
            action:type,
            info:''
          }
        })
      break;

      case 'edit':
        this.dialog.open(MdlPlayerAddEditComponent,{
          width: '70vh',
          data:{
            action:type,
            info:this.selection.selected[0]
          }
        })
      break;

      case 'delete':


      /** @DELETE PETICION AL SERVIDOR PARA ELIMINAR UNO O MAS JUGADORES  */
      /*let responses = []
      let errors = []
      this.selection.selected.forEach(player=>{
        this.http.delete(`${environment.endpoint}/players/${player.id}`).subscribe(
          res=>responses.push(res),
          err=>errors.push(err)
        )
      })
      this.message.Info('Delete counter', `Deleted players:${responses.length} Errors : ${errors.length}`)*/

      this.message.SuccessToast(`Deleted ${this.selection.selected.length} players correctly`,3000)
      this.downloadObjectAsJson(this.selection.selected,`${type}-${this.selection.selected.length}-Player(s)`)

      break;
    }
  }

  downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

}



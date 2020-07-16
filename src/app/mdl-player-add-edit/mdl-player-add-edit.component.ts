import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mdl-player-add-edit',
  templateUrl: './mdl-player-add-edit.component.html',
  styleUrls: ['./mdl-player-add-edit.component.scss']
})
export class MdlPlayerAddEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MdlPlayerAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

  

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mdl-player-info',
  templateUrl: './mdl-player-info.component.html',
  styleUrls: ['./mdl-player-info.component.scss']
})
export class MdlPlayerInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MdlPlayerInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}

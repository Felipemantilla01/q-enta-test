import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'eter-ui';

@Component({
  selector: 'app-mdl-player-add-edit',
  templateUrl: './mdl-player-add-edit.component.html',
  styleUrls: ['./mdl-player-add-edit.component.scss']
})
export class MdlPlayerAddEditComponent implements OnInit {

  playerForm:FormGroup
  teams=[]
  teamId
  position

  constructor(
    public dialogRef: MatDialogRef<MdlPlayerAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder : FormBuilder,
    private http:HttpClient,
    private message : MessageService
  ) { }

  ngOnInit(): void {

    console.log(this.data)

    this.playerForm = this.formBuilder.group({
      first_name:'',
      last_name:'',
      height_feet:'',
      height_inches:'',
      weight_pounds:'',
      position:'',
      teamId:'',
    })

    this.http.get(`${environment.endpoint}/teams`).subscribe(
      res=>{
        this.teams = res['data']
      },err=>{
        this.message.Error('Error!', err.message)
      }
    )


    Object.keys(this.data.info).forEach((key,index)=>{      
      if(this.playerForm.controls[key]){
        this.playerForm.controls[key].setValue(this.data.info[key])
      }

      this.position = this.data.info.position
      this.teamId = this.data.info.team.id
      this.playerForm.controls.teamId.setValue(this.teamId)
      
    })
  }

  onChange(control,$event){
    console.log($event)
    this.playerForm.controls[control].setValue($event.value)
  }

  submit(){
    if(this.playerForm.valid){
      console.log(this.playerForm.value)

      if(this.data.action=='add'){
        let url = `${environment.endpoint}/players`
        console.log('Peticion POST al servidor:',url)
        
        this.message.SuccessToast('Player added correctly',2000)
        /**@POST PETICION AL SERVIDOR PARA CREAR JUGADOR*/
        /*this.http.post(`${environment.endpoint}/players`,this.playerForm.value).subscribe(
          res=>this.message.SuccessToast('Player added correctly'),
          err=>this.message.ErrorToast('Error!',err.message)
        )*/

      }else{
        let url = `${environment.endpoint}/players/${this.data.info.id}`
        console.log('Peticion PUT al servidor:',url)
        this.message.SuccessToast('Player updated correctly',2000)
        /**@PUT PETICION AL SERVIDOR PARA ACTUALIZAR JUGADOR*/
        /*this.http.put(url,this.playerForm.value).subscribe(
          res=>this.message.SuccessToast('Player updated correctly'),
          err=>this.message.ErrorToast('Error!',err.message)
        )*/
      }
      this.downloadObjectAsJson(this.playerForm.value,`${this.data.action}-Player-${this.playerForm.value.first_name}-${this.playerForm.value.last_name}`)

      this.dialogRef.close()
    }else{
      this.message.Info('Info!','You must have to complete the required fields')
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

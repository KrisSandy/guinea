import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogData } from '../models/dialogdata.model';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {

    let dialogData = new DialogData(); 

    dialogData.content = 'This is the text'
    dialogData.button1Text = 'OK'
    dialogData.button2Text = 'Cancel'

    const dialogRef = this.dialog.open(DialogComponent, {
      data: dialogData
    });

    dialogRef.componentInstance.onButton1Click.subscribe(() => {
      console.log("button 1 clicked");
    })

    dialogRef.componentInstance.onButton2Click.subscribe(() => {
      console.log("butto2 clcked")
    })
  }

}

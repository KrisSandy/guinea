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

    dialogData.title = 'New Dislog'
    dialogData.content = 'This is the text'
    dialogData.button1 = true
    dialogData.button1_text = 'OK'
    dialogData.button2 = false
    dialogData.button2_text = 'Cancel'

    const dialogRef = this.dialog.open(DialogComponent, {
      data: dialogData
    });
  }

}

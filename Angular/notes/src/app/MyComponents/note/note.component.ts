import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  title: string='';
  desc: string='';
  
  constructor(public dialogRef: MatDialogRef<NoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.dialogRef.close();
  }

  create(){
    this.dialogRef.close({title: this.title, desc: this.desc});
  }
}

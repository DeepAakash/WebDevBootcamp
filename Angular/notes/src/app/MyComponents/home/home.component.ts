import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ApiService } from 'src/app/services/api.service';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  notes: any = [];
  filteredNotes: any[] = [];

  constructor(
    private apiService: ApiService, 
    private dialog: MatDialog){
  }

  ngOnInit(): void {
      this.apiService.getAllNotes().subscribe((notes)=>{
        this.notes=notes;
        this.filteredNotes=this.notes;
      })
  }

  filterChanged(ev: MatSelectChange) {
    const value = ev.value;
    this.filteredNotes = this.notes;
    if(value){
      this.filteredNotes = this.filteredNotes.filter((t: { status: any; }) => t.status === value);
      console.log(this.filteredNotes);
    }else{
      this.filteredNotes = this.notes;
    }
  }
  
  openDialog(){
    const dialogRef=this.dialog.open(NoteComponent, {
      width: '500px',
      hasBackdrop: true,
      role: 'dialog',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.apiService.createNote(data.title, data.description).subscribe((result: any)=>{
        console.log(result);
        this.notes.push(result);
        this.filteredNotes=this.notes;
      });
    });
  }

  statusChanged(ev: MatSelectChange, noteId: number, index: number){
    const value=ev.value;
    this.apiService.updateStatus(value, noteId).subscribe(note=>{
      this.notes[index]=note;
      this.filteredNotes=this.notes;
    })
  }

  delete(id: number){
    if(confirm('Do you want to delete this note?')){
      this.apiService.deleteNote(id).subscribe(res=>{
        // @ts-ignore
        if(res.success){
          this.notes=this.notes.filter((t:any)=>t.id!==id);
          this.filteredNotes=this.notes;
        }
      })
    }
  }
}

import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { CriarMusicaComponent } from 'src/app/modals/criar-musica/criar-musica.component';
import { Musica } from 'src/app/interfaces/musica.model';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {

  @Input()musicas: Musica[];
  dataSource: MatTableDataSource<Musica>;
  selection = new SelectionModel<Musica>(true, []);
  musicasSelecionadas: Musica[];
  
  @Output() musicasSelecionadasEvent = new EventEmitter<Musica[]>();
  
  tabSelecionada = 0;
  textoBotaoRepertorio: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private musicaDialog: MatDialog) { }

  displayedColumns: string[] = ['select', 'nome', 'artista', 'linkOuvir', 'linkCifra', 'quantidadeVezesTocada', 'ultimaVezTocada', 'tags'];

  ngOnInit() {
    if (this.dataSource){
      this.dataSource.data = this.musicas;
    }else{
      this.dataSource = new MatTableDataSource(this.musicas);
    }    

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

   
  }

  openCriarMusicaDialog() {
    console.log("Chamou o open dialog")
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "55%";
    let dialogRef = this.musicaDialog.open(CriarMusicaComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      () => {
        setTimeout(() => {
          this.musicas = JSON.parse(localStorage.getItem("playlist")).musicas;
          this.dataSource.data = this.musicas;
          
        }, 500);         
      }      
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    console.log("selection", this.selection);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Musica): string {   
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  selectMusica($event, row){
    if($event){      
      this.selection.toggle(row);
      console.log(this.selection.selected);
      this.musicasSelecionadas = this.selection.selected;
    } 
    //return null;
  }

  enviarMusicasCriarRepertorio(){
    console.log("chamou enviarMusicasCriarRepertorio");
    this.tabSelecionada = 1;
    this.sendTabSelecionada(this.musicasSelecionadas);
  }

  sendTabSelecionada(musicas) {
    console.log("vai emitir o evento");
    this.musicasSelecionadasEvent.emit(musicas);
  }
}

import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { CriarMusicaComponent } from 'src/app/modals/criar-musica/criar-musica.component';
import { Musica } from 'src/app/interfaces/musica.model';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ExcluirMusicaModalComponent } from 'src/app/modals/excluir-musica-modal/excluir-musica-modal.component';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/interfaces/playlist.model';
import { EditarMusicaModalComponent } from 'src/app/modals/editar-musica-modal/editar-musica-modal.component';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {
  temMusicas = false;
  textoBotaoLista = "Criar Lista";
  @Input() musicas: Musica[];
  // tslint:disable-next-line: variable-name
  _clearSelected: boolean;
  
  dataSource: MatTableDataSource<Musica>;
  selection = new SelectionModel<Musica>(true, []);
  musicasSelecionadas: Musica[];
  
  @Output() musicasSelecionadasEvent = new EventEmitter<Musica[]>();
  
  tabSelecionada = 0;
  textoBotaoRepertorio: string;
  playlist: Playlist;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private modalDialog: MatDialog, private playlistService: PlaylistService) {
    console.log("=========================== musicas.component =================================");
  }

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = 
  ['select', 'nome', 'artista', 'linkOuvir', 'linkCifra', 'quantidadeVezesTocada', 'ultimaVezTocada', 'tags', 'acoes'];

  ngOnInit() {    
      
    if (this.musicas.length > 0){     
      
      this.initPaginator();
      this.temMusicas = true;
      this.playlist = JSON.parse(localStorage.getItem("playlist"));
      
    }    
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  openCriarMusicaDialog() {
    console.log("Chamou o open dialog")
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "55%";
    let criarMusicadialogRef = this.modalDialog.open(CriarMusicaComponent, dialogConfig);

    criarMusicadialogRef.afterClosed().subscribe(
      () => {        
        this.playlist = JSON.parse(localStorage.getItem('playlist'));
        this.musicas = this.playlist.musicas;
       // this.dataSource.data = this.musicas;
        if(this.musicas.length > 0){
          this.temMusicas = true;
          this.initPaginator();
        }
                
      }      
    );
  }

  initPaginator() {
    this.dataSource = new MatTableDataSource(this.musicas);           
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
        this.clearSelection() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  clearSelection(){
    this.selection.clear();
    this.musicasSelecionadas = this.selection.selected;
    //this.musicasSelecionadasEvent.emit(this.musicasSelecionadas);
   
  }

  selectMusica($event, row){
    if($event){      
      this.selection.toggle(row);
      console.log("selected", this.selection.selected);
      this.musicasSelecionadas = this.selection.selected;
      // this.musicasSelecionadasEvent.emit(this.musicasSelecionadas);

      // let ehEdicaoSetlist = localStorage.getItem("editlist");
      // if(ehEdicaoSetlist){
      //   this.textoBotaoLista = "Add à lista em edição";            
      // }
    } 
    //return null;
  }

  enviarMusicasCriarRepertorio(){
    console.log("chamou enviarMusicasCriarRepertorio");
    localStorage.setItem("tab", "1");
    this.musicasSelecionadasEvent.emit(this.musicasSelecionadas);    
  }

  
  editarMusica(musica, indiceMusica){
    console.log("musica para editar: ", musica);
    console.log("indice da musica: ", indiceMusica);
    const editarMusicadialogRef = this.modalDialog.open(EditarMusicaModalComponent, {
      disableClose: true,
      autoFocus: true,
      hasBackdrop: true,
      width: "70%",
      height: "55%",
      data: musica
    });

    editarMusicadialogRef.afterClosed().subscribe(musicaEditada => {
      if (musicaEditada){    
        this.playlistService.editSongFromPlaylist(musicaEditada, JSON.parse(localStorage.getItem('grupo'))).then(res => {            
          console.log("edicao:", res);
          this.musicas[indiceMusica] = musicaEditada;
          this.dataSource.data = this.musicas;   
          this.updateDbPlaylist();
        });       
      }      
    });
  }

  excluirMusica(musica, indiceMusica){
    console.log("musica para exluir: ", musica);
    const dialogRef = this.modalDialog.open(ExcluirMusicaModalComponent, {
      width: '390px',
      data: musica
    });

    dialogRef.afterClosed().subscribe(excluir =>{
      if(excluir){
        this.playlistService.removeSongFromPlaylist(musica, JSON.parse(localStorage.getItem('grupo'))).then(res => {
          
          this.musicas.splice(indiceMusica, 1);
          this.dataSource.data = this.musicas;

          this.updateDbPlaylist();
          
          alert("Musica excluida!");
          console.log("musica excluida", res);
          console.log("nova playlist:", this.playlist);

          if(this.musicas.length == 0){
            this.temMusicas = false;
          }
        }).catch(error => {
          console.log("DEU ERRO!!", error);
        });
      }
      
    });
  }

  updateDbPlaylist(){
    this.playlist.musicas = this.musicas;
    localStorage.setItem('playlist', JSON.stringify(this.playlist));
  }

  @Input()
  set clearSelected(clearSelected) {
    console.log("RECEBEU CLEAR SELECTED", clearSelected);
    this._clearSelected = clearSelected;
    this.clearSelection();
    this.textoBotaoLista = "Criar lista";
    this._clearSelected = false;
  }

  get clearSelected(): boolean { return this._clearSelected; }
}

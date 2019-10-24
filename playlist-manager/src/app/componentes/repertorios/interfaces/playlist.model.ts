import { Musica } from '../../musicas/interfaces/musica.model';

export interface Playlist {    
    idGrupo: string;
    musicas: Musica[];
}

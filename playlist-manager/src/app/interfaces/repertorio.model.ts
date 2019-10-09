import { Musica } from './musica.model';

export interface Repertorio {
    id: string;
    idGrupo: string;
    nomeEvento: string;
    dataEvento: string;
    musicas: Musica[];
}
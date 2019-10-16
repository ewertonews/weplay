import { Usuario } from './usuario.model';

export interface UsuarioGrupo{
    idGrupo: string;
    usuarios: Usuario[];
}

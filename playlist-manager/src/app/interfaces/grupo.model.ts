import { Usuario } from './usuario.model';

export class Grupo {
    id: string;
    emailMembros: string[];
    emailAdmins: string[];
    nome: string;
    criadoEm: string;
    foto: string;
}

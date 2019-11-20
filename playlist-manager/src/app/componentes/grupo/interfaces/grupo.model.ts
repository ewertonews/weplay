import { Usuario } from '../../usuario/interfaces/usuario.model';

export class Grupo {
    id: string;
    emailMembros: string[];
    emailAdmins: string[];
    nome: string;
    criadoEm: string;
    foto: string;
    nomeIgreja: string;
    localIgreja: string;
    demoninação: string;
}

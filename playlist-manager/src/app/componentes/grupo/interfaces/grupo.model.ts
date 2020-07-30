import { Usuario } from '../../usuario/interfaces/usuario.model';
import { AdminModel } from './admin.model';

export class Grupo {
    id: string;
    emailMembros: string[];
    emailAdmins: string[];
    admins: AdminModel[];
    nome: string;
    criadoEm: string;
    foto: string;
    nomeIgreja: string;
    localIgreja: string;
    demoninação: string;
}

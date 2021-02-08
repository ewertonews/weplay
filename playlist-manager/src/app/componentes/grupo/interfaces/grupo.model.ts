import { Usuario } from '../../usuario/interfaces/usuario.model';
import { Admin } from './admin.model';
import { Membro } from './membro.model';

export class Grupo {
    id: string;
    emailMembros: string[];
    emailAdmins: string[];
    admins: Admin[];
    membros: Membro[];
    nome: string;
    criadoEm: string;
    foto: string;
    nomeIgreja: string;
    localIgreja: string;
    demoninação: string;
}

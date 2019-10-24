import { Grupo } from '../componentes/grupo/interfaces/grupo.model';

export const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(find, 'g'), replace);
}

export const getAnoMesCriacaoGrupo = (grupo: Grupo) => {
    let arrayDatas = grupo.criadoEm.split("/");
    let dataCriacao = new Date(arrayDatas[1] + "/" + arrayDatas[0] + "/" + arrayDatas[2]);
    console.log("grupo.CriadoEm", grupo.criadoEm);
    let anomes = dataCriacao.getFullYear().toString() + "_" + dataCriacao.getMonth().toString();
    console.log("ANOMES", anomes);
    return anomes;
}


export const generateId = () => {
    let date = new Date();
    // tslint:disable-next-line:max-line-length
    let id = date.getMilliseconds().toString() + date.getSeconds().toString() + date.getMinutes().toString() + date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString();

    return id;
}


export var replaceAll = function (str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
};
export var getAnoMesCriacaoGrupo = function (grupo) {
    var arrayDatas = grupo.criadoEm.split("/");
    var dataCriacao = new Date(arrayDatas[1] + "/" + arrayDatas[0] + "/" + arrayDatas[2]);
    console.log("grupo.CriadoEm", grupo.criadoEm);
    var anomes = dataCriacao.getFullYear().toString() + "_" + dataCriacao.getMonth().toString();
    console.log("ANOMES", anomes);
    return anomes;
};
export var generateId = function () {
    var date = new Date();
    // tslint:disable-next-line:max-line-length
    var id = date.getMilliseconds().toString() + date.getSeconds().toString() + date.getMinutes().toString() + date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString();
    return id;
};
//# sourceMappingURL=GLOBAL_FUNCTIONS.js.map
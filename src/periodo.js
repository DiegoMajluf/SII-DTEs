"use strict";
var df = require("dateformat");
var Periodo = (function () {
    function Periodo(fechaIni, fechaFin, nombre) {
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        this.nombre = nombre;
    }
    return Periodo;
}());
Periodo.getFecIniPeriodo = function (fec, tipo) {
    var i = new Date(Date.UTC(fec.getUTCFullYear(), fec.getUTCMonth(), fec.getUTCDate()));
    switch (tipo) {
        case TipoPeriodos.diarias:
            return i;
        case TipoPeriodos.semanales:
            i.setUTCDate(i.getUTCDate() - i.getUTCDay() == 0 ? i.getUTCDay() - 1 : 6);
            return i;
        case TipoPeriodos.quincenales:
            if (i.getUTCDate() < 16)
                i.setUTCDate(1);
            else
                i.setUTCDate(16);
            return i;
        case TipoPeriodos.mensuales:
            i.setUTCDate(1);
            return i;
        case TipoPeriodos.bimensuales:
            i.setUTCMonth(-(i.getUTCMonth() + 1) % 2, 1);
            return i;
        case TipoPeriodos.trimestrales:
            i.setUTCMonth(-(i.getUTCMonth() + 1) % 3, 1);
            return i;
        case TipoPeriodos.cuatrimestrales:
            i.setUTCMonth(-(i.getUTCMonth() + 1) % 4, 1);
            return i;
        case TipoPeriodos.semestrales:
            i.setUTCMonth(-(i.getUTCMonth() + 1) % 6, 1);
            return i;
        case TipoPeriodos.anuales:
            i.setUTCMonth(0, 1);
            return i;
    }
};
Periodo.getPeriodos = function (desde, hasta, tipo) {
    var p = [];
    var i = Periodo.getFecIniPeriodo(desde, tipo);
    var next;
    switch (tipo) {
        case TipoPeriodos.diarias:
            for (; i <= hasta; i = next) {
                next = new Date(i.getTime());
                next.setUTCDate(i.getUTCDate() + 1);
                p.push(new Periodo(i, next, df(i, "yyyymmdd", true)));
            }
            break;
        case TipoPeriodos.semanales:
            for (; i <= hasta; i = next) {
                next = new Date(i.getTime());
                next.setUTCDate(i.getUTCDate() + 7);
                p.push(new Periodo(i, next, df(i, "W", true)));
            }
            break;
        case TipoPeriodos.quincenales:
            for (; i <= hasta; i = next) {
                next = new Date(i.getTime());
                if (i.getUTCDate() < 16) {
                    next.setUTCDate(16);
                    p.push(new Periodo(i, next, df(i, "yyyymm", true) + "-1ra"));
                }
                else {
                    next.setUTCMonth(i.getUTCMonth() + 1, 1);
                    p.push(new Periodo(i, next, df(i, "yyyymm", true) + "-2da"));
                }
            }
            break;
        case TipoPeriodos.mensuales:
            for (; i <= hasta; i = next) {
                next = new Date(i.getTime());
                next.setUTCMonth(i.getUTCMonth() + 1, 1);
                p.push(new Periodo(i, next, df(i, "yyyymm", true)));
            }
            break;
        case TipoPeriodos.bimensuales:
            for (; i <= hasta; i = next) {
                next = new Date(i.getTime());
                next.setUTCMonth(i.getUTCMonth() + 2);
                p.push(new Periodo(i, next, df(i, "yyyy", true) + 'bi' + (i.getUTCMonth() + 1) / 2));
            }
            break;
        case TipoPeriodos.trimestrales:
            for (; i <= hasta; i = next) {
                next = new Date(i.getTime());
                next.setUTCMonth(i.getUTCMonth() + 3);
                p.push(new Periodo(i, next, df(i, "yyyy", true) + 'qt' + (i.getUTCMonth() + 1) / 3));
            }
            break;
        case TipoPeriodos.cuatrimestrales:
            for (; i <= hasta; i = next) {
                next = new Date(i.getTime());
                next.setUTCMonth(i.getUTCMonth() + 4);
                p.push(new Periodo(i, next, df(i, "yyyy", true) + 'tr' + (i.getUTCMonth() + 1) / 4));
            }
            break;
        case TipoPeriodos.semestrales:
            for (; i <= hasta; i = next) {
                next = new Date(i.getTime());
                next.setUTCMonth(i.getUTCMonth() + 6);
                p.push(new Periodo(i, next, df(i, "yyyy", true) + '-' + (i.getUTCMonth() + 1) / 6));
            }
            break;
        case TipoPeriodos.anuales:
            for (; i <= hasta; i = next) {
                next = new Date(i.getTime());
                next.setUTCFullYear(i.getUTCFullYear() + 1);
                p.push(new Periodo(i, next, df(i, "yyyy", true)));
            }
            break;
    }
    return p;
};
Periodo.getPeriodo = function (fec, tipo, offset) {
    var p;
    var d = Periodo.getFecIniPeriodo(fec, tipo);
    var Fini = new Date(d.getTime());
    var Ffin = new Date(d.getTime());
    var nombre;
    switch (tipo) {
        case TipoPeriodos.diarias:
            Fini.setUTCDate(d.getUTCDate() + offset);
            Ffin.setUTCDate(d.getUTCDate() + offset + 1);
            nombre = df(Fini, "yyyymmdd", true);
            break;
        case TipoPeriodos.semanales:
            Fini.setUTCDate(d.getUTCDate() + offset * 7);
            Ffin.setUTCDate(d.getUTCDate() + offset * 7 + 1);
            nombre = df(Fini, "W", true);
            break;
        case TipoPeriodos.quincenales:
            var meses = Math.ceil(offset / 2);
            Fini.setUTCMonth(d.getUTCMonth() + meses);
            Ffin = new Date(Fini.getTime());
            if (offset / 2 == Math.ceil(offset / 2)) {
                Ffin.setUTCDate(16);
                nombre = df(Fini, "yyyymm", true) + "-1ra";
            }
            else {
                Ffin.setUTCMonth(Fini.getUTCMonth() + 1, 1);
                nombre = df(Fini, "yyyymm", true) + "-2da";
            }
            break;
        case TipoPeriodos.mensuales:
            Fini.setUTCMonth(d.getUTCMonth() + offset);
            Ffin.setUTCMonth(d.getUTCMonth() + 1, 1);
            nombre = df(Fini, "yyyymm", true);
            break;
        case TipoPeriodos.bimensuales:
            Fini.setUTCMonth(d.getUTCMonth() + 2 * offset);
            Ffin.setUTCMonth(d.getUTCMonth() + 3 * offset, 1);
            nombre = df(Fini, "yyyy", true) + 'bi' + (Ffin.getUTCMonth() + 1) / 2;
            break;
        case TipoPeriodos.trimestrales:
            Fini.setUTCMonth(d.getUTCMonth() + 3 * offset);
            Ffin.setUTCMonth(d.getUTCMonth() + 4 * offset, 1);
            nombre = df(Fini, "yyyy", true) + 'tri' + (Ffin.getUTCMonth() + 1) / 3;
            break;
        case TipoPeriodos.cuatrimestrales:
            Fini.setUTCMonth(d.getUTCMonth() + 4 * offset);
            Ffin.setUTCMonth(d.getUTCMonth() + 5 * offset, 1);
            nombre = df(Fini, "yyyy", true) + 'tri' + (Ffin.getUTCMonth() + 1) / 4;
            break;
        case TipoPeriodos.semestrales:
            Fini.setUTCMonth(d.getUTCMonth() + 6 * offset);
            Ffin.setUTCMonth(d.getUTCMonth() + 7 * offset, 1);
            nombre = df(Fini, "yyyy", true) + '-' + (Ffin.getUTCMonth() + 1) / 6;
            break;
        case TipoPeriodos.anuales:
            Fini.setUTCMonth(d.getUTCFullYear() + offset);
            Ffin.setUTCMonth(d.getUTCFullYear() + offset + 1, 1);
            nombre = df(Fini, "yyyy", true);
            break;
    }
    return new Periodo(Fini, Ffin, nombre);
};
exports.Periodo = Periodo;
var TipoPeriodos;
(function (TipoPeriodos) {
    TipoPeriodos[TipoPeriodos["diarias"] = 0] = "diarias";
    TipoPeriodos[TipoPeriodos["semanales"] = 1] = "semanales";
    TipoPeriodos[TipoPeriodos["quincenales"] = 2] = "quincenales";
    TipoPeriodos[TipoPeriodos["mensuales"] = 3] = "mensuales";
    TipoPeriodos[TipoPeriodos["bimensuales"] = 4] = "bimensuales";
    TipoPeriodos[TipoPeriodos["trimestrales"] = 5] = "trimestrales";
    TipoPeriodos[TipoPeriodos["cuatrimestrales"] = 6] = "cuatrimestrales";
    TipoPeriodos[TipoPeriodos["semestrales"] = 7] = "semestrales";
    TipoPeriodos[TipoPeriodos["anuales"] = 8] = "anuales";
})(TipoPeriodos = exports.TipoPeriodos || (exports.TipoPeriodos = {}));
//# sourceMappingURL=periodo.js.map
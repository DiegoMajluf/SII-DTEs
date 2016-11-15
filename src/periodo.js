"use strict";
var df = require('dateformat');
var Periodo = (function () {
    function Periodo(fechaIni, fechaFin, nombre) {
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        this.nombre = nombre;
    }
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
    return Periodo;
}());
exports.Periodo = Periodo;
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
})(exports.TipoPeriodos || (exports.TipoPeriodos = {}));
var TipoPeriodos = exports.TipoPeriodos;
//# sourceMappingURL=periodo.js.map
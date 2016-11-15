import * as dtes from './dtes'
import { DteService } from './dte-service'
import * as df from 'dateformat'


export class Periodo {

    constructor(public fechaIni: Date, public fechaFin: Date, public nombre: string) { }

    static getFecIniPeriodo = (fec: Date, tipo: TipoPeriodos): Date => {
        let i = new Date(Date.UTC(fec.getUTCFullYear(), fec.getUTCMonth(), fec.getUTCDate()));
        switch (tipo) {
            case TipoPeriodos.diarias:
                return i;

            case TipoPeriodos.semanales:
                i.setUTCDate(i.getUTCDate() - i.getUTCDay() == 0 ? i.getUTCDay() - 1 : 6)
                return i;

            case TipoPeriodos.quincenales:
                if (i.getUTCDate() < 15) i.setUTCDate(1)
                else i.setUTCDate(15)
                return i;

            case TipoPeriodos.mensuales:
                i.setUTCDate(1)
                return i;

            case TipoPeriodos.bimensuales:
                i.setUTCMonth(-(i.getUTCMonth() + 1) % 2, 1)
                return i;

            case TipoPeriodos.trimestrales:
                i.setUTCMonth(-(i.getUTCMonth() + 1) % 3, 1)
                return i;

            case TipoPeriodos.cuatrimestrales:
                i.setUTCMonth(-(i.getUTCMonth() + 1) % 4, 1)
                return i;

            case TipoPeriodos.anuales:
                i.setUTCMonth(0, 1)
                return i;


        }

    }

    static getPeriodos = (desde: Date, hasta: Date, tipo: TipoPeriodos): Periodo[] => {
        let p: Periodo[] = [];
        let i = Periodo.getFecIniPeriodo(desde, tipo)
        let next: Date
        switch (tipo) {
            case TipoPeriodos.diarias:
                for (; i <= hasta; i = next) {
                    next = new Date(i.getTime())
                    next.setUTCDate(i.getUTCDate() + 1)
                    p.push(new Periodo(i, next, df(i, "yyyymmdd", true)));
                }
                break;
            case TipoPeriodos.semanales:
                for (; i <= hasta; i = next) {
                    next = new Date(i.getTime())
                    next.setUTCDate(i.getUTCDate() + 7)
                    p.push(new Periodo(i, next, df(i, "W", true)));
                }
                break;
            case TipoPeriodos.quincenales:
                for (; i <= hasta; i = next) {
                    next = new Date(i.getTime())
                    if (i.getUTCDate() < 15) {
                        next.setUTCDate(15)
                        p.push(new Periodo(i, next, df(i, "yyyymm", true) + "-1ra"));
                    } else {
                        next.setUTCMonth(i.getUTCMonth() + 1, 1)
                        p.push(new Periodo(i, next, df(i, "yyyymm", true) + "-2da"));
                    }
                }
                break;
            case TipoPeriodos.mensuales:
                for (; i <= hasta; i = next) {
                    next = new Date(i.getTime())
                    next.setUTCMonth(i.getUTCMonth() + 1, 1)
                    p.push(new Periodo(i, next, df(i, "yyyymm", true)));
                }
                break;
            case TipoPeriodos.bimensuales:
                for (; i <= hasta; i = next) {
                    next = new Date(i.getTime())
                    next.setUTCMonth(i.getUTCMonth() + 2)
                    p.push(new Periodo(i, next, df(i, "yyyy", true) + 'bi' + (i.getUTCMonth() + 1) / 2));
                }
                break;
            case TipoPeriodos.trimestrales:
                for (; i <= hasta; i = next) {
                    next = new Date(i.getTime())
                    next.setUTCMonth(i.getUTCMonth() + 3)
                    p.push(new Periodo(i, next, df(i, "yyyy", true) + 'qt' + (i.getUTCMonth() + 1) / 3));
                }
                break;
            case TipoPeriodos.cuatrimestrales:
                for (; i <= hasta; i = next) {
                    next = new Date(i.getTime())
                    next.setUTCMonth(i.getUTCMonth() + 4)
                    p.push(new Periodo(i, next, df(i, "yyyy", true) + 'tr' + (i.getUTCMonth() + 1) / 4));
                }
                break;
            case TipoPeriodos.anuales:
                for (; i <= hasta; i = next) {
                    next = new Date(i.getTime())
                    next.setUTCFullYear(i.getUTCFullYear() + 1)
                    p.push(new Periodo(i, next, df(i, "yyyy", true)));
                }
                break;


        }

        return p
    }

}


export enum TipoPeriodos {
    diarias,
    semanales,
    quincenales,
    mensuales,
    bimensuales,
    trimestrales,
    cuatrimestrales,
    semestrales,
    anuales

}



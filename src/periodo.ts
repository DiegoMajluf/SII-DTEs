import * as dtes from './dtes'
import * as DteService from './dte-service'
import * as df from 'dateformat'


export class Periodo {

    constructor(public fechaIni: Date, public fechaFin: Date, public nombre: string) { }

    static getFecIniPeriodo = (fec: Date, tipo: TipoPeriodos): Date => {
        let i = new Date(Date.UTC(fec.getUTCFullYear(), fec.getUTCMonth(), fec.getUTCDate()));
        switch (tipo) {
            case TipoPeriodos.diarias:
                return i;

            case TipoPeriodos.semanales:
                i.setUTCDate(i.getUTCDate() - (i.getUTCDay() == 0 ? 6 : i.getUTCDay() - 1))
                return i;

            case TipoPeriodos.quincenales:
                if (i.getUTCDate() < 16) i.setUTCDate(1)
                else i.setUTCDate(16)
                return i;

            case TipoPeriodos.mensuales:
                i.setUTCDate(1)
                return i;

            case TipoPeriodos.bimensuales:
                i.setUTCMonth(i.getUTCMonth() - i.getUTCMonth() % 2, 1)
                return i;

            case TipoPeriodos.trimestrales:
                i.setUTCMonth(i.getUTCMonth() - i.getUTCMonth() % 3, 1)
                return i;

            case TipoPeriodos.cuatrimestrales:
                i.setUTCMonth(i.getUTCMonth() - i.getUTCMonth() % 4, 1)
                return i;

            case TipoPeriodos.semestrales:
                i.setUTCMonth(i.getUTCMonth() - i.getUTCMonth() % 6, 1)
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
                for (; i <= hasta; i = new Date(next.getTime())) {
                    next = new Date(i.getTime())
                    next.setUTCDate(i.getUTCDate() + 1)
                    p.push(new Periodo(i, next, df(i, "yyyymmdd", true)));
                }
                break;
            case TipoPeriodos.semanales:
                for (; i <= hasta; i = new Date(next.getTime())) {
                    next = new Date(i.getTime())
                    next.setUTCDate(i.getUTCDate() + 7)
                    p.push(new Periodo(i, next, df(i, "W", true)));
                }
                break;
            case TipoPeriodos.quincenales:
                for (; i <= hasta; i = new Date(next.getTime())) {
                    next = new Date(i.getTime())
                    if (i.getUTCDate() < 16) {
                        next.setUTCDate(16)
                        p.push(new Periodo(i, next, df(i, "yyyymm", true) + "-1ra"));
                    } else {
                        next.setUTCMonth(i.getUTCMonth() + 1, 1)
                        p.push(new Periodo(i, next, df(i, "yyyymm", true) + "-2da"));
                    }
                }
                break;
            case TipoPeriodos.mensuales:
                for (; i <= hasta;i = new Date(next.getTime())) {
                    next = new Date(i.getTime())
                    next.setUTCMonth(i.getUTCMonth() + 1, 1)
                    p.push(new Periodo(i, next, df(i, "yyyymm", true)));
                }
                break;
            case TipoPeriodos.bimensuales:
                for (; i <= hasta; i = new Date(next.getTime())) {
                    next = new Date(i.getTime())
                    next.setUTCMonth(i.getUTCMonth() + 2)
                    p.push(new Periodo(i, next, df(i, "yyyy", true) + 'bi' + (i.getUTCMonth() + 1) / 2));
                }
                break;
            case TipoPeriodos.trimestrales:
                for (; i <= hasta; i = new Date(next.getTime())) {
                    next = new Date(i.getTime())
                    next.setUTCMonth(i.getUTCMonth() + 3)
                    p.push(new Periodo(i, next, df(i, "yyyy", true) + 'qt' + (i.getUTCMonth() + 1) / 3));
                }
                break;
            case TipoPeriodos.cuatrimestrales:
                for (; i <= hasta; i = new Date(next.getTime())) {
                    next = new Date(i.getTime())
                    next.setUTCMonth(i.getUTCMonth() + 4)
                    p.push(new Periodo(i, next, df(i, "yyyy", true) + 'tr' + (i.getUTCMonth() + 1) / 4));
                }
                break;

            case TipoPeriodos.semestrales:
                for (; i <= hasta; i = new Date(next.getTime())) {
                    next = new Date(i.getTime())
                    next.setUTCMonth(i.getUTCMonth() + 6)
                    p.push(new Periodo(i, next, df(i, "yyyy", true) + '-' + (i.getUTCMonth() + 1) / 6));
                }
                break;
            case TipoPeriodos.anuales:
                for (; i <= hasta; i = new Date(next.getTime())) {
                    next = new Date(i.getTime())
                    next.setUTCFullYear(i.getUTCFullYear() + 1)
                    p.push(new Periodo(i, next, df(i, "yyyy", true)));
                }
                break;


        }

        return p
    }

    static getPeriodo = (fec: Date, tipo: TipoPeriodos, offset?: number): Periodo => {
        let p: Periodo;
        let d = Periodo.getFecIniPeriodo(fec, tipo)
        let Fini = new Date(d.getTime());
        let Ffin = new Date(d.getTime());
        let nombre: string;

        switch (tipo) {
            case TipoPeriodos.diarias:
                Fini.setUTCDate(d.getUTCDate() + offset)
                Ffin.setUTCDate(d.getUTCDate() + offset + 1)
                nombre = df(Fini, "yyyymmdd", true)
                break;
            case TipoPeriodos.semanales:
                Fini.setUTCDate(d.getUTCDate() + offset * 7)
                Ffin.setUTCDate(d.getUTCDate() + offset * 7 + 7)
                nombre = df(Fini, "W", true)
                break;
            case TipoPeriodos.quincenales:
                let meses = offset == 0 ? 0 : Math.ceil(Math.abs(offset) / 2) * offset / Math.abs(offset)
                Fini.setUTCMonth(d.getUTCMonth() + meses)
                if (meses - offset / 2 !== 0 && offset < 0)
                    if (Fini.getUTCDate() == 1) Fini.setUTCDate(16)
                    else Fini.setUTCMonth(Fini.getUTCMonth() + 1, 1)
                else if (meses - offset / 2 !== 0 && offset > 0)
                    if (Fini.getUTCDate() == 1) Fini.setUTCMonth(Fini.getUTCMonth() - 1, 16)
                    else Fini.setUTCDate(1)
                Ffin = new Date(Fini.getTime())
                if (Fini.getUTCDate() == 1) {
                    Ffin.setUTCDate(16)
                    nombre = df(Fini, "yyyymm", true) + "-1ra";
                } else {
                    Ffin.setUTCMonth(Fini.getUTCMonth() + 1, 1)
                    nombre = df(Fini, "yyyymm", true) + "-2da";
                }
                break;
            case TipoPeriodos.mensuales:
                Fini.setUTCMonth(d.getUTCMonth() + offset)
                Ffin.setUTCMonth(d.getUTCMonth() + offset + 1, 1)
                nombre = df(Fini, "yyyymm", true)
                break;
            case TipoPeriodos.bimensuales:
                Fini.setUTCMonth(d.getUTCMonth() + 2 * offset)
                Ffin.setUTCMonth(d.getUTCMonth() + 2 * offset + 2, 1)
                nombre = df(Fini, "yyyy", true) + 'bi' + (Ffin.getUTCMonth() + 1) / 2
                break;
            case TipoPeriodos.trimestrales:
                Fini.setUTCMonth(d.getUTCMonth() + 3 * offset)
                Ffin.setUTCMonth(d.getUTCMonth() + 3 * offset + 3, 1)
                nombre = df(Fini, "yyyy", true) + 'tri' + (Ffin.getUTCMonth() + 1) / 3
                break;
            case TipoPeriodos.cuatrimestrales:
                Fini.setUTCMonth(d.getUTCMonth() + 4 * offset)
                Ffin.setUTCMonth(d.getUTCMonth() + 4 * offset + 4, 1)
                nombre = df(Fini, "yyyy", true) + 'tri' + (Ffin.getUTCMonth() + 1) / 4
                break;
            case TipoPeriodos.semestrales:
                Fini.setUTCMonth(d.getUTCMonth() + 6 * offset)
                Ffin.setUTCMonth(d.getUTCMonth() + 6 * offset + 6, 1)
                nombre = df(Fini, "yyyy", true) + '-' + (Ffin.getUTCMonth() + 1) / 6
                break;
            case TipoPeriodos.anuales:
                Fini.setUTCFullYear(d.getUTCFullYear() + offset)
                Ffin.setUTCFullYear(d.getUTCFullYear() + offset + 1, 1)
                nombre = df(Fini, "yyyy", true)
                break;

        }

        return new Periodo(Fini, Ffin, nombre)
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



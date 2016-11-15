import * as dte from './dtes'


export class DteService {

    static getNombreDocumento = (tipo: string): string => {

        for (let member in dte.DTEType)
            if (member == tipo) return "Documento";

        for (let member in dte.EXPType)
            if (member == tipo) return "Exportacion";

        for (let member in dte.LIQType)
            if (member == tipo) return "Liquidacion";

    }

    static getSignoDocumento = (dt: dte.DTE): number => {
        let tipo: any = (dt.Documento || dt.Exportaciones || dt.Liquidacion).Encabezado.IdDoc.TipoDTE
        if ([dte.DOCType.FacturaElectronica,
        dte.DOCType.FacturaElectronicadeVentadeBienesyServiciosNoafectosoExentodeIVA,
        dte.DOCType.NotadeDebitoElectronica,
        dte.DOCType.N_110,
        dte.DOCType.N_112
        ].indexOf(tipo) !== -1) return 1;

        if ([dte.DOCType.NotadeCreditoElectronica, dte.DOCType.N_111].indexOf(tipo) !== -1) return -1;

        return 0
    }

    static dateReviver = (key: string, value: any) => {
        if (typeof value === 'string')
            if (/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.test(value))
                return new Date(value);
        return value;
    }
}


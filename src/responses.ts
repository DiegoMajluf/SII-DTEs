import * as dtes from './dtes'
import * as periodo from './periodo'



export class InsertDTEResponse {
    okDTEs: (dtes.DocumentoIdDoc | dtes.LiquidacionIdDoc | dtes.ExportacionesIdDoc)[];
    errDTEs: { IdDoc: (dtes.DocumentoIdDoc | dtes.LiquidacionIdDoc | dtes.ExportacionesIdDoc), err: any }[];

}


export class QueryResponsePoint {
    periodo: periodo.Periodo
    monedas: {
        [moneda: string]: {
            valor: number, numDocs: number,
            etiquetas?: {
                [etiqueta: string]: {
                    valor: number,
                    numDocs: number
                }
            }
        };
    }
    numDocs: number
    grupoEtiquetas?: string
}




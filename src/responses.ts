import * as dtes from './dtes'
import * as periodo from './periodo'



class InsertDTEResponse {
    okDTEs: (dtes.DocumentoIdDoc | dtes.LiquidacionIdDoc | dtes.ExportacionesIdDoc)[];
    errDTEs: { IdDoc: (dtes.DocumentoIdDoc | dtes.LiquidacionIdDoc | dtes.ExportacionesIdDoc), err: any }[];

}


class QueryResponsePoint {
    periodo: periodo.Periodo
    valores: {
        [moneda: string]: {
            valor: number, numDocs: number,
            etiquetas: {
                [etiqueta: string]: {
                    valor: number,
                    numDocs: number
                }
            }
        };
    }
    numDocs: number
    grupoEtiquetas: string
}




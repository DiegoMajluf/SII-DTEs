"use strict";
var dte = require('./dtes');
exports.getNombreDocumento = function (tipo) {
    for (var member in dte.DTEType)
        if (member == tipo)
            return "Documento";
    for (var member in dte.EXPType)
        if (member == tipo)
            return "Exportacion";
    for (var member in dte.LIQType)
        if (member == tipo)
            return "Liquidacion";
};
exports.getSignoDocumento = function (dt) {
    var tipo = (dt.Documento || dt.Exportaciones || dt.Liquidacion).Encabezado.IdDoc.TipoDTE;
    if ([dte.DOCType.FacturaElectronica,
        dte.DOCType.FacturaElectronicadeVentadeBienesyServiciosNoafectosoExentodeIVA,
        dte.DOCType.NotadeDebitoElectronica,
        dte.DOCType.N_110,
        dte.DOCType.N_112
    ].indexOf(tipo) !== -1)
        return 1;
    if ([dte.DOCType.NotadeCreditoElectronica, dte.DOCType.N_111].indexOf(tipo) !== -1)
        return -1;
    return 0;
};
exports.dateReviver = function (key, value) {
    if (typeof value === 'string')
        if (/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.test(value))
            return new Date(value);
    return value;
};
exports.getEncabezado = function (dte) {
    return dte.Documento.Encabezado || dte.Exportaciones.Encabezado || dte.Liquidacion.Encabezado;
};
//# sourceMappingURL=dte-service.js.map
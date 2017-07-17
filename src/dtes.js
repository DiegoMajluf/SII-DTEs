"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firma = require("./firma_electronica");
var EnvioDTE = (function () {
    function EnvioDTE() {
        var _this = this;
        this.version = "1.0";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('version'))
                _this.version = Node.getAttribute('version');
            nd = Node.getElementsByTagName('SetDTE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SetDTE = new SetDTE();
                    _this.SetDTE.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Signature');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Signature = new firma.Signature();
                    _this.Signature.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return EnvioDTE;
}());
exports.EnvioDTE = EnvioDTE;
var SetDTE = (function () {
    function SetDTE() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('ID'))
                _this.ID = Node.getAttribute('ID');
            nd = Node.getElementsByTagName('Caratula');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Caratula = new Caratula();
                    _this.Caratula.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('DTE');
            if (nd.length > 0) {
                _this.DTE = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.DTE.push(new DTE());
                        _this.DTE[i].ParseFromXMLElement(nd[i]);
                    }
            }
        };
    }
    return SetDTE;
}());
exports.SetDTE = SetDTE;
var Caratula = (function () {
    function Caratula() {
        var _this = this;
        this.version = "1.0";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('version'))
                _this.version = Node.getAttribute('version');
            nd = Node.getElementsByTagName('RutEmisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RutEmisor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RutEnvia');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RutEnvia = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RutReceptor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RutReceptor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchResol');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchResol = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('NroResol');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroResol = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TmstFirmaEnv');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TmstFirmaEnv = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotDTE');
            if (nd.length > 0) {
                _this.SubTotDTE = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.SubTotDTE.push(new SubTotDTE());
                        _this.SubTotDTE[i].ParseFromXMLElement(nd[i]);
                    }
            }
        };
    }
    return Caratula;
}());
exports.Caratula = Caratula;
var SubTotDTE = (function () {
    function SubTotDTE() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroDTE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroDTE = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoDTE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoDTE = parseInt(nd[i].textContent);
                    break;
                }
        };
    }
    return SubTotDTE;
}());
exports.SubTotDTE = SubTotDTE;
var DOCType;
(function (DOCType) {
    DOCType[DOCType["FacturaElectronica"] = 33] = "FacturaElectronica";
    DOCType[DOCType["FacturaElectronicadeVentadeBienesyServiciosNoafectosoExentodeIVA"] = 34] = "FacturaElectronicadeVentadeBienesyServiciosNoafectosoExentodeIVA";
    DOCType[DOCType["N_43"] = 43] = "N_43";
    DOCType[DOCType["FacturadeCompraElectronica"] = 46] = "FacturadeCompraElectronica";
    DOCType[DOCType["GuiadeDespachoElectronica"] = 52] = "GuiadeDespachoElectronica";
    DOCType[DOCType["NotadeDebitoElectronica"] = 56] = "NotadeDebitoElectronica";
    DOCType[DOCType["NotadeCreditoElectronica"] = 61] = "NotadeCreditoElectronica";
    DOCType[DOCType["N_110"] = 110] = "N_110";
    DOCType[DOCType["N_111"] = 111] = "N_111";
    DOCType[DOCType["N_112"] = 112] = "N_112";
})(DOCType = exports.DOCType || (exports.DOCType = {}));
var DTE = (function () {
    function DTE() {
        var _this = this;
        this.version = "1.0";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('version'))
                _this.version = Node.getAttribute('version');
            nd = Node.getElementsByTagName('Documento');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Documento = new Documento();
                    _this.Documento.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Liquidacion');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Liquidacion = new Liquidacion();
                    _this.Liquidacion.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Exportaciones');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Exportaciones = new Exportaciones();
                    _this.Exportaciones.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Signature');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Signature = new firma.Signature();
                    _this.Signature.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return DTE;
}());
exports.DTE = DTE;
var Documento = (function () {
    function Documento() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('ID'))
                _this.ID = Node.getAttribute('ID');
            nd = Node.getElementsByTagName('Encabezado');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Encabezado = new DocumentoEncabezado();
                    _this.Encabezado.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Detalle');
            if (nd.length > 0) {
                _this.Detalle = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Detalle.push(new DocumentoDetalle());
                        _this.Detalle[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('SubTotInfo');
            if (nd.length > 0) {
                _this.SubTotInfo = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.SubTotInfo.push(new DocumentoSubTotInfo());
                        _this.SubTotInfo[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('DscRcgGlobal');
            if (nd.length > 0) {
                _this.DscRcgGlobal = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.DscRcgGlobal.push(new DocumentoDscRcgGlobal());
                        _this.DscRcgGlobal[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('Referencia');
            if (nd.length > 0) {
                _this.Referencia = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Referencia.push(new DocumentoReferencia());
                        _this.Referencia[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('Comisiones');
            if (nd.length > 0) {
                _this.Comisiones = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Comisiones.push(new DocumentoComisiones());
                        _this.Comisiones[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('TED');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TED = new DocumentoTED();
                    _this.TED.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('TmstFirma');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TmstFirma = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return Documento;
}());
exports.Documento = Documento;
var DocumentoEncabezado = (function () {
    function DocumentoEncabezado() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('IdDoc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdDoc = new DocumentoIdDoc();
                    _this.IdDoc.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Emisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Emisor = new DocumentoEmisor();
                    _this.Emisor.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('RUTMandante');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTMandante = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Receptor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Receptor = new DocumentoReceptor();
                    _this.Receptor.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('RUTSolicita');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTSolicita = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Transporte');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Transporte = new DocumentoTransporte();
                    _this.Transporte.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Totales');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Totales = new DocumentoTotales();
                    _this.Totales.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('OtraMoneda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.OtraMoneda = new DocumentoOtraMoneda();
                    _this.OtraMoneda.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return DocumentoEncabezado;
}());
exports.DocumentoEncabezado = DocumentoEncabezado;
var DocumentoIdDoc = (function () {
    function DocumentoIdDoc() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('IndNoRebaja');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndNoRebaja = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TipoDespacho');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoDespacho = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IndTraslado');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndTraslado = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoImpresion');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoImpresion = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IndServicio');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndServicio = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntBruto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntBruto = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FmaPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FmaPago = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FmaPagExp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FmaPagExp = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoCtaPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoCtaPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('NumCtaPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NumCtaPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('BcoPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.BcoPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TermPagoCdg');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TermPagoCdg = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TermPagoGlosa');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TermPagoGlosa = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TermPagoDias');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TermPagoDias = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TipoDTE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoDTE = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('Folio');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Folio = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchEmis');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchEmis = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchCancel');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchCancel = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntCancel');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntCancel = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SaldoInsol');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SaldoInsol = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntPagos');
            if (nd.length > 0) {
                _this.MntPagos = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.MntPagos.push(new DocumentoMntPagos());
                        _this.MntPagos[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('PeriodoDesde');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PeriodoDesde = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PeriodoHasta');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PeriodoHasta = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MedioPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MedioPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchVenc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchVenc = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoIdDoc;
}());
exports.DocumentoIdDoc = DocumentoIdDoc;
var DocumentoIndNoRebaja;
(function (DocumentoIndNoRebaja) {
    DocumentoIndNoRebaja[DocumentoIndNoRebaja["NotadeCreditosinDerechoaDescontarDebito"] = 1] = "NotadeCreditosinDerechoaDescontarDebito";
})(DocumentoIndNoRebaja = exports.DocumentoIndNoRebaja || (exports.DocumentoIndNoRebaja = {}));
var DocumentoTipoDespacho;
(function (DocumentoTipoDespacho) {
    DocumentoTipoDespacho[DocumentoTipoDespacho["DespachoporCuentadelComprador"] = 1] = "DespachoporCuentadelComprador";
    DocumentoTipoDespacho[DocumentoTipoDespacho["DespachoporCuentadelEmisoraInstalacionesdelComprador"] = 2] = "DespachoporCuentadelEmisoraInstalacionesdelComprador";
    DocumentoTipoDespacho[DocumentoTipoDespacho["DespachoporCuentadelEmisoraOtrasInstalaciones"] = 3] = "DespachoporCuentadelEmisoraOtrasInstalaciones";
})(DocumentoTipoDespacho = exports.DocumentoTipoDespacho || (exports.DocumentoTipoDespacho = {}));
var DocumentoIndTraslado;
(function (DocumentoIndTraslado) {
    DocumentoIndTraslado[DocumentoIndTraslado["OperacionConstituyeVenta"] = 1] = "OperacionConstituyeVenta";
    DocumentoIndTraslado[DocumentoIndTraslado["VentaporEfectuar"] = 2] = "VentaporEfectuar";
    DocumentoIndTraslado[DocumentoIndTraslado["Consignacion"] = 3] = "Consignacion";
    DocumentoIndTraslado[DocumentoIndTraslado["PromocionoDonacionRUTEmisorRUTReceptor"] = 4] = "PromocionoDonacionRUTEmisorRUTReceptor";
    DocumentoIndTraslado[DocumentoIndTraslado["TrasladoInterno"] = 5] = "TrasladoInterno";
    DocumentoIndTraslado[DocumentoIndTraslado["OtrosTrasladosquenoConstituyenVenta"] = 6] = "OtrosTrasladosquenoConstituyenVenta";
    DocumentoIndTraslado[DocumentoIndTraslado["GuiadeDevolucion"] = 7] = "GuiadeDevolucion";
    DocumentoIndTraslado[DocumentoIndTraslado["N_8"] = 8] = "N_8";
    DocumentoIndTraslado[DocumentoIndTraslado["N_9"] = 9] = "N_9";
})(DocumentoIndTraslado = exports.DocumentoIndTraslado || (exports.DocumentoIndTraslado = {}));
var DocumentoIndServicio;
(function (DocumentoIndServicio) {
    DocumentoIndServicio[DocumentoIndServicio["FacturaciondeServiciosPeriodicosDomiciliarios"] = 1] = "FacturaciondeServiciosPeriodicosDomiciliarios";
    DocumentoIndServicio[DocumentoIndServicio["FacturaciondeOtrosServiciosPeriodicos"] = 2] = "FacturaciondeOtrosServiciosPeriodicos";
    DocumentoIndServicio[DocumentoIndServicio["FacturadeServicio"] = 3] = "FacturadeServicio";
})(DocumentoIndServicio = exports.DocumentoIndServicio || (exports.DocumentoIndServicio = {}));
var DocumentoMntBruto;
(function (DocumentoMntBruto) {
    DocumentoMntBruto[DocumentoMntBruto["MontodeLineasdeDetalleCorrespondeaValoresBrutosIVAImpuestosAdicionales"] = 1] = "MontodeLineasdeDetalleCorrespondeaValoresBrutosIVAImpuestosAdicionales";
})(DocumentoMntBruto = exports.DocumentoMntBruto || (exports.DocumentoMntBruto = {}));
var DocumentoFmaPago;
(function (DocumentoFmaPago) {
    DocumentoFmaPago[DocumentoFmaPago["PagoContado"] = 1] = "PagoContado";
    DocumentoFmaPago[DocumentoFmaPago["PagoCredito"] = 2] = "PagoCredito";
    DocumentoFmaPago[DocumentoFmaPago["SinCosto"] = 3] = "SinCosto";
})(DocumentoFmaPago = exports.DocumentoFmaPago || (exports.DocumentoFmaPago = {}));
var DTEType;
(function (DTEType) {
    DTEType[DTEType["FacturaElectronica"] = 33] = "FacturaElectronica";
    DTEType[DTEType["FacturaElectronicadeVentadeBienesyServiciosNoafectosoExentodeIVA"] = 34] = "FacturaElectronicadeVentadeBienesyServiciosNoafectosoExentodeIVA";
    DTEType[DTEType["FacturadeCompraElectronica"] = 46] = "FacturadeCompraElectronica";
    DTEType[DTEType["GuiadeDespachoElectronica"] = 52] = "GuiadeDespachoElectronica";
    DTEType[DTEType["NotadeDebitoElectronica"] = 56] = "NotadeDebitoElectronica";
    DTEType[DTEType["NotadeCreditoElectronica"] = 61] = "NotadeCreditoElectronica";
})(DTEType = exports.DTEType || (exports.DTEType = {}));
var DocumentoMntPagos = (function () {
    function DocumentoMntPagos() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('GlosaPagos');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GlosaPagos = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchPago = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntPago = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoMntPagos;
}());
exports.DocumentoMntPagos = DocumentoMntPagos;
var DocumentoEmisor = (function () {
    function DocumentoEmisor() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('RznSoc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RznSoc = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('GiroEmis');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GiroEmis = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Telefono');
            if (nd.length > 0) {
                _this.Telefono = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.Telefono.push(nd[i].textContent);
            }
            nd = Node.getElementsByTagName('Acteco');
            if (nd.length > 0) {
                _this.Acteco = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.Acteco.push(parseFloat(nd[i].textContent));
            }
            nd = Node.getElementsByTagName('Sucursal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Sucursal = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CdgSIISucur');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgSIISucur = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('DirOrigen');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirOrigen = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CdgVendedor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgVendedor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicEmisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicEmisor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTEmisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTEmisor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CorreoEmisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CorreoEmisor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('GuiaExport');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GuiaExport = new DocumentoGuiaExport();
                    _this.GuiaExport.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('CmnaOrigen');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaOrigen = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadOrigen');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadOrigen = nd[i].textContent;
                    break;
                }
        };
    }
    return DocumentoEmisor;
}());
exports.DocumentoEmisor = DocumentoEmisor;
var DocumentoGuiaExport = (function () {
    function DocumentoGuiaExport() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('CdgTraslado');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgTraslado = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FolioAut');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FolioAut = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchAut');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchAut = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoGuiaExport;
}());
exports.DocumentoGuiaExport = DocumentoGuiaExport;
var DocumentoCdgTraslado;
(function (DocumentoCdgTraslado) {
    DocumentoCdgTraslado[DocumentoCdgTraslado["N_1"] = 1] = "N_1";
    DocumentoCdgTraslado[DocumentoCdgTraslado["N_2"] = 2] = "N_2";
    DocumentoCdgTraslado[DocumentoCdgTraslado["N_3"] = 3] = "N_3";
    DocumentoCdgTraslado[DocumentoCdgTraslado["N_4"] = 4] = "N_4";
})(DocumentoCdgTraslado = exports.DocumentoCdgTraslado || (exports.DocumentoCdgTraslado = {}));
var DocumentoReceptor = (function () {
    function DocumentoReceptor() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('CdgIntRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgIntRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('GiroRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GiroRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Contacto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Contacto = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DirRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DirPostal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirPostal = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RznSocRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RznSocRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Extranjero');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Extranjero = new DocumentoExtranjero();
                    _this.Extranjero.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('CorreoRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CorreoRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CmnaRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CmnaPostal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaPostal = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadPostal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadPostal = nd[i].textContent;
                    break;
                }
        };
    }
    return DocumentoReceptor;
}());
exports.DocumentoReceptor = DocumentoReceptor;
var DocumentoExtranjero = (function () {
    function DocumentoExtranjero() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NumId');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NumId = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Nacionalidad');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Nacionalidad = nd[i].textContent;
                    break;
                }
        };
    }
    return DocumentoExtranjero;
}());
exports.DocumentoExtranjero = DocumentoExtranjero;
var DocumentoTransporte = (function () {
    function DocumentoTransporte() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('Patente');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Patente = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DirDest');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirDest = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTTrans');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTTrans = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Chofer');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Chofer = new DocumentoChofer();
                    _this.Chofer.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('CmnaDest');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaDest = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadDest');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadDest = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Aduana');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Aduana = new DocumentoAduana();
                    _this.Aduana.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return DocumentoTransporte;
}());
exports.DocumentoTransporte = DocumentoTransporte;
var DocumentoChofer = (function () {
    function DocumentoChofer() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NombreChofer');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NombreChofer = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTChofer');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTChofer = nd[i].textContent;
                    break;
                }
        };
    }
    return DocumentoChofer;
}());
exports.DocumentoChofer = DocumentoChofer;
var DocumentoAduana = (function () {
    function DocumentoAduana() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('CodModVenta');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodModVenta = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodClauVenta');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodClauVenta = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodViaTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodViaTransp = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('NombreTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NombreTransp = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('NomCiaTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NomCiaTransp = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicTransp = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Booking');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Booking = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Operador');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Operador = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CodPtoEmbarque');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodPtoEmbarque = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicPtoEmb');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicPtoEmb = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CodPtoDesemb');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodPtoDesemb = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicPtoDesemb');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicPtoDesemb = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Tara');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Tara = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodUnidMedTara');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodUnidMedTara = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PesoBruto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PesoBruto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodUnidPesoBruto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodUnidPesoBruto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PesoNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PesoNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodUnidPesoNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodUnidPesoNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TotItems');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TotItems = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TotBultos');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TotBultos = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodPaisRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodPaisRecep = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodPaisDestin');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodPaisDestin = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TotClauVenta');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TotClauVenta = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RUTCiaTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTCiaTransp = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TipoBultos');
            if (nd.length > 0) {
                _this.TipoBultos = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.TipoBultos.push(new DocumentoTipoBultos());
                        _this.TipoBultos[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('MntFlete');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntFlete = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntSeguro');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntSeguro = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoAduana;
}());
exports.DocumentoAduana = DocumentoAduana;
var DocumentoTipoBultos = (function () {
    function DocumentoTipoBultos() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('CodTpoBultos');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodTpoBultos = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CantBultos');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CantBultos = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('Marcas');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Marcas = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IdContainer');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdContainer = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Sello');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Sello = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('EmisorSello');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.EmisorSello = nd[i].textContent;
                    break;
                }
        };
    }
    return DocumentoTipoBultos;
}());
exports.DocumentoTipoBultos = DocumentoTipoBultos;
var DocumentoTotales = (function () {
    function DocumentoTotales() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('MntNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntExe = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntBase');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntBase = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntMargenCom');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntMargenCom = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TasaIVA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TasaIVA = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IVA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IVA = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IVAProp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IVAProp = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IVATerc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IVATerc = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ImptoReten');
            if (nd.length > 0) {
                _this.ImptoReten = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.ImptoReten.push(new DocumentoImptoReten());
                        _this.ImptoReten[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('IVANoRet');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IVANoRet = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CredEC');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CredEC = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('GrntDep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GrntDep = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('Comisiones');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Comisiones = new DocumentoComisionesTotales();
                    _this.Comisiones.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('MntTotal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntTotal = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MontoNF');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoNF = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MontoPeriodo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoPeriodo = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SaldoAnterior');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SaldoAnterior = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('VlrPagar');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.VlrPagar = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoTotales;
}());
exports.DocumentoTotales = DocumentoTotales;
var DocumentoImptoReten = (function () {
    function DocumentoImptoReten() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TasaImp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TasaImp = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TipoImp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoImp = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MontoImp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoImp = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoImptoReten;
}());
exports.DocumentoImptoReten = DocumentoImptoReten;
var ImpAdicDTEType;
(function (ImpAdicDTEType) {
    ImpAdicDTEType[ImpAdicDTEType["IVAMargenComercializacionFacturaVentadelContribuyenteF29C039"] = 14] = "IVAMargenComercializacionFacturaVentadelContribuyenteF29C039";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoTotalFacturaCompradelContribuyenteF29C039"] = 15] = "IVARetenidoTotalFacturaCompradelContribuyenteF29C039";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoParcialFacturaCompradelContribuyenteF29"] = 16] = "IVARetenidoParcialFacturaCompradelContribuyenteF29";
    ImpAdicDTEType[ImpAdicDTEType["IVAAnticipadoFaenamientoCarneF29C042"] = 17] = "IVAAnticipadoFaenamientoCarneF29C042";
    ImpAdicDTEType[ImpAdicDTEType["IVAAnticipadoCarneF29C042"] = 18] = "IVAAnticipadoCarneF29C042";
    ImpAdicDTEType[ImpAdicDTEType["IVAAnticipadoHarinaF29C042"] = 19] = "IVAAnticipadoHarinaF29C042";
    ImpAdicDTEType[ImpAdicDTEType["ImpuestoAdicionalProductosArt37abcOroJoyasPielesF29C113"] = 23] = "ImpuestoAdicionalProductosArt37abcOroJoyasPielesF29C113";
    ImpAdicDTEType[ImpAdicDTEType["ImpuestoArt42aLicoresPiscoDestiladosF29C148"] = 24] = "ImpuestoArt42aLicoresPiscoDestiladosF29C148";
    ImpAdicDTEType[ImpAdicDTEType["ImpuestoArt42cVinos"] = 25] = "ImpuestoArt42cVinos";
    ImpAdicDTEType[ImpAdicDTEType["ImpuestoArt42cCervezasyBebidasAlcoholicasF29C150"] = 26] = "ImpuestoArt42cCervezasyBebidasAlcoholicasF29C150";
    ImpAdicDTEType[ImpAdicDTEType["ImpuestoArt42dyeBebidasAnalcoholicasyMineralesF29C146"] = 27] = "ImpuestoArt42dyeBebidasAnalcoholicasyMineralesF29C146";
    ImpAdicDTEType[ImpAdicDTEType["ImpuestoEspecificoDieselF29C127"] = 28] = "ImpuestoEspecificoDieselF29C127";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoLegumbres"] = 30] = "IVARetenidoLegumbres";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoSilvestres"] = 31] = "IVARetenidoSilvestres";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoGanado"] = 32] = "IVARetenidoGanado";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoMadera"] = 33] = "IVARetenidoMadera";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoTrigo"] = 34] = "IVARetenidoTrigo";
    ImpAdicDTEType[ImpAdicDTEType["ImpuestoEspecificoGasolina"] = 35] = "ImpuestoEspecificoGasolina";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoArroz"] = 36] = "IVARetenidoArroz";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoHidrobiologicas"] = 37] = "IVARetenidoHidrobiologicas";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoChatarra"] = 38] = "IVARetenidoChatarra";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoPPA"] = 39] = "IVARetenidoPPA";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoOpcional"] = 40] = "IVARetenidoOpcional";
    ImpAdicDTEType[ImpAdicDTEType["IVARetenidoConstruccion"] = 41] = "IVARetenidoConstruccion";
    ImpAdicDTEType[ImpAdicDTEType["ImpuestoAdicionalProductosArt37ehil1raVentaAlfombrasCRodantesCaviarArmasF29C113"] = 44] = "ImpuestoAdicionalProductosArt37ehil1raVentaAlfombrasCRodantesCaviarArmasF29C113";
    ImpAdicDTEType[ImpAdicDTEType["ImpuestoAdicionalProductosArt37j1raVentaPirotecniaF29C113"] = 45] = "ImpuestoAdicionalProductosArt37j1raVentaPirotecniaF29C113";
    ImpAdicDTEType[ImpAdicDTEType["N_46"] = 46] = "N_46";
    ImpAdicDTEType[ImpAdicDTEType["N_47"] = 47] = "N_47";
    ImpAdicDTEType[ImpAdicDTEType["N_48"] = 48] = "N_48";
    ImpAdicDTEType[ImpAdicDTEType["N_49"] = 49] = "N_49";
    ImpAdicDTEType[ImpAdicDTEType["N_50"] = 50] = "N_50";
    ImpAdicDTEType[ImpAdicDTEType["N_51"] = 51] = "N_51";
    ImpAdicDTEType[ImpAdicDTEType["N_52"] = 52] = "N_52";
    ImpAdicDTEType[ImpAdicDTEType["N_53"] = 53] = "N_53";
    ImpAdicDTEType[ImpAdicDTEType["N_301"] = 301] = "N_301";
    ImpAdicDTEType[ImpAdicDTEType["N_321"] = 321] = "N_321";
    ImpAdicDTEType[ImpAdicDTEType["N_331"] = 331] = "N_331";
    ImpAdicDTEType[ImpAdicDTEType["N_341"] = 341] = "N_341";
    ImpAdicDTEType[ImpAdicDTEType["N_361"] = 361] = "N_361";
    ImpAdicDTEType[ImpAdicDTEType["N_371"] = 371] = "N_371";
    ImpAdicDTEType[ImpAdicDTEType["N_481"] = 481] = "N_481";
})(ImpAdicDTEType = exports.ImpAdicDTEType || (exports.ImpAdicDTEType = {}));
var DocumentoComisionesTotales = (function () {
    function DocumentoComisionesTotales() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('ValComNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComExe = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComIVA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComIVA = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoComisionesTotales;
}());
exports.DocumentoComisionesTotales = DocumentoComisionesTotales;
var DocumentoOtraMoneda = (function () {
    function DocumentoOtraMoneda() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TpoMoneda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoMoneda = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TpoCambio');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoCambio = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntNetoOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntNetoOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntExeOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntExeOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntFaeCarneOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntFaeCarneOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntMargComOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntMargComOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IVAOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IVAOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ImpRetOtrMnda');
            if (nd.length > 0) {
                _this.ImpRetOtrMnda = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.ImpRetOtrMnda.push(new DocumentoImpRetOtrMnda());
                        _this.ImpRetOtrMnda[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('IVANoRetOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IVANoRetOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntTotOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntTotOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoOtraMoneda;
}());
exports.DocumentoOtraMoneda = DocumentoOtraMoneda;
var DocumentoImpRetOtrMnda = (function () {
    function DocumentoImpRetOtrMnda() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TipoImpOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoImpOtrMnda = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TasaImpOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TasaImpOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('VlrImpOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.VlrImpOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoImpRetOtrMnda;
}());
exports.DocumentoImpRetOtrMnda = DocumentoImpRetOtrMnda;
var DocumentoDetalle = (function () {
    function DocumentoDetalle() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinDet');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinDet = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IndExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndExe = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('NmbItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NmbItem = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DscItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DscItem = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('UnmdRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.UnmdRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('UnmdItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.UnmdItem = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RecargoPct');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RecargoPct = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CdgItem');
            if (nd.length > 0) {
                _this.CdgItem = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.CdgItem.push(new DocumentoCdgItem());
                        _this.CdgItem[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('Retenedor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Retenedor = new DocumentoRetenedor();
                    _this.Retenedor.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('QtyRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.QtyRef = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PrcRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PrcRef = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('QtyItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.QtyItem = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('Subcantidad');
            if (nd.length > 0) {
                _this.Subcantidad = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Subcantidad.push(new DocumentoSubcantidad());
                        _this.Subcantidad[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('FchElabor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchElabor = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchVencim');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchVencim = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PrcItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PrcItem = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('OtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.OtrMnda = new DocumentoOtrMnda();
                    _this.OtrMnda.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('DescuentoPct');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DescuentoPct = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('DescuentoMonto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DescuentoMonto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubDscto');
            if (nd.length > 0) {
                _this.SubDscto = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.SubDscto.push(new DocumentoSubDscto());
                        _this.SubDscto[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('RecargoMonto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RecargoMonto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubRecargo');
            if (nd.length > 0) {
                _this.SubRecargo = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.SubRecargo.push(new DocumentoSubRecargo());
                        _this.SubRecargo[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('CodImpAdic');
            if (nd.length > 0) {
                _this.CodImpAdic = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.CodImpAdic.push(parseInt(nd[i].textContent));
            }
            nd = Node.getElementsByTagName('MontoItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoItem = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoDetalle;
}());
exports.DocumentoDetalle = DocumentoDetalle;
var DocumentoIndExe;
(function (DocumentoIndExe) {
    DocumentoIndExe[DocumentoIndExe["ElProductooServicioNOESTAAfectoaIVA"] = 1] = "ElProductooServicioNOESTAAfectoaIVA";
    DocumentoIndExe[DocumentoIndExe["ElProductooServicioNOESFacturable"] = 2] = "ElProductooServicioNOESFacturable";
    DocumentoIndExe[DocumentoIndExe["GarantiaporDepositoEnvase"] = 3] = "GarantiaporDepositoEnvase";
    DocumentoIndExe[DocumentoIndExe["ElproductoNoConstituyeVenta"] = 4] = "ElproductoNoConstituyeVenta";
    DocumentoIndExe[DocumentoIndExe["ItemaRebajar"] = 5] = "ItemaRebajar";
    DocumentoIndExe[DocumentoIndExe["Nofacturablesnegativos"] = 6] = "Nofacturablesnegativos";
})(DocumentoIndExe = exports.DocumentoIndExe || (exports.DocumentoIndExe = {}));
var DocumentoCdgItem = (function () {
    function DocumentoCdgItem() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TpoCodigo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoCodigo = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('VlrCodigo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.VlrCodigo = nd[i].textContent;
                    break;
                }
        };
    }
    return DocumentoCdgItem;
}());
exports.DocumentoCdgItem = DocumentoCdgItem;
var DocumentoRetenedor = (function () {
    function DocumentoRetenedor() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('IndAgente');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndAgente = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('MntBaseFaena');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntBaseFaena = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntMargComer');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntMargComer = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PrcConsFinal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PrcConsFinal = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoRetenedor;
}());
exports.DocumentoRetenedor = DocumentoRetenedor;
var DocumentoSubcantidad = (function () {
    function DocumentoSubcantidad() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('SubCod');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubCod = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('SubQty');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubQty = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoSubcantidad;
}());
exports.DocumentoSubcantidad = DocumentoSubcantidad;
var DocumentoOtrMnda = (function () {
    function DocumentoOtrMnda() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('Moneda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Moneda = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('PrcOtrMon');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PrcOtrMon = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FctConv');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FctConv = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('DctoOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DctoOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RecargoOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RecargoOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MontoItemOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoItemOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoOtrMnda;
}());
exports.DocumentoOtrMnda = DocumentoOtrMnda;
var DocumentoSubDscto = (function () {
    function DocumentoSubDscto() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TipoDscto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoDscto = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('ValorDscto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValorDscto = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoSubDscto;
}());
exports.DocumentoSubDscto = DocumentoSubDscto;
var DocumentoSubRecargo = (function () {
    function DocumentoSubRecargo() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TipoRecargo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoRecargo = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('ValorRecargo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValorRecargo = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoSubRecargo;
}());
exports.DocumentoSubRecargo = DocumentoSubRecargo;
var DocumentoSubTotInfo = (function () {
    function DocumentoSubTotInfo() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('GlosaSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GlosaSTI = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('OrdenSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.OrdenSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('LineasDeta');
            if (nd.length > 0) {
                _this.LineasDeta = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.LineasDeta.push(parseFloat(nd[i].textContent));
            }
            nd = Node.getElementsByTagName('SubTotNetoSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotNetoSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotIVASTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotIVASTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotAdicSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotAdicSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotExeSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotExeSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValSubtotSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValSubtotSTI = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoSubTotInfo;
}());
exports.DocumentoSubTotInfo = DocumentoSubTotInfo;
var DocumentoDscRcgGlobal = (function () {
    function DocumentoDscRcgGlobal() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinDR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinDR = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoMov');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoMov = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('GlosaDR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GlosaDR = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IndExeDR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndExeDR = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoValor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoValor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('ValorDR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValorDR = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValorDROtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValorDROtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoDscRcgGlobal;
}());
exports.DocumentoDscRcgGlobal = DocumentoDscRcgGlobal;
var DocumentoIndExeDR;
(function (DocumentoIndExeDR) {
    DocumentoIndExeDR[DocumentoIndExeDR["DescuentoRecargoGlobalNoAfecto"] = 1] = "DescuentoRecargoGlobalNoAfecto";
    DocumentoIndExeDR[DocumentoIndExeDR["DescuentoRecargoNoFacturable"] = 2] = "DescuentoRecargoNoFacturable";
})(DocumentoIndExeDR = exports.DocumentoIndExeDR || (exports.DocumentoIndExeDR = {}));
var DocumentoReferencia = (function () {
    function DocumentoReferencia() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinRef = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoDocRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoDocRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IndGlobal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndGlobal = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodRef = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RazonRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RazonRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FolioRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FolioRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTOtr');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTOtr = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchRef = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoReferencia;
}());
exports.DocumentoReferencia = DocumentoReferencia;
var DocumentoIndGlobal;
(function (DocumentoIndGlobal) {
    DocumentoIndGlobal[DocumentoIndGlobal["ElDocumentohaceReferenciaaunConjuntodeDocumentosTributariosdelMismoTipo"] = 1] = "ElDocumentohaceReferenciaaunConjuntodeDocumentosTributariosdelMismoTipo";
})(DocumentoIndGlobal = exports.DocumentoIndGlobal || (exports.DocumentoIndGlobal = {}));
var DocumentoCodRef;
(function (DocumentoCodRef) {
    DocumentoCodRef[DocumentoCodRef["AnulaDocumentodeReferencia"] = 1] = "AnulaDocumentodeReferencia";
    DocumentoCodRef[DocumentoCodRef["CorrigeTextodelDocumentodeReferencia"] = 2] = "CorrigeTextodelDocumentodeReferencia";
    DocumentoCodRef[DocumentoCodRef["CorrigeMontos"] = 3] = "CorrigeMontos";
})(DocumentoCodRef = exports.DocumentoCodRef || (exports.DocumentoCodRef = {}));
var DocumentoComisiones = (function () {
    function DocumentoComisiones() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinCom');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinCom = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TipoMovim');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoMovim = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Glosa');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Glosa = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TasaComision');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TasaComision = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComExe = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComIVA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComIVA = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoComisiones;
}());
exports.DocumentoComisiones = DocumentoComisiones;
var DocumentoTED = (function () {
    function DocumentoTED() {
        var _this = this;
        this.version = "1.0";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('version'))
                _this.version = Node.getAttribute('version');
            nd = Node.getElementsByTagName('DD');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DD = new DocumentoDD();
                    _this.DD.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('FRMT');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FRMT = new DocumentoFRMT();
                    _this.FRMT.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return DocumentoTED;
}());
exports.DocumentoTED = DocumentoTED;
var DocumentoDD = (function () {
    function DocumentoDD() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('RSR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RSR = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('MNT');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MNT = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IT1');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IT1 = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RE = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TD');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TD = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('F');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.F = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FE = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RR = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CAF');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CAF = new DocumentoCAF();
                    _this.CAF.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('TSTED');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TSTED = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoDD;
}());
exports.DocumentoDD = DocumentoDD;
var DocumentoCAF = (function () {
    function DocumentoCAF() {
        var _this = this;
        this.version = "1.0";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('version'))
                _this.version = Node.getAttribute('version');
            nd = Node.getElementsByTagName('DA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DA = new DocumentoDA();
                    _this.DA.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('FRMA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FRMA = new DocumentoFRMA();
                    _this.FRMA.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return DocumentoCAF;
}());
exports.DocumentoCAF = DocumentoCAF;
var DocumentoDA = (function () {
    function DocumentoDA() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('RS');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RS = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IDK');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IDK = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RE = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TD');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TD = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RNG');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RNG = new DocumentoRNG();
                    _this.RNG.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('FA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FA = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RSAPK');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RSAPK = new DocumentoRSAPK();
                    _this.RSAPK.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('DSAPK');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DSAPK = new DocumentoDSAPK();
                    _this.DSAPK.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return DocumentoDA;
}());
exports.DocumentoDA = DocumentoDA;
var DocumentoRNG = (function () {
    function DocumentoRNG() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('D');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.D = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('H');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.H = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return DocumentoRNG;
}());
exports.DocumentoRNG = DocumentoRNG;
var DocumentoRSAPK = (function () {
    function DocumentoRSAPK() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('M');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.M = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('E');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.E = nd[i].textContent;
                    break;
                }
        };
    }
    return DocumentoRSAPK;
}());
exports.DocumentoRSAPK = DocumentoRSAPK;
var DocumentoDSAPK = (function () {
    function DocumentoDSAPK() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('P');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.P = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Q');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Q = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('G');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.G = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Y');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Y = nd[i].textContent;
                    break;
                }
        };
    }
    return DocumentoDSAPK;
}());
exports.DocumentoDSAPK = DocumentoDSAPK;
var DocumentoFRMA = (function () {
    function DocumentoFRMA() {
        var _this = this;
        this.algoritmo = "SHA1withRSA";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('algoritmo'))
                _this.algoritmo = Node.getAttribute('algoritmo');
            _this.valor = Node.textContent || '';
        };
    }
    return DocumentoFRMA;
}());
exports.DocumentoFRMA = DocumentoFRMA;
var DocumentoFRMT = (function () {
    function DocumentoFRMT() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('algoritmo'))
                _this.algoritmo = Node.getAttribute('algoritmo');
            _this.valor = Node.textContent || '';
        };
    }
    return DocumentoFRMT;
}());
exports.DocumentoFRMT = DocumentoFRMT;
var Liquidacion = (function () {
    function Liquidacion() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('ID'))
                _this.ID = Node.getAttribute('ID');
            nd = Node.getElementsByTagName('Encabezado');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Encabezado = new LiquidacionEncabezado();
                    _this.Encabezado.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Detalle');
            if (nd.length > 0) {
                _this.Detalle = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Detalle.push(new LiquidacionDetalle());
                        _this.Detalle[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('SubTotInfo');
            if (nd.length > 0) {
                _this.SubTotInfo = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.SubTotInfo.push(new LiquidacionSubTotInfo());
                        _this.SubTotInfo[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('Referencia');
            if (nd.length > 0) {
                _this.Referencia = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Referencia.push(new LiquidacionReferencia());
                        _this.Referencia[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('Comisiones');
            if (nd.length > 0) {
                _this.Comisiones = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Comisiones.push(new LiquidacionComisiones());
                        _this.Comisiones[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('TED');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TED = new LiquidacionTED();
                    _this.TED.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('TmstFirma');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TmstFirma = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return Liquidacion;
}());
exports.Liquidacion = Liquidacion;
var LiquidacionEncabezado = (function () {
    function LiquidacionEncabezado() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('IdDoc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdDoc = new LiquidacionIdDoc();
                    _this.IdDoc.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Emisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Emisor = new LiquidacionEmisor();
                    _this.Emisor.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Receptor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Receptor = new LiquidacionReceptor();
                    _this.Receptor.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Totales');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Totales = new LiquidacionTotales();
                    _this.Totales.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return LiquidacionEncabezado;
}());
exports.LiquidacionEncabezado = LiquidacionEncabezado;
var LiquidacionIdDoc = (function () {
    function LiquidacionIdDoc() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('IndServicio');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndServicio = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntBruto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntBruto = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FmaPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FmaPago = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoCtaPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoCtaPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('NumCtaPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NumCtaPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('BcoPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.BcoPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TermPagoCdg');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TermPagoCdg = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TermPagoGlosa');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TermPagoGlosa = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TermPagoDias');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TermPagoDias = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TipoDTE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoDTE = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('Folio');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Folio = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchEmis');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchEmis = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchCancel');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchCancel = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntCancel');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntCancel = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SaldoInsol');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SaldoInsol = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntPagos');
            if (nd.length > 0) {
                _this.MntPagos = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.MntPagos.push(new LiquidacionMntPagos());
                        _this.MntPagos[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('PeriodoDesde');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PeriodoDesde = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PeriodoHasta');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PeriodoHasta = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MedioPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MedioPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchVenc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchVenc = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionIdDoc;
}());
exports.LiquidacionIdDoc = LiquidacionIdDoc;
var LiquidacionIndServicio;
(function (LiquidacionIndServicio) {
    LiquidacionIndServicio[LiquidacionIndServicio["FacturaciondeServiciosPeriodicosDomiciliarios"] = 1] = "FacturaciondeServiciosPeriodicosDomiciliarios";
    LiquidacionIndServicio[LiquidacionIndServicio["FacturaciondeOtrosServiciosPeriodicos"] = 2] = "FacturaciondeOtrosServiciosPeriodicos";
    LiquidacionIndServicio[LiquidacionIndServicio["FacturadeServicio"] = 3] = "FacturadeServicio";
})(LiquidacionIndServicio = exports.LiquidacionIndServicio || (exports.LiquidacionIndServicio = {}));
var LiquidacionMntBruto;
(function (LiquidacionMntBruto) {
    LiquidacionMntBruto[LiquidacionMntBruto["MontodeLineasdeDetalleCorrespondeaValoresBrutosIVAImpuestosAdicionales"] = 1] = "MontodeLineasdeDetalleCorrespondeaValoresBrutosIVAImpuestosAdicionales";
})(LiquidacionMntBruto = exports.LiquidacionMntBruto || (exports.LiquidacionMntBruto = {}));
var LiquidacionFmaPago;
(function (LiquidacionFmaPago) {
    LiquidacionFmaPago[LiquidacionFmaPago["PagoContado"] = 1] = "PagoContado";
    LiquidacionFmaPago[LiquidacionFmaPago["PagoCredito"] = 2] = "PagoCredito";
    LiquidacionFmaPago[LiquidacionFmaPago["SinCosto"] = 3] = "SinCosto";
})(LiquidacionFmaPago = exports.LiquidacionFmaPago || (exports.LiquidacionFmaPago = {}));
var LIQType;
(function (LIQType) {
    LIQType[LIQType["N_43"] = 43] = "N_43";
})(LIQType = exports.LIQType || (exports.LIQType = {}));
var LiquidacionMntPagos = (function () {
    function LiquidacionMntPagos() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('GlosaPagos');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GlosaPagos = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchPago = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntPago = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionMntPagos;
}());
exports.LiquidacionMntPagos = LiquidacionMntPagos;
var LiquidacionEmisor = (function () {
    function LiquidacionEmisor() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('RznSoc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RznSoc = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('GiroEmis');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GiroEmis = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Telefono');
            if (nd.length > 0) {
                _this.Telefono = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.Telefono.push(nd[i].textContent);
            }
            nd = Node.getElementsByTagName('Acteco');
            if (nd.length > 0) {
                _this.Acteco = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.Acteco.push(parseFloat(nd[i].textContent));
            }
            nd = Node.getElementsByTagName('Sucursal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Sucursal = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CdgSIISucur');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgSIISucur = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('DirOrigen');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirOrigen = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CdgVendedor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgVendedor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTEmisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTEmisor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CorreoEmisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CorreoEmisor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CmnaOrigen');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaOrigen = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadOrigen');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadOrigen = nd[i].textContent;
                    break;
                }
        };
    }
    return LiquidacionEmisor;
}());
exports.LiquidacionEmisor = LiquidacionEmisor;
var LiquidacionReceptor = (function () {
    function LiquidacionReceptor() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('CdgIntRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgIntRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('GiroRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GiroRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Contacto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Contacto = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DirRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DirPostal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirPostal = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RznSocRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RznSocRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CorreoRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CorreoRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CmnaRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CmnaPostal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaPostal = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadPostal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadPostal = nd[i].textContent;
                    break;
                }
        };
    }
    return LiquidacionReceptor;
}());
exports.LiquidacionReceptor = LiquidacionReceptor;
var LiquidacionTotales = (function () {
    function LiquidacionTotales() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('MntNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntExe = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TasaIVA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TasaIVA = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IVA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IVA = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IVAProp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IVAProp = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IVATerc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IVATerc = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ImptoReten');
            if (nd.length > 0) {
                _this.ImptoReten = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.ImptoReten.push(new LiquidacionImptoReten());
                        _this.ImptoReten[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('Comisiones');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Comisiones = new LiquidacionComisionesTotales();
                    _this.Comisiones.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('MntTotal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntTotal = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MontoPeriodo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoPeriodo = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SaldoAnterior');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SaldoAnterior = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('VlrPagar');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.VlrPagar = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionTotales;
}());
exports.LiquidacionTotales = LiquidacionTotales;
var LiquidacionImptoReten = (function () {
    function LiquidacionImptoReten() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TipoImp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoImp = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TasaImp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TasaImp = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MontoImp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoImp = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionImptoReten;
}());
exports.LiquidacionImptoReten = LiquidacionImptoReten;
var LiquidacionComisionesTotales = (function () {
    function LiquidacionComisionesTotales() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('ValComNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComExe = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComIVA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComIVA = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionComisionesTotales;
}());
exports.LiquidacionComisionesTotales = LiquidacionComisionesTotales;
var LiquidacionDetalle = (function () {
    function LiquidacionDetalle() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinDet');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinDet = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoDocLiq');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoDocLiq = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IndExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndExe = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('NmbItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NmbItem = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DscItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DscItem = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('UnmdRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.UnmdRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('UnmdItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.UnmdItem = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CdgItem');
            if (nd.length > 0) {
                _this.CdgItem = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.CdgItem.push(new LiquidacionCdgItem());
                        _this.CdgItem[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('QtyRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.QtyRef = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PrcRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PrcRef = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('QtyItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.QtyItem = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('Subcantidad');
            if (nd.length > 0) {
                _this.Subcantidad = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Subcantidad.push(new LiquidacionSubcantidad());
                        _this.Subcantidad[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('FchElabor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchElabor = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchVencim');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchVencim = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PrcItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PrcItem = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodImpAdic');
            if (nd.length > 0) {
                _this.CodImpAdic = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.CodImpAdic.push(parseInt(nd[i].textContent));
            }
            nd = Node.getElementsByTagName('MontoItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoItem = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionDetalle;
}());
exports.LiquidacionDetalle = LiquidacionDetalle;
var LiquidacionIndExe;
(function (LiquidacionIndExe) {
    LiquidacionIndExe[LiquidacionIndExe["ElProductooServicioNOESTAAfectoaIVA"] = 1] = "ElProductooServicioNOESTAAfectoaIVA";
    LiquidacionIndExe[LiquidacionIndExe["ElProductooServicioNOESFacturable"] = 2] = "ElProductooServicioNOESFacturable";
    LiquidacionIndExe[LiquidacionIndExe["GarantiaporDepositoEnvase"] = 3] = "GarantiaporDepositoEnvase";
    LiquidacionIndExe[LiquidacionIndExe["ElproductoNoConstituyeVenta"] = 4] = "ElproductoNoConstituyeVenta";
    LiquidacionIndExe[LiquidacionIndExe["ItemaRebajar"] = 5] = "ItemaRebajar";
    LiquidacionIndExe[LiquidacionIndExe["Nofacturablesnegativos"] = 6] = "Nofacturablesnegativos";
})(LiquidacionIndExe = exports.LiquidacionIndExe || (exports.LiquidacionIndExe = {}));
var LiquidacionCdgItem = (function () {
    function LiquidacionCdgItem() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TpoCodigo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoCodigo = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('VlrCodigo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.VlrCodigo = nd[i].textContent;
                    break;
                }
        };
    }
    return LiquidacionCdgItem;
}());
exports.LiquidacionCdgItem = LiquidacionCdgItem;
var LiquidacionSubcantidad = (function () {
    function LiquidacionSubcantidad() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('SubCod');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubCod = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('SubQty');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubQty = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionSubcantidad;
}());
exports.LiquidacionSubcantidad = LiquidacionSubcantidad;
var LiquidacionSubTotInfo = (function () {
    function LiquidacionSubTotInfo() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('GlosaSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GlosaSTI = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('OrdenSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.OrdenSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('LineasDeta');
            if (nd.length > 0) {
                _this.LineasDeta = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.LineasDeta.push(parseFloat(nd[i].textContent));
            }
            nd = Node.getElementsByTagName('SubTotNetoSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotNetoSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotIVASTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotIVASTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotAdicSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotAdicSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotExeSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotExeSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValSubtotSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValSubtotSTI = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionSubTotInfo;
}());
exports.LiquidacionSubTotInfo = LiquidacionSubTotInfo;
var LiquidacionReferencia = (function () {
    function LiquidacionReferencia() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinRef = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoDocRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoDocRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IndGlobal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndGlobal = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodRef = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RazonRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RazonRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FolioRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FolioRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchRef = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionReferencia;
}());
exports.LiquidacionReferencia = LiquidacionReferencia;
var LiquidacionIndGlobal;
(function (LiquidacionIndGlobal) {
    LiquidacionIndGlobal[LiquidacionIndGlobal["ElDocumentohaceReferenciaaunConjuntodeDocumentosTributariosdelMismoTipo"] = 1] = "ElDocumentohaceReferenciaaunConjuntodeDocumentosTributariosdelMismoTipo";
})(LiquidacionIndGlobal = exports.LiquidacionIndGlobal || (exports.LiquidacionIndGlobal = {}));
var LiquidacionCodRef;
(function (LiquidacionCodRef) {
    LiquidacionCodRef[LiquidacionCodRef["AnulaDocumentodeReferencia"] = 1] = "AnulaDocumentodeReferencia";
    LiquidacionCodRef[LiquidacionCodRef["CorrigeTextodelDocumentodeReferencia"] = 2] = "CorrigeTextodelDocumentodeReferencia";
    LiquidacionCodRef[LiquidacionCodRef["CorrigeMontos"] = 3] = "CorrigeMontos";
})(LiquidacionCodRef = exports.LiquidacionCodRef || (exports.LiquidacionCodRef = {}));
var LiquidacionComisiones = (function () {
    function LiquidacionComisiones() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinCom');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinCom = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TipoMovim');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoMovim = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Glosa');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Glosa = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TasaComision');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TasaComision = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComExe = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValComIVA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValComIVA = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionComisiones;
}());
exports.LiquidacionComisiones = LiquidacionComisiones;
var LiquidacionTED = (function () {
    function LiquidacionTED() {
        var _this = this;
        this.version = "1.0";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('version'))
                _this.version = Node.getAttribute('version');
            nd = Node.getElementsByTagName('DD');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DD = new LiquidacionDD();
                    _this.DD.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('FRMT');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FRMT = new LiquidacionFRMT();
                    _this.FRMT.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return LiquidacionTED;
}());
exports.LiquidacionTED = LiquidacionTED;
var LiquidacionDD = (function () {
    function LiquidacionDD() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('RSR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RSR = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('MNT');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MNT = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IT1');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IT1 = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RE = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TD');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TD = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('F');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.F = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FE = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RR = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CAF');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CAF = new LiquidacionCAF();
                    _this.CAF.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('TSTED');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TSTED = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionDD;
}());
exports.LiquidacionDD = LiquidacionDD;
var LiquidacionCAF = (function () {
    function LiquidacionCAF() {
        var _this = this;
        this.version = "1.0";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('version'))
                _this.version = Node.getAttribute('version');
            nd = Node.getElementsByTagName('DA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DA = new LiquidacionDA();
                    _this.DA.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('FRMA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FRMA = new LiquidacionFRMA();
                    _this.FRMA.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return LiquidacionCAF;
}());
exports.LiquidacionCAF = LiquidacionCAF;
var LiquidacionDA = (function () {
    function LiquidacionDA() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('IDK');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IDK = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RE = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RS');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RS = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TD');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TD = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RNG');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RNG = new LiquidacionRNG();
                    _this.RNG.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('FA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FA = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RSAPK');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RSAPK = new LiquidacionRSAPK();
                    _this.RSAPK.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('DSAPK');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DSAPK = new LiquidacionDSAPK();
                    _this.DSAPK.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return LiquidacionDA;
}());
exports.LiquidacionDA = LiquidacionDA;
var LiquidacionRNG = (function () {
    function LiquidacionRNG() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('D');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.D = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('H');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.H = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return LiquidacionRNG;
}());
exports.LiquidacionRNG = LiquidacionRNG;
var LiquidacionRSAPK = (function () {
    function LiquidacionRSAPK() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('M');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.M = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('E');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.E = nd[i].textContent;
                    break;
                }
        };
    }
    return LiquidacionRSAPK;
}());
exports.LiquidacionRSAPK = LiquidacionRSAPK;
var LiquidacionDSAPK = (function () {
    function LiquidacionDSAPK() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('P');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.P = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Q');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Q = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('G');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.G = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Y');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Y = nd[i].textContent;
                    break;
                }
        };
    }
    return LiquidacionDSAPK;
}());
exports.LiquidacionDSAPK = LiquidacionDSAPK;
var LiquidacionFRMA = (function () {
    function LiquidacionFRMA() {
        var _this = this;
        this.algoritmo = "SHA1withRSA";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('algoritmo'))
                _this.algoritmo = Node.getAttribute('algoritmo');
            _this.valor = Node.textContent || '';
        };
    }
    return LiquidacionFRMA;
}());
exports.LiquidacionFRMA = LiquidacionFRMA;
var LiquidacionFRMT = (function () {
    function LiquidacionFRMT() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('algoritmo'))
                _this.algoritmo = Node.getAttribute('algoritmo');
            _this.valor = Node.textContent || '';
        };
    }
    return LiquidacionFRMT;
}());
exports.LiquidacionFRMT = LiquidacionFRMT;
var Exportaciones = (function () {
    function Exportaciones() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('ID'))
                _this.ID = Node.getAttribute('ID');
            nd = Node.getElementsByTagName('Encabezado');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Encabezado = new ExportacionesEncabezado();
                    _this.Encabezado.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Detalle');
            if (nd.length > 0) {
                _this.Detalle = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Detalle.push(new ExportacionesDetalle());
                        _this.Detalle[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('SubTotInfo');
            if (nd.length > 0) {
                _this.SubTotInfo = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.SubTotInfo.push(new ExportacionesSubTotInfo());
                        _this.SubTotInfo[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('DscRcgGlobal');
            if (nd.length > 0) {
                _this.DscRcgGlobal = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.DscRcgGlobal.push(new ExportacionesDscRcgGlobal());
                        _this.DscRcgGlobal[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('Referencia');
            if (nd.length > 0) {
                _this.Referencia = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Referencia.push(new ExportacionesReferencia());
                        _this.Referencia[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('TED');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TED = new ExportacionesTED();
                    _this.TED.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('TmstFirma');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TmstFirma = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return Exportaciones;
}());
exports.Exportaciones = Exportaciones;
var ExportacionesEncabezado = (function () {
    function ExportacionesEncabezado() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('IdDoc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdDoc = new ExportacionesIdDoc();
                    _this.IdDoc.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Emisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Emisor = new ExportacionesEmisor();
                    _this.Emisor.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Receptor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Receptor = new ExportacionesReceptor();
                    _this.Receptor.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Transporte');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Transporte = new ExportacionesTransporte();
                    _this.Transporte.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Totales');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Totales = new ExportacionesTotales();
                    _this.Totales.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('OtraMoneda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.OtraMoneda = new ExportacionesOtraMoneda();
                    _this.OtraMoneda.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return ExportacionesEncabezado;
}());
exports.ExportacionesEncabezado = ExportacionesEncabezado;
var ExportacionesIdDoc = (function () {
    function ExportacionesIdDoc() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TipoDespacho');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoDespacho = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IndServicio');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndServicio = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FmaPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FmaPago = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FmaPagExp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FmaPagExp = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoCtaPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoCtaPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('NumCtaPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NumCtaPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('BcoPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.BcoPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TermPagoCdg');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TermPagoCdg = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TermPagoGlosa');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TermPagoGlosa = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TermPagoDias');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TermPagoDias = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TipoDTE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoDTE = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('Folio');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Folio = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchEmis');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchEmis = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchCancel');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchCancel = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntCancel');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntCancel = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SaldoInsol');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SaldoInsol = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntPagos');
            if (nd.length > 0) {
                _this.MntPagos = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.MntPagos.push(new ExportacionesMntPagos());
                        _this.MntPagos[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('PeriodoDesde');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PeriodoDesde = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PeriodoHasta');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PeriodoHasta = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MedioPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MedioPago = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchVenc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchVenc = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesIdDoc;
}());
exports.ExportacionesIdDoc = ExportacionesIdDoc;
var ExportacionesTipoDespacho;
(function (ExportacionesTipoDespacho) {
    ExportacionesTipoDespacho[ExportacionesTipoDespacho["DespachoporCuentadelComprador"] = 1] = "DespachoporCuentadelComprador";
    ExportacionesTipoDespacho[ExportacionesTipoDespacho["DespachoporCuentadelEmisoraInstalacionesdelComprador"] = 2] = "DespachoporCuentadelEmisoraInstalacionesdelComprador";
    ExportacionesTipoDespacho[ExportacionesTipoDespacho["DespachoporCuentadelEmisoraOtrasInstalaciones"] = 3] = "DespachoporCuentadelEmisoraOtrasInstalaciones";
})(ExportacionesTipoDespacho = exports.ExportacionesTipoDespacho || (exports.ExportacionesTipoDespacho = {}));
var ExportacionesIndServicio;
(function (ExportacionesIndServicio) {
    ExportacionesIndServicio[ExportacionesIndServicio["FacturadeServicio"] = 3] = "FacturadeServicio";
    ExportacionesIndServicio[ExportacionesIndServicio["N_4"] = 4] = "N_4";
    ExportacionesIndServicio[ExportacionesIndServicio["N_5"] = 5] = "N_5";
})(ExportacionesIndServicio = exports.ExportacionesIndServicio || (exports.ExportacionesIndServicio = {}));
var ExportacionesFmaPago;
(function (ExportacionesFmaPago) {
    ExportacionesFmaPago[ExportacionesFmaPago["PagoContado"] = 1] = "PagoContado";
    ExportacionesFmaPago[ExportacionesFmaPago["PagoCredito"] = 2] = "PagoCredito";
    ExportacionesFmaPago[ExportacionesFmaPago["SinCosto"] = 3] = "SinCosto";
})(ExportacionesFmaPago = exports.ExportacionesFmaPago || (exports.ExportacionesFmaPago = {}));
var EXPType;
(function (EXPType) {
    EXPType[EXPType["N_110"] = 110] = "N_110";
    EXPType[EXPType["N_111"] = 111] = "N_111";
    EXPType[EXPType["N_112"] = 112] = "N_112";
})(EXPType = exports.EXPType || (exports.EXPType = {}));
var ExportacionesMntPagos = (function () {
    function ExportacionesMntPagos() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('GlosaPagos');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GlosaPagos = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchPago = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntPago');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntPago = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesMntPagos;
}());
exports.ExportacionesMntPagos = ExportacionesMntPagos;
var ExportacionesEmisor = (function () {
    function ExportacionesEmisor() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('RznSoc');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RznSoc = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('GiroEmis');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GiroEmis = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Telefono');
            if (nd.length > 0) {
                _this.Telefono = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.Telefono.push(nd[i].textContent);
            }
            nd = Node.getElementsByTagName('Acteco');
            if (nd.length > 0) {
                _this.Acteco = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.Acteco.push(parseFloat(nd[i].textContent));
            }
            nd = Node.getElementsByTagName('Sucursal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Sucursal = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CdgSIISucur');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgSIISucur = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodAdicSucur');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodAdicSucur = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DirOrigen');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirOrigen = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CdgVendedor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgVendedor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicEmisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicEmisor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTEmisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTEmisor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CorreoEmisor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CorreoEmisor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CmnaOrigen');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaOrigen = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadOrigen');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadOrigen = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesEmisor;
}());
exports.ExportacionesEmisor = ExportacionesEmisor;
var ExportacionesReceptor = (function () {
    function ExportacionesReceptor() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('CdgIntRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CdgIntRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('GiroRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GiroRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Contacto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Contacto = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DirRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DirPostal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirPostal = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RznSocRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RznSocRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Extranjero');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Extranjero = new ExportacionesExtranjero();
                    _this.Extranjero.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('CorreoRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CorreoRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CmnaRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadRecep = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CmnaPostal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaPostal = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadPostal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadPostal = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesReceptor;
}());
exports.ExportacionesReceptor = ExportacionesReceptor;
var ExportacionesExtranjero = (function () {
    function ExportacionesExtranjero() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NumId');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NumId = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Nacionalidad');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Nacionalidad = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicRecep = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesExtranjero;
}());
exports.ExportacionesExtranjero = ExportacionesExtranjero;
var ExportacionesTransporte = (function () {
    function ExportacionesTransporte() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('Patente');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Patente = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DirDest');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DirDest = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTTrans');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTTrans = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Chofer');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Chofer = new ExportacionesChofer();
                    _this.Chofer.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('CmnaDest');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CmnaDest = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CiudadDest');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CiudadDest = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Aduana');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Aduana = new ExportacionesAduana();
                    _this.Aduana.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return ExportacionesTransporte;
}());
exports.ExportacionesTransporte = ExportacionesTransporte;
var ExportacionesChofer = (function () {
    function ExportacionesChofer() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NombreChofer');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NombreChofer = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTChofer');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTChofer = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesChofer;
}());
exports.ExportacionesChofer = ExportacionesChofer;
var ExportacionesAduana = (function () {
    function ExportacionesAduana() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('CodModVenta');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodModVenta = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodClauVenta');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodClauVenta = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodViaTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodViaTransp = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('NombreTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NombreTransp = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('NomCiaTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NomCiaTransp = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicTransp = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Booking');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Booking = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Operador');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Operador = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CodPtoEmbarque');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodPtoEmbarque = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicPtoEmb');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicPtoEmb = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CodPtoDesemb');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodPtoDesemb = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicPtoDesemb');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicPtoDesemb = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Tara');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Tara = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodUnidMedTara');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodUnidMedTara = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PesoBruto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PesoBruto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodUnidPesoBruto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodUnidPesoBruto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PesoNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PesoNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodUnidPesoNeto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodUnidPesoNeto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TotItems');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TotItems = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TotBultos');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TotBultos = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodPaisRecep');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodPaisRecep = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodPaisDestin');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodPaisDestin = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TotClauVenta');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TotClauVenta = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RUTCiaTransp');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTCiaTransp = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TipoBultos');
            if (nd.length > 0) {
                _this.TipoBultos = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.TipoBultos.push(new ExportacionesTipoBultos());
                        _this.TipoBultos[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('MntFlete');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntFlete = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntSeguro');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntSeguro = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesAduana;
}());
exports.ExportacionesAduana = ExportacionesAduana;
var ExportacionesTipoBultos = (function () {
    function ExportacionesTipoBultos() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('CodTpoBultos');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodTpoBultos = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CantBultos');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CantBultos = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('Marcas');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Marcas = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IdContainer');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdContainer = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Sello');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Sello = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('EmisorSello');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.EmisorSello = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesTipoBultos;
}());
exports.ExportacionesTipoBultos = ExportacionesTipoBultos;
var ExportacionesTotales = (function () {
    function ExportacionesTotales() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('MntExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntExe = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntTotal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntTotal = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoMoneda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoMoneda = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesTotales;
}());
exports.ExportacionesTotales = ExportacionesTotales;
var ExportacionesOtraMoneda = (function () {
    function ExportacionesOtraMoneda() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TpoMoneda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoMoneda = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TpoCambio');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoCambio = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntExeOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntExeOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MntTotOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MntTotOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesOtraMoneda;
}());
exports.ExportacionesOtraMoneda = ExportacionesOtraMoneda;
var ExportacionesDetalle = (function () {
    function ExportacionesDetalle() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinDet');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinDet = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IndExe');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndExe = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('NmbItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NmbItem = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('DscItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DscItem = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('UnmdRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.UnmdRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('UnmdItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.UnmdItem = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('MontoItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoItem = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CdgItem');
            if (nd.length > 0) {
                _this.CdgItem = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.CdgItem.push(new ExportacionesCdgItem());
                        _this.CdgItem[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('QtyRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.QtyRef = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PrcRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PrcRef = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('QtyItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.QtyItem = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('Subcantidad');
            if (nd.length > 0) {
                _this.Subcantidad = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.Subcantidad.push(new ExportacionesSubcantidad());
                        _this.Subcantidad[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('FchElabor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchElabor = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FchVencim');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchVencim = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PrcItem');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PrcItem = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('OtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.OtrMnda = new ExportacionesOtrMnda();
                    _this.OtrMnda.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('DescuentoPct');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DescuentoPct = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('DescuentoMonto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DescuentoMonto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubDscto');
            if (nd.length > 0) {
                _this.SubDscto = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.SubDscto.push(new ExportacionesSubDscto());
                        _this.SubDscto[i].ParseFromXMLElement(nd[i]);
                    }
            }
            nd = Node.getElementsByTagName('RecargoPct');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RecargoPct = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RecargoMonto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RecargoMonto = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubRecargo');
            if (nd.length > 0) {
                _this.SubRecargo = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node) {
                        _this.SubRecargo.push(new ExportacionesSubRecargo());
                        _this.SubRecargo[i].ParseFromXMLElement(nd[i]);
                    }
            }
        };
    }
    return ExportacionesDetalle;
}());
exports.ExportacionesDetalle = ExportacionesDetalle;
var ExportacionesIndExe;
(function (ExportacionesIndExe) {
    ExportacionesIndExe[ExportacionesIndExe["ElProductooServicioNOESTAAfectoaIVA"] = 1] = "ElProductooServicioNOESTAAfectoaIVA";
    ExportacionesIndExe[ExportacionesIndExe["ElProductooServicioNOESFacturable"] = 2] = "ElProductooServicioNOESFacturable";
    ExportacionesIndExe[ExportacionesIndExe["GarantiaporDepositoEnvase"] = 3] = "GarantiaporDepositoEnvase";
    ExportacionesIndExe[ExportacionesIndExe["ElproductoNoConstituyeVenta"] = 4] = "ElproductoNoConstituyeVenta";
    ExportacionesIndExe[ExportacionesIndExe["ItemaRebajar"] = 5] = "ItemaRebajar";
    ExportacionesIndExe[ExportacionesIndExe["Nofacturablesnegativos"] = 6] = "Nofacturablesnegativos";
})(ExportacionesIndExe = exports.ExportacionesIndExe || (exports.ExportacionesIndExe = {}));
var ExportacionesCdgItem = (function () {
    function ExportacionesCdgItem() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TpoCodigo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoCodigo = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('VlrCodigo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.VlrCodigo = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesCdgItem;
}());
exports.ExportacionesCdgItem = ExportacionesCdgItem;
var ExportacionesSubcantidad = (function () {
    function ExportacionesSubcantidad() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('SubCod');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubCod = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TipCodSubQty');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipCodSubQty = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('SubQty');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubQty = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesSubcantidad;
}());
exports.ExportacionesSubcantidad = ExportacionesSubcantidad;
var ExportacionesOtrMnda = (function () {
    function ExportacionesOtrMnda() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('Moneda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Moneda = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RecargoOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RecargoOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('MontoItemOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MontoItemOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('PrcOtrMon');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.PrcOtrMon = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FctConv');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FctConv = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('DctoOtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DctoOtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesOtrMnda;
}());
exports.ExportacionesOtrMnda = ExportacionesOtrMnda;
var ExportacionesSubDscto = (function () {
    function ExportacionesSubDscto() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TipoDscto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoDscto = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('ValorDscto');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValorDscto = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesSubDscto;
}());
exports.ExportacionesSubDscto = ExportacionesSubDscto;
var ExportacionesSubRecargo = (function () {
    function ExportacionesSubRecargo() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('TipoRecargo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TipoRecargo = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('ValorRecargo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValorRecargo = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesSubRecargo;
}());
exports.ExportacionesSubRecargo = ExportacionesSubRecargo;
var ExportacionesSubTotInfo = (function () {
    function ExportacionesSubTotInfo() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('GlosaSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GlosaSTI = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('OrdenSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.OrdenSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('LineasDeta');
            if (nd.length > 0) {
                _this.LineasDeta = [];
                for (var i = 0; i < nd.length; ++i)
                    if (nd[i].parentNode == Node)
                        _this.LineasDeta.push(parseFloat(nd[i].textContent));
            }
            nd = Node.getElementsByTagName('SubTotNetoSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotNetoSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotIVASTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotIVASTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotAdicSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotAdicSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('SubTotExeSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SubTotExeSTI = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValSubtotSTI');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValSubtotSTI = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesSubTotInfo;
}());
exports.ExportacionesSubTotInfo = ExportacionesSubTotInfo;
var ExportacionesDscRcgGlobal = (function () {
    function ExportacionesDscRcgGlobal() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinDR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinDR = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoMov');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoMov = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('GlosaDR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.GlosaDR = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TpoValor');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoValor = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IndExeDR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndExeDR = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValorDR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValorDR = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('ValorDROtrMnda');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.ValorDROtrMnda = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesDscRcgGlobal;
}());
exports.ExportacionesDscRcgGlobal = ExportacionesDscRcgGlobal;
var ExportacionesIndExeDR;
(function (ExportacionesIndExeDR) {
    ExportacionesIndExeDR[ExportacionesIndExeDR["DescuentoRecargoGlobalNoAfecto"] = 1] = "DescuentoRecargoGlobalNoAfecto";
    ExportacionesIndExeDR[ExportacionesIndExeDR["DescuentoRecargoNoFacturable"] = 2] = "DescuentoRecargoNoFacturable";
})(ExportacionesIndExeDR = exports.ExportacionesIndExeDR || (exports.ExportacionesIndExeDR = {}));
var ExportacionesReferencia = (function () {
    function ExportacionesReferencia() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('NroLinRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.NroLinRef = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('TpoDocRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TpoDocRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IndGlobal');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IndGlobal = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IdAdicOtr');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IdAdicOtr = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FchRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FchRef = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('CodRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CodRef = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RazonRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RazonRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('FolioRef');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FolioRef = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RUTOtr');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RUTOtr = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesReferencia;
}());
exports.ExportacionesReferencia = ExportacionesReferencia;
var ExportacionesIndGlobal;
(function (ExportacionesIndGlobal) {
    ExportacionesIndGlobal[ExportacionesIndGlobal["ElDocumentohaceReferenciaaunConjuntodeDocumentosTributariosdelMismoTipo"] = 1] = "ElDocumentohaceReferenciaaunConjuntodeDocumentosTributariosdelMismoTipo";
})(ExportacionesIndGlobal = exports.ExportacionesIndGlobal || (exports.ExportacionesIndGlobal = {}));
var ExportacionesCodRef;
(function (ExportacionesCodRef) {
    ExportacionesCodRef[ExportacionesCodRef["AnulaDocumentodeReferencia"] = 1] = "AnulaDocumentodeReferencia";
    ExportacionesCodRef[ExportacionesCodRef["CorrigeTextodelDocumentodeReferencia"] = 2] = "CorrigeTextodelDocumentodeReferencia";
    ExportacionesCodRef[ExportacionesCodRef["CorrigeMontos"] = 3] = "CorrigeMontos";
})(ExportacionesCodRef = exports.ExportacionesCodRef || (exports.ExportacionesCodRef = {}));
var ExportacionesTED = (function () {
    function ExportacionesTED() {
        var _this = this;
        this.version = "1.0";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('version'))
                _this.version = Node.getAttribute('version');
            nd = Node.getElementsByTagName('DD');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DD = new ExportacionesDD();
                    _this.DD.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('FRMT');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FRMT = new ExportacionesFRMT();
                    _this.FRMT.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return ExportacionesTED;
}());
exports.ExportacionesTED = ExportacionesTED;
var ExportacionesDD = (function () {
    function ExportacionesDD() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('RSR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RSR = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('MNT');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.MNT = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('IT1');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IT1 = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('RE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RE = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TD');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TD = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('F');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.F = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('FE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FE = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RR');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RR = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('CAF');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CAF = new ExportacionesCAF();
                    _this.CAF.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('TSTED');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TSTED = new Date(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesDD;
}());
exports.ExportacionesDD = ExportacionesDD;
var ExportacionesCAF = (function () {
    function ExportacionesCAF() {
        var _this = this;
        this.version = "1.0";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('version'))
                _this.version = Node.getAttribute('version');
            nd = Node.getElementsByTagName('DA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DA = new ExportacionesDA();
                    _this.DA.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('FRMA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FRMA = new ExportacionesFRMA();
                    _this.FRMA.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return ExportacionesCAF;
}());
exports.ExportacionesCAF = ExportacionesCAF;
var ExportacionesDA = (function () {
    function ExportacionesDA() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('RS');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RS = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('IDK');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.IDK = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RE');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RE = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('TD');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.TD = parseInt(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RNG');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RNG = new ExportacionesRNG();
                    _this.RNG.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('FA');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.FA = new Date(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('RSAPK');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RSAPK = new ExportacionesRSAPK();
                    _this.RSAPK.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('DSAPK');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DSAPK = new ExportacionesDSAPK();
                    _this.DSAPK.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return ExportacionesDA;
}());
exports.ExportacionesDA = ExportacionesDA;
var ExportacionesRNG = (function () {
    function ExportacionesRNG() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('D');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.D = parseFloat(nd[i].textContent);
                    break;
                }
            nd = Node.getElementsByTagName('H');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.H = parseFloat(nd[i].textContent);
                    break;
                }
        };
    }
    return ExportacionesRNG;
}());
exports.ExportacionesRNG = ExportacionesRNG;
var ExportacionesRSAPK = (function () {
    function ExportacionesRSAPK() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('M');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.M = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('E');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.E = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesRSAPK;
}());
exports.ExportacionesRSAPK = ExportacionesRSAPK;
var ExportacionesDSAPK = (function () {
    function ExportacionesDSAPK() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('P');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.P = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Q');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Q = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('G');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.G = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Y');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Y = nd[i].textContent;
                    break;
                }
        };
    }
    return ExportacionesDSAPK;
}());
exports.ExportacionesDSAPK = ExportacionesDSAPK;
var ExportacionesFRMA = (function () {
    function ExportacionesFRMA() {
        var _this = this;
        this.algoritmo = "SHA1withRSA";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('algoritmo'))
                _this.algoritmo = Node.getAttribute('algoritmo');
            _this.valor = Node.textContent || '';
        };
    }
    return ExportacionesFRMA;
}());
exports.ExportacionesFRMA = ExportacionesFRMA;
var ExportacionesFRMT = (function () {
    function ExportacionesFRMT() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('algoritmo'))
                _this.algoritmo = Node.getAttribute('algoritmo');
            _this.valor = Node.textContent || '';
        };
    }
    return ExportacionesFRMT;
}());
exports.ExportacionesFRMT = ExportacionesFRMT;
//# sourceMappingURL=dtes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signature = (function () {
    function Signature() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('SignatureValue');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SignatureValue = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('SignedInfo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SignedInfo = new SignedInfo();
                    _this.SignedInfo.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('KeyInfo');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.KeyInfo = new KeyInfo();
                    _this.KeyInfo.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return Signature;
}());
exports.Signature = Signature;
var SignedInfo = (function () {
    function SignedInfo() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('CanonicalizationMethod');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.CanonicalizationMethod = new CanonicalizationMethod();
                    _this.CanonicalizationMethod.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('SignatureMethod');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.SignatureMethod = new SignatureMethod();
                    _this.SignatureMethod.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('Reference');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Reference = new Reference();
                    _this.Reference.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return SignedInfo;
}());
exports.SignedInfo = SignedInfo;
var CanonicalizationMethod = (function () {
    function CanonicalizationMethod() {
        var _this = this;
        this.Algorithm = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('Algorithm'))
                _this.Algorithm = Node.getAttribute('Algorithm');
        };
    }
    return CanonicalizationMethod;
}());
exports.CanonicalizationMethod = CanonicalizationMethod;
var SignatureMethod = (function () {
    function SignatureMethod() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('Algorithm'))
                _this.Algorithm = Node.getAttribute('Algorithm');
        };
    }
    return SignatureMethod;
}());
exports.SignatureMethod = SignatureMethod;
var Reference = (function () {
    function Reference() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('URI'))
                _this.URI = Node.getAttribute('URI');
            nd = Node.getElementsByTagName('DigestValue');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DigestValue = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Transforms');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Transforms = new Transforms();
                    _this.Transforms.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('DigestMethod');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DigestMethod = new DigestMethod();
                    _this.DigestMethod.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return Reference;
}());
exports.Reference = Reference;
var Transforms = (function () {
    function Transforms() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('Transform');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Transform = new Transform();
                    _this.Transform.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return Transforms;
}());
exports.Transforms = Transforms;
var Transform = (function () {
    function Transform() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('Algorithm'))
                _this.Algorithm = Node.getAttribute('Algorithm');
        };
    }
    return Transform;
}());
exports.Transform = Transform;
var DigestMethod = (function () {
    function DigestMethod() {
        var _this = this;
        this.Algorithm = "http://www.w3.org/2000/09/xmldsig#sha1";
        this.ParseFromXMLElement = function (Node) {
            var nd;
            if (Node.hasAttribute('Algorithm'))
                _this.Algorithm = Node.getAttribute('Algorithm');
        };
    }
    return DigestMethod;
}());
exports.DigestMethod = DigestMethod;
var KeyInfo = (function () {
    function KeyInfo() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('KeyValue');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.KeyValue = new KeyValue();
                    _this.KeyValue.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('X509Data');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.X509Data = new X509Data();
                    _this.X509Data.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return KeyInfo;
}());
exports.KeyInfo = KeyInfo;
var KeyValue = (function () {
    function KeyValue() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('RSAKeyValue');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.RSAKeyValue = new RSAKeyValue();
                    _this.RSAKeyValue.ParseFromXMLElement(nd[i]);
                    break;
                }
            nd = Node.getElementsByTagName('DSAKeyValue');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.DSAKeyValue = new DSAKeyValue();
                    _this.DSAKeyValue.ParseFromXMLElement(nd[i]);
                    break;
                }
        };
    }
    return KeyValue;
}());
exports.KeyValue = KeyValue;
var RSAKeyValue = (function () {
    function RSAKeyValue() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('Modulus');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Modulus = nd[i].textContent;
                    break;
                }
            nd = Node.getElementsByTagName('Exponent');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.Exponent = nd[i].textContent;
                    break;
                }
        };
    }
    return RSAKeyValue;
}());
exports.RSAKeyValue = RSAKeyValue;
var DSAKeyValue = (function () {
    function DSAKeyValue() {
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
    return DSAKeyValue;
}());
exports.DSAKeyValue = DSAKeyValue;
var X509Data = (function () {
    function X509Data() {
        var _this = this;
        this.ParseFromXMLElement = function (Node) {
            var nd;
            nd = Node.getElementsByTagName('X509Certificate');
            for (var i = 0; i < nd.length; ++i)
                if (nd[i].parentNode == Node) {
                    _this.X509Certificate = nd[i].textContent;
                    break;
                }
        };
    }
    return X509Data;
}());
exports.X509Data = X509Data;
//# sourceMappingURL=firma_electronica.js.map
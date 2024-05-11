"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentSpec = exports.InstrumentType = exports.Style = exports.Wood = exports.Builder = exports.GuitarType = exports.Instrument = void 0;
// Start back on page 211
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.instruments = new Array();
    }
    Inventory.prototype.instrumentCount = function () {
        return this.instruments.length;
    };
    Inventory.prototype.addInstrument = function (serialNumber, price, spec) {
        var newInstrument = new Instrument(serialNumber, price, spec);
        this.instruments.push(newInstrument);
    };
    Inventory.prototype.get = function (serialNumber) {
        for (var _i = 0, _a = this.instruments; _i < _a.length; _i++) {
            var instrument = _a[_i];
            if (instrument.getSerialNumber() === serialNumber) {
                return instrument;
            }
        }
        return null;
    };
    Inventory.prototype.search = function (spec) {
        var matchingInstruments = new Array();
        for (var _i = 0, _a = this.instruments; _i < _a.length; _i++) {
            var instrument = _a[_i];
            if (instrument.getSpec().matches(spec))
                matchingInstruments.push(instrument);
        }
        return matchingInstruments;
    };
    return Inventory;
}());
exports.default = Inventory;
var Instrument = /** @class */ (function () {
    function Instrument(serialNumber, price, spec) {
        this._serialNumber = serialNumber;
        this._price = price;
        this._spec = spec;
    }
    Instrument.prototype.getSerialNumber = function () {
        return this._serialNumber;
    };
    Instrument.prototype.getPrice = function () {
        return this._price;
    };
    Instrument.prototype.setPrice = function (price) {
        this._price = price;
    };
    Instrument.prototype.getSpec = function () {
        return this._spec;
    };
    return Instrument;
}());
exports.Instrument = Instrument;
var GuitarType;
(function (GuitarType) {
    GuitarType["acustic"] = "Acustic";
    GuitarType["electric"] = "Electric";
})(GuitarType || (exports.GuitarType = GuitarType = {}));
var Builder;
(function (Builder) {
    Builder["fender"] = "Fender";
    Builder["gibson"] = "Gibson";
    Builder["collings"] = "Collings";
})(Builder || (exports.Builder = Builder = {}));
var Wood;
(function (Wood) {
    Wood["alder"] = "Alder";
    Wood["cedar"] = "Cedar";
    Wood["indianRoseWood"] = "Indian Rose Wood";
    Wood["maple"] = "Maple";
    Wood["spruce"] = "Spruce";
})(Wood || (exports.Wood = Wood = {}));
var Style;
(function (Style) {
    Style["a"] = "A";
    Style["f"] = "F";
})(Style || (exports.Style = Style = {}));
var InstrumentType;
(function (InstrumentType) {
    InstrumentType["guitar"] = "Guitar";
    InstrumentType["banjo"] = "Banjo";
    InstrumentType["dobro"] = "Dobro";
    InstrumentType["fiddle"] = "Fiddle";
    InstrumentType["mandolin"] = "Mandolin";
})(InstrumentType || (exports.InstrumentType = InstrumentType = {}));
var InstrumentSpec = /** @class */ (function () {
    function InstrumentSpec(properties) {
        this.properties = new Map(Object.entries(properties));
    }
    InstrumentSpec.prototype.getProperties = function () {
        return this.properties;
    };
    InstrumentSpec.prototype.getProperty = function (key) {
        return this.properties.get(key);
    };
    InstrumentSpec.prototype.matches = function (spec) {
        for (var _i = 0, _a = spec.getProperties().keys(); _i < _a.length; _i++) {
            var property = _a[_i];
            if (spec.getProperty(property) !== this.getProperty(property)) {
                return false;
            }
        }
        return true;
    };
    return InstrumentSpec;
}());
exports.InstrumentSpec = InstrumentSpec;
/**
 * Example of Usage
 *
 * Creating a Guitar
 * const guitarProperties: InstrumentProperties = {
 *   type: InstrumentType.guitar,
 *   builder: Builder.fender,
 *   wood: Wood.alder,
 *   guitarType: GuitarType.acustic
 * const guitarSpec: InstrumentSpec = new InstrumentSpec(guitarProperties)
 * }
 * const newGuitar: Instrument = new Instrument(
 *  crypto.randomUUID(),
 *  2000,
 * guitarSpec
 * )
 *
 * OR You can use the addInstrument on Inventory
 * const inventory = new Inventory()
 * inventory.addInstrument(crypto.randomUUID(), 2000, guitarSpec)
 */

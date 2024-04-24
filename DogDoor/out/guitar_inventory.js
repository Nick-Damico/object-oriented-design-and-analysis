"use strict";
var GuitarType;
(function (GuitarType) {
    GuitarType["acustic"] = "Acustic";
    GuitarType["electric"] = "Electric";
})(GuitarType || (GuitarType = {}));
var Builder;
(function (Builder) {
    Builder["fender"] = "Fender";
    Builder["gibson"] = "Gibson";
})(Builder || (Builder = {}));
var Wood;
(function (Wood) {
    Wood["alder"] = "Alder";
    Wood["cedar"] = "Cedar";
    Wood["indianRoseWood"] = "Indian Rose Wood";
    Wood["maple"] = "Maple";
})(Wood || (Wood = {}));
class GuitarSpec {
    constructor(builder, model, type, numStrings, backWood, frontWood) {
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.numStrings = numStrings;
        this.backWood = backWood;
        this.frontWood = frontWood;
    }
    getBuilder() {
        return this.builder;
    }
    getModel() {
        return this.model;
    }
    getType() {
        return this.type;
    }
    getBackWood() {
        return this.backWood;
    }
    getFrontWood() {
        return this.frontWood;
    }
    getNumStrings() {
        return this.numStrings;
    }
    matches(spec) {
        let matches = true;
        if (spec.getBuilder() !== this.getBuilder()) {
            matches = false;
        }
        if (spec.getModel() !== this.getModel()) {
            matches = false;
        }
        if (spec.getType() !== this.getType()) {
            matches = false;
        }
        if (spec.getBackWood() !== this.getBackWood()) {
            matches = false;
        }
        if (spec.getFrontWood() !== this.getFrontWood()) {
            matches = false;
        }
        return matches;
    }
}
class Guitar {
    constructor(serialNumber, price, guitarSpec) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.guitarSpec = guitarSpec;
    }
    getSerialNumber() {
        return this.serialNumber;
    }
    getPrice() {
        return this.price;
    }
    getGuitarSpec() {
        return this.guitarSpec;
    }
}
class Inventory {
    constructor() {
        this.guitars = new Array();
    }
    addGuitar(serialNumber, price, builder, model, type, numStrings, backWood, frontWood) {
        const guitarSpec = new GuitarSpec(builder, model, type, numStrings, backWood, frontWood);
        const newGuitar = new Guitar(serialNumber, price, guitarSpec);
        this.guitars.push(newGuitar);
    }
    search(spec) {
        const matchingGuitars = new Array();
        for (const guitar of this.guitars) {
            if (guitar.getGuitarSpec().matches(spec))
                matchingGuitars.push(guitar);
        }
        return matchingGuitars;
    }
}
//# sourceMappingURL=guitar_inventory.js.map
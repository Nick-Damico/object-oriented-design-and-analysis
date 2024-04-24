// Start back on page 211
namespace GuitarInventoryV2 {
  class Inventory {
    private instruments: Instrument[]

    constructor() {
      this.instruments = new Array()
    }

    addInstrument(
      instrumentType: InstrumentType,
      serialNumber: string,
      price: number,
      spec: InstrumentSpec
    ): void {
      let newInstrument = new Instrument(
        instrumentType,
        serialNumber,
        price,
        spec
      )

      this.instruments.push(newInstrument)
    }

    get(serialNumber: string): Instrument | null {
      for (const instrument of this.instruments) {
        if (instrument.getSerialNumber() === serialNumber) {
          return instrument
        }
      }

      return null
    }

    search(spec: InstrumentSpec): Instrument[] {
      const matchingInstruments: Instrument[] = new Array()
      for (const instrument of this.instruments) {
        if (instrument.getSpec().matches(spec))
          matchingInstruments.push(instrument)
      }
      return matchingInstruments
    }
  }

  class Instrument {
    private _serialNumber: string
    private _price: number
    private _spec: InstrumentSpec

    constructor(serialNumber: string, price: number, spec: InstrumentSpec) {
      this._serialNumber = serialNumber
      this._price = price
      this._spec = spec
    }

    getSerialNumber(): string {
      return this._serialNumber
    }

    getPrice(): number {
      return this._price
    }

    setPrice(price: number): void {
      this._price = price
    }

    getSpec(): InstrumentSpec {
      return this._spec
    }
  }

  enum GuitarType {
    acustic = 'Acustic',
    electric = 'Electric'
  }

  enum Builder {
    fender = 'Fender',
    gibson = 'Gibson'
  }
  enum Wood {
    alder = 'Alder',
    cedar = 'Cedar',
    indianRoseWood = 'Indian Rose Wood',
    maple = 'Maple'
  }
  enum Style {
    a = 'A',
    f = 'F'
  }
  enum Type {
    guitar = 'Guitar',
    banjo = 'Banjo',
    dobro = 'Dobro',
    fiddle = 'Fiddle',
    mandolin = 'Mandolin'
  }

  type InstrumentProperties = {
    type: Type
    builder: Builder
    wood: Wood
    style?: Style
    guitarType?: GuitarType
  }

  const guitarSpec: InstrumentProperties = {
    type: Type.guitar,
    builder: Builder.fender,
    wood: Wood.alder,
    guitarType: GuitarType.acustic
  }

  class InstrumentSpec {
    private properties: Map<string, string>

    constructor(properties: InstrumentProperties) {
      this.properties = new Map(Object.entries(properties))
    }

    getProperties(): Map<string, string> {
      return this.properties
    }

    getProperty(key: string): string | undefined {
      return this.properties.get(key)
    }

    matches(spec: InstrumentSpec): boolean {
      for (const property in spec.getProperties()) {
        if (spec.getProperty(property) !== this.getProperty(property)) {
          return false
        }
      }

      return true
    }
  }
}

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

/**
 * Create an Abstract Parent Instrument Class
 * Mandolin and Guitar class that extend.
 *
 * Create a Spec class for String Instrument Spec or GuitarSpec and MandolinSpec
 *
 * We change the inventory to
 *  - addInstrument(String, double, Spec)
 *  - getInstrument(String): Instrument
 *  - search(Spec): Instrument [*]
 */
// class GuitarSpec {
//   private builder: Builder
//   private model: string
//   private type: GuitarType
//   private numStrings: number
//   private backWood: Wood
//   private frontWood: Wood

//   constructor(
//     builder: Builder,
//     model: string,
//     type: GuitarType,
//     numStrings: number,
//     backWood: Wood,
//     frontWood: Wood
//   ) {
//     this.builder = builder
//     this.model = model
//     this.type = type
//     this.numStrings = numStrings
//     this.backWood = backWood
//     this.frontWood = frontWood
//   }

//   getBuilder(): Builder {
//     return this.builder
//   }
//   getModel(): string {
//     return this.model
//   }
//   getType(): GuitarType {
//     return this.type
//   }
//   getBackWood(): Wood {
//     return this.backWood
//   }
//   getFrontWood(): Wood {
//     return this.frontWood
//   }
//   getNumStrings(): number {
//     return this.numStrings
//   }

//   matches(spec: GuitarSpec): boolean {
//     let matches = true
//     if (spec.getBuilder() !== this.getBuilder()) {
//       matches = false
//     }
//     if (spec.getModel() !== this.getModel()) {
//       matches = false
//     }
//     if (spec.getType() !== this.getType()) {
//       matches = false
//     }
//     if (spec.getBackWood() !== this.getBackWood()) {
//       matches = false
//     }
//     if (spec.getFrontWood() !== this.getFrontWood()) {
//       matches = false
//     }

//     return matches
//   }
// }

// class Guitar {
//   private serialNumber: string
//   private price: number
//   private guitarSpec: GuitarSpec

//   constructor(serialNumber: string, price: number, guitarSpec: GuitarSpec) {
//     this.serialNumber = serialNumber
//     this.price = price
//     this.guitarSpec = guitarSpec
//   }

//   getSerialNumber(): string {
//     return this.serialNumber
//   }
//   getPrice(): number {
//     return this.price
//   }
//   getGuitarSpec(): GuitarSpec {
//     return this.guitarSpec
//   }
// }

// class Inventory {
//   private guitars: Guitar[]

//   constructor() {
//     this.guitars = new Array()
//   }

//   addGuitar(
//     serialNumber: string,
//     price: number,
//     builder: Builder,
//     model: string,
//     type: GuitarType,
//     numStrings: number,
//     backWood: Wood,
//     frontWood: Wood
//   ) {
//     const guitarSpec = new GuitarSpec(
//       builder,
//       model,
//       type,
//       numStrings,
//       backWood,
//       frontWood
//     )
//     const newGuitar = new Guitar(serialNumber, price, guitarSpec)
//     this.guitars.push(newGuitar)
//   }

//   search(spec: GuitarSpec): Guitar[] {
//     const matchingGuitars: Guitar[] = new Array()
//     for (const guitar of this.guitars) {
//       if (guitar.getGuitarSpec().matches(spec)) matchingGuitars.push(guitar)
//     }

//     return matchingGuitars
//   }
// }

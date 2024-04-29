import Inventory, {
  Instrument,
  InstrumentSpec,
  InstrumentType,
  InstrumentProperties,
  GuitarType,
  Builder,
  Wood
} from '../InventoryV2'

jest.useFakeTimers()

const inventory = new Inventory()

describe('#instrumentCount', () => {
  it('returns inventory total count', () => {
    const guitarProperties: InstrumentProperties = {
      type: InstrumentType.guitar,
      builder: Builder.collings,
      backWood: Wood.indianRoseWood,
      sideWood: Wood.indianRoseWood,
      topWood: Wood.spruce
    }
    inventory.addInstrument(
      '11277',
      3999.95,
      new InstrumentSpec(guitarProperties)
    )

    expect(inventory.instrumentCount()).toEqual(1)
  })
})

// describe.only('isOpen', () => {
//   it('defaults to false', () => {
//     const dogDoor = new DogDoor(bark)

//     expect(dogDoor.isOpen()).toBe(false)
//   })
// })

// describe('open', () => {
//   it('updates dogDoor to open state', () => {
//     const dogDoor = new DogDoor(bark)

//     dogDoor.open()

//     expect(dogDoor.isOpen()).toBe(true)
//   })
// })

// describe('close', () => {
//   it('updates dogDoor to close state', () => {
//     const dogDoor = new DogDoor(bark)

//     dogDoor.open()
//     dogDoor.close()

//     expect(dogDoor.isOpen()).toBe(false)
//   })
// })

// describe('Remote', () => {
//   describe('buttonPress', () => {
//     it('opens the door when the button is pressed', () => {
//       const door = new DogDoor(bark)
//       const remote = new Remote(door)

//       remote.pressButton()
//       expect(door.isOpen()).toBe(true)
//     })

//     it(`closes the door (${DogDoor.openDuration})ms after being opened`, () => {
//       const door = new DogDoor(bark)
//       const remote = new Remote(door)

//       remote.pressButton()
//       jest.advanceTimersByTime(5000)

//       expect(door.isOpen()).toBe(false)
//     })
//   })
// })

// describe('BarkRecognizer', () => {
//   it('opens the door when it recognizes a dog bark', () => {
//     const door: DogDoor = new DogDoor(bark)
//     const recognizer: BarkRecognizer = new BarkRecognizer(door)

//     recognizer.recognize(bark)

//     expect(door.isOpen()).toBe(true)
//   })

//   it('does not open for other types of animal sounds', () => {
//     const door: DogDoor = new DogDoor(bark)
//     const recognizer: BarkRecognizer = new BarkRecognizer(door)

//     recognizer.recognize(new Bark('meow'))

//     expect(door.isOpen()).toBe(false)
//   })
// })

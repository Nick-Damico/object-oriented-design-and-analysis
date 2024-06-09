import Unit, { UnitType } from '../models/unit'

// jest.useFakeTimers()
let infantryUnit

beforeAll(() => {
  infantryUnit = new Unit(UnitType.infantry)
})

describe('Unit', () => {
  describe('#constructor', () => {
    it('creates a Unit object', () => {
      expect(new Unit(UnitType.infantry)).toBeInstanceOf(Unit)
    })

    it('creates a Unit object using the specified type', () => {
      expect(infantryUnit.getType()).toEqual(UnitType.infantry)
    })

    it('accepts an optional ID value', () => {
      let expectedId = crypto.randomUUID()
      const newUnit = new Unit(UnitType.infantry, expectedId)

      expect(newUnit.getId()).toEqual(expectedId)
    })

    it('generates an ID if one is not supplied', () => {
      expect(infantryUnit.getId()).toBeDefined
    })

    it('creates an instance of Unit with custom properties map', () => {
      expect(infantryUnit.getProperties()).toBeInstanceOf(Map)
      expect(infantryUnit.getProperties().size).toBe(0)
    })
  })

  describe('Type', () => {
    it('allows setting and getting the type', () => {
      let existingUnit = infantryUnit

      existingUnit.setType(UnitType.knight)

      expect(existingUnit.getType()).toBe(UnitType.knight)
    })
  })

  describe('Name', () => {
    it('allows setting and getting the name', () => {
      let expectedName = 'Sam'

      infantryUnit.setName(expectedName)

      expect(infantryUnit.getName()).toBe(expectedName)
    })
  })
      const startingHitPoints = 25

      infantryUnit.setProperty('hitPoints', startingHitPoints)

      expect(infantryUnit.getProperty('hitPoints')).toBe(startingHitPoints)
    })

    it('allows updating a properties value', () => {
      const startingHitPoints = 25
      const updateHitPoints = 10

      infantryUnit.setProperty('hitPoints', startingHitPoints)
      expect(infantryUnit.getProperty('hitPoints')).toBe(startingHitPoints)

      infantryUnit.setProperty('hitPoints', updateHitPoints)
      expect(infantryUnit.getProperty('hitPoints')).toBe(updateHitPoints)
    })

    it('returns null if accessing a non-existent property', () => {
      expect(infantryUnit.getProperty('foo')).toBeNull
    })
  })
})

import Unit, { UnitType, Weapon } from '../models/unit'

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

  describe('ID', () => {
    it('allows getting the ID', () => {
      expect(infantryUnit.getId()).toBeDefined
    })
  })

  describe('Weapons', () => {
    it('allows setting and getting', () => {
      infantryUnit.addWeapon(Weapon.rifle)

      expect(infantryUnit.getWeapons()).toContain(Weapon.rifle)
    })
  })

  describe('Properties', () => {
    it('allows creating a custom property with value', () => {
      const startingHitPoints = 25

      infantryUnit.setProperty('hitPoints', startingHitPoints)

      expect(infantryUnit.getProperty('hitPoints')).toBe(startingHitPoints)
    })

    it('allows updating the custom property value', () => {
      const startingHitPoints = 25
      const updateHitPoints = 10

      infantryUnit.setProperty('hitPoints', startingHitPoints)
      expect(infantryUnit.getProperty('hitPoints')).toBe(startingHitPoints)

      infantryUnit.setProperty('hitPoints', updateHitPoints)
      expect(infantryUnit.getProperty('hitPoints')).toBe(updateHitPoints)
    })

    it('raises an error if accessing a non-existent property', () => {
      expect(() => {
        infantryUnit.getProperty('foo')
      }).toThrow('property foo does not exist')
    })
  })
})

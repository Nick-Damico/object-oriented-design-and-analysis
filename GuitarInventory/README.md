# Code Magnet

```java
  public List search(Guitar searchGuitar) {
    List matchingGuitars = new LinkedList();
    for (Iterator i = guitars.iterator(); i.hasNext(); ) {
      Guitar guitar = (Guitar)i.next();
      if (searchGuitar.getBuilder() != guitar.getBuilder())
        continue;

      String model = searchGuitar.getModel();
      if ((model != null) && (!model.equals("")) && (!model.equals(guitar.getModel())))
        continue;

      matchingGuitars.add(guitar)
    }

    return matchingGuitars;
  }
```

### Chapter One: Redesign Inventory

```typescript
class Inventory {
  private guitars: Guitar[]

  constructor() {
    this.guitars = new Array()
  }

  addGuitar(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: GuitarType,
    backWood: Wood,
    frontWood: Wood
  ) {
    // Build a Guitar
    // Add to guitars List
  }

  search(spec: GuitarSpec): Guitar[] {
    const matchingGuitars: Guitar[] = new Array()
    for (const guitar of this.guitars) {
      const guitarSpec = guitar.getGuitarSpec()
      if (spec.getBuilder() !== guitarSpec.getBuilder()) {
        continue
      }
      if (spec.getModel() !== guitarSpec.getModel()) {
        continue
      }
      if (spec.getType() !== guitarSpec.getType()) {
        continue
      }
      if (spec.getBackWood() !== guitarSpec.getBackWood()) {
        continue
      }
      if (spec.getFrontWood() !== guitarSpec.getFrontWood()) {
        continue
      }
      matchingGuitars.push(guitar)
    }

    return matchingGuitars
  }
}
```

**What would you change about this code?**
Inventory is really a inventory of Guitars at the moment.
If we need to change to inventory other items with will need to add new collection to this
model.

The `search` will not work with a new type of collection, as it takes a GuitarSpec and explicitly searches
the guitars inventory.

Things to Fix:

- We could create an abstract Inventory class that implements an attribute `inventory` and `search`. We could then derive concrete sub-classes from this Inventory Abstract Class. For instance, `GuitarInventory` and `DrumInventory`.
- I don't know if we know enough yet to be able to abstract the Spec class.

**Adding 12 String Guitars to inventory**

1. Add `numString` to `GuitarSpec`
2. Add `getNumString` to `GuitarSpec`
3. Update `search` to compare `numString`.

Adding new requirements involves opening up the `Spec` and the inventory to support the change.
Possible Solution: Move comparison of specs to another class or the `Spec` class. That way we isolate where the app changes. We could refactor the inventory to take a spec from the customer and then call compare on the current guitar with the customer supplied spec.

## Chapter 2

**How are animals getting through the door, what is wrong with current version?**
It is a manual device and the owners are pressing it when the dog barks, the dog could be barking for no reason.
The door should probably automatically open when the dog approaches and closes when it goes through.
It should only open authorized animals like the Dog.

## Chapter 4

Add Suport for Mandolins to Ricks Search Tool

- Inventory is too tightly coupled to a Single Type of Instrument with Methods like: `addGuitar(), getGuitar(), search(GuitarSpec)`
- We need to abstract these to be more **flexible** to handle other types of **Instruments** in the future.
- Search needs to be able to handle other types of `Specs` not just `GuitarSpecs`.

Guitar and Mandolin share commonality:

- Create an abstract Instrument Class, abstract as we would not instantiate the Instrument class only the concrete implementations.

Spec should probably turn into an abstract too InstrumentSpec

- GuitarSpec && MandolinSpec

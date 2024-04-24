class DessertWorker {
  private _dessert: Dessert | null

  setDessert(dessert: Dessert | null): undefined {
    this._dessert = dessert
  }

  serve(): Dessert | null {
    const dessert = this._dessert
    this.setDessert(null)

    return dessert
  }
}

class DessertCounter {
  private _dessert: Dessert
  private _dessertWorker: DessertWorker
  private _iceCreams: IceCream[]
  private _toppings: Topping[]

  constructor(dessertWorker: DessertWorker) {
    this._dessertWorker = dessertWorker
  }

  public orderDessert(
    dessert: Dessert,
    iceCreams: IceCream[],
    toppings: Topping[]
  ): Dessert {
    for (const iceCream of iceCreams) {
      this._dessert.addIceCream(iceCream)
    }
    for (const topping of toppings) {
      this._dessert.addTopping(topping)
    }

    return dessert
  }

  serve(): Dessert | null {
    return this._dessertWorker.serve()
  }
}

abstract class Dessert {
  private _iceCreams: IceCream[]
  private _toppings: Topping[]

  addIceCream(iceCream: IceCream): undefined {
    this._iceCreams.push(iceCream)
  }

  addTopping(topping: Topping): undefined {
    this._toppings.push(topping)
  }
}

class Sundae extends Dessert {}

class Cone extends Dessert {}

interface IceCream {
  taste: string
  getTaste(): string
}

class Vanilla implements IceCream {
  taste: string
  constructor(taste: string) {
    this.taste = taste
  }

  getTaste(): string {
    return this.taste
  }
}

class Chocolate implements IceCream {
  taste: string
  constructor(taste: string) {
    this.taste = taste
  }

  getTaste(): string {
    return this.taste
  }
}

interface Topping {
  description: string
  getDescription(): string
}

class WhippedCream implements Topping {
  description: string

  constructor(description: string) {
    this.description = 'Whipped Cream'
  }

  getDescription(): string {
    return this.description
  }
}

abstract class Syrup implements Topping {
  description: string
  ingredients: string

  getDescription(): string {
    return this.description
  }
  getIngredients(): string {
    return this.ingredients
  }
}

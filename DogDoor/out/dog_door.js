"use strict";
class DogDoor {
    constructor() {
        this._open = false;
    }
    isOpen() {
        return this._open;
    }
    open() {
        this._open = true;
    }
    close() {
        this._open = false;
    }
}
class Remote {
    constructor(door) {
        this.door = door;
    }
    pressButton() {
        console.log('Pressing the remote control button...');
        this.door.isOpen() ? this.door.close() : this.door.open();
    }
}
new Remote(new DogDoor());
//# sourceMappingURL=dog_door.js.map
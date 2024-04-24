"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DogDoorV2_1 = require("../DogDoorV2");
var barkRecognizer_1 = require("../barkRecognizer");
jest.useFakeTimers();
var bark = new DogDoorV2_1.Bark('woof');
describe('isOpen', function () {
    it('defaults to false', function () {
        var dogDoor = new DogDoorV2_1.default(bark);
        expect(dogDoor.isOpen()).toBe(false);
    });
});
describe('open', function () {
    it('updates dogDoor to open state', function () {
        var dogDoor = new DogDoorV2_1.default(bark);
        dogDoor.open();
        expect(dogDoor.isOpen()).toBe(true);
    });
});
describe('close', function () {
    it('updates dogDoor to close state', function () {
        var dogDoor = new DogDoorV2_1.default(bark);
        dogDoor.open();
        dogDoor.close();
        expect(dogDoor.isOpen()).toBe(false);
    });
});
describe('Remote', function () {
    describe('buttonPress', function () {
        it('opens the door when the button is pressed', function () {
            var door = new DogDoorV2_1.default(bark);
            var remote = new DogDoorV2_1.Remote(door);
            remote.pressButton();
            expect(door.isOpen()).toBe(true);
        });
        it("closes the door (".concat(DogDoorV2_1.default.openDuration, ")ms after being opened"), function () {
            var door = new DogDoorV2_1.default(bark);
            var remote = new DogDoorV2_1.Remote(door);
            remote.pressButton();
            jest.advanceTimersByTime(5000);
            expect(door.isOpen()).toBe(false);
        });
    });
});
describe('BarkRecognizer', function () {
    it('opens the door when it recognizes a dog bark', function () {
        var door = new DogDoorV2_1.default(bark);
        var recognizer = new barkRecognizer_1.default(door);
        recognizer.recognize(bark);
        expect(door.isOpen()).toBe(true);
    });
    it('does not open for other types of animal sounds', function () {
        var door = new DogDoorV2_1.default(bark);
        var recognizer = new barkRecognizer_1.default(door);
        recognizer.recognize(new DogDoorV2_1.Bark('meow'));
        expect(door.isOpen()).toBe(false);
    });
});

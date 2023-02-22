const {LiftButton} = require('./LiftButton')


describe('A test suite for the lift button kata', () => {
    test('framework works', () => {
        expect(true).toEqual(true);
    })
    test('is the light on', () => {
        let liftButton = new LiftButton();
        expect(liftButton.isLightOn()).toEqual(false);
    })
    test('does the light go on when the button is pressed', () => {
        let liftButton = new LiftButton();
        expect(liftButton.isLightOn()).toEqual(false);
        liftButton.pressButton();
        expect(liftButton.isLightOn()).toEqual(true);
    })
    test('if the light is on the button doesn\'t change the state', () => {
        let liftButton = new LiftButton();
        expect(liftButton.isLightOn()).toEqual(false);
        liftButton.pressButton();
        expect(liftButton.isLightOn()).toEqual(true);
        liftButton.pressButton();
        expect(liftButton.isLightOn()).toEqual(true);
    })
    test('when the doors open the light goes off', () => {
        let liftButton = new LiftButton();
        liftButton.pressButton();
        expect(liftButton.isLightOn()).toEqual(true);
        liftButton.openDoors();
        expect(liftButton.isLightOn()).toEqual(false);
    })
    test('if the doors are open, pressing the button will not make the light go on', () => {
        let liftButton = new LiftButton();
        liftButton.openDoors();
        expect(liftButton.isLightOn()).toEqual(false);
        liftButton.pressButton();
        expect(liftButton.isLightOn()).toEqual(false);
    })
})
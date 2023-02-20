const {LiftButton} = require('./LiftButton.js')


describe('A test suite for the lift button kata', () => {
    test('framework works', () => {
        expect(true).toEqual(true);
    })
    test('is the light on', () => {
        let liftButton = new LiftButton();
        expect(liftButton.isLightOn()).toEqual(true);
    })
})
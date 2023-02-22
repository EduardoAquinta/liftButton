class LiftButton {
    lightOn = false;
    doorsOpen = false;
    isLightOn() {
        return this.lightOn;
    }
    pressButton() {
        if(!this.doorsOpen){
            this.lightOn = true;
        }
    }
    openDoors(){
        this.lightOn = false
        this.doorsOpen = true;
    }
}
module.exports = {LiftButton};
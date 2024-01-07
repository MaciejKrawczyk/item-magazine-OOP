import Magazine from "./Magazine";
import Workplace from "./Workplace";

export default class Factory {
    private static instance: Factory;
    private magazine: Magazine | undefined;
    private workplaces: Workplace[];

    private temporaryPlace: any[];
    private packages: any[];


    constructor() {
        this.workplaces = []
        this.temporaryPlace = []
        this.packages = []
        // TODO add received and to send packages and unknown location...
    }

    public static getInstance(): Factory {
        if (!Factory.instance) {
            Factory.instance = new Factory();
        }
        return Factory.instance;
    }

    addMagazine(magazine: Magazine) {
        if (!(magazine instanceof Magazine)) {
            throw new Error("Invalid argument: Expected an instance of Magazine");
        }
        if (this.magazine) {
            throw new Error("Magazine has already been set. Overwriting is not allowed.");
        }
        this.magazine = magazine;
    }

    addWorkplace(workplace: Workplace) {
        this.workplaces.push(workplace)
    }

    removeWorkplace(workplace: Workplace) {

    }

}
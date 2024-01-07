import Cabinet from "./Cabinet";


interface Cabinets {
    [key: string]: Cabinet
}


export default class Magazine {
    private static instance: Magazine;
    public cabinets: Cabinets;

    private constructor() {
        this.cabinets = {}
    }

    public static getInstance(): Magazine {
        if (!Magazine.instance) {
            Magazine.instance = new Magazine();
            Magazine.instance._init()
        }
        return Magazine.instance;
    }

    _init() {

    }

    addCabinet(cabinet: Cabinet, name: string) {
        this.cabinets[name] = cabinet
    }

    getAvailableCabinets() {
        return Object.keys(this.cabinets)
    }
}
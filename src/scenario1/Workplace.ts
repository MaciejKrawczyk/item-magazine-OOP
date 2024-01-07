import Item from "./Item";
import {StorageUnit} from "./StorageUnit";

export default class Workplace {
    public name: string;
    public notes: string;
    public storage: StorageUnit;
    constructor(name: string, notes: string) {
        this.storage = new StorageUnit()
        this.name = name
        this.notes = notes
    }
}

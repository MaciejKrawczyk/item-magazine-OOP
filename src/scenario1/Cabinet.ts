import {generateUniqueId} from "./utils";
import Shelf from "./Shelf";
import Item from "./Item";


interface Storage {
    [shelfType: string]: {
        [shelfId: string]: Shelf
    }
}


export default class Cabinet {
    private readonly storage: Storage

    constructor() {
        this.storage = {}
    }

    addShelves(quantity: number, shelfType: string) {
        this.storage[shelfType] = this.storage[shelfType] || {};

        for (let i = 0; i < quantity; i++) {
            const id = generateUniqueId(this.storage[shelfType]);
            this.storage[shelfType][id] = new Shelf(null);
        }
    }

    getShelf(shelfType: string, shelfId: string): Shelf {
        if (this.storage[shelfType]) {
            if (this.storage[shelfType][shelfId]) {
                return this.storage[shelfType][shelfId];
            } else {
                throw new Error("shelf with provided Id doesn't exist")
            }
        } else {
            throw new Error("provided shelf type doesn't exist")
        }
    }

    autoInsert(item: Item) {

    }

}
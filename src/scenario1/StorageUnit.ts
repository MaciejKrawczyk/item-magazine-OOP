import Item from "../scenario1/Item";
import {removeItem} from "./utils";

interface IStorageUnit {
    addItem(item: Item): Item

    removeItem(itemId: string): Item

    getItem(itemId: string): Item

    getAll(): Item[]
}

export class StorageUnit implements IStorageUnit {
    private readonly items: Item[];
    constructor() {
        this.items = []
    }
    addItem(item: Item): Item {

        if (!item.isAttributesSet) {
            throw new Error('Item attributes must be set before adding the item');
        }

        this.items.push(item)
        return item;
    }


    getAll(): Item[] {
        return this.items;
    }

    getItem(itemId: string): Item {
        let item;

        for (let i = 0;i<this.items.length;i++) {
            if (this.items[i].id === itemId) {
                item = this.items[i]
                return item
            }
        }

        throw new Error(`item with specified id does not exist in ${this}`)
    }

    removeItem(itemId: string): Item {

        let item;

        for (let i = 0; i<this.items.length;i++) {
            if (this.items[i].id === itemId) {
                item = this.items[i]
                removeItem(this.items, this.items[i])
                return item
            }
        }

        throw new Error(`item with specified id does not exist in ${this}`)
    }

}
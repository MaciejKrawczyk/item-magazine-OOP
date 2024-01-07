import ShelfCategory from "./ShelfCategory";
import {StorageUnit} from "./StorageUnit";

export default class Shelf extends StorageUnit {
    private shelfCategory: null | ShelfCategory

    constructor(shelfCategory: ShelfCategory | null) {
        super()
        this.shelfCategory = shelfCategory
    }

    changeCategory(shelfCategory: ShelfCategory) {
        this.shelfCategory = shelfCategory
    }


}

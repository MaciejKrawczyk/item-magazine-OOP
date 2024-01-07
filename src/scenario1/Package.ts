import Item from "./Item";

class Package {
    private items: Item[];
    constructor() {
        this.items = []
    }
}

export class SentPackage extends Package {
    constructor() {
        super();

    }
}


export class ToBeReceivedPackage extends Package {
    constructor() {
        super();

    }

}
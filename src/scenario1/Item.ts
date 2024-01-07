import ItemCategory from "./ItemCategory";
import Company from "./Company";

export default class Item {
    public name: string;
    public itemCategory: ItemCategory;
    public company: Company;
    public notes: string;
    public id: string;
    public itemAttributes: any;
    public isAttributesSet: boolean;
    private shelfType: string;
    private shelfCategory: string;

    constructor(id: string, name: string, notes: string, itemCategory: ItemCategory, company: Company, shelfType: string, shelfCategory: string) {
        this.name = name
        this.notes = notes
        this.itemCategory = itemCategory
        this.company = company
        this.id = id
        this.isAttributesSet = false;
        this.shelfType = shelfType
        this.shelfCategory = shelfCategory

        this.itemAttributes = {};

        for (let i = 0; i < itemCategory.attributes.length; i++) {
            this.itemAttributes[itemCategory.attributes[i]] = undefined
        }
    }

    setItemAttributes(attributes: { [key: string]: any }) {
        for (let attribute in attributes) {
            if (this.itemAttributes.hasOwnProperty(attribute)) {
                this.itemAttributes[attribute] = attributes[attribute];
            } else {
                throw new Error(`Attribute ${attribute} does not exist in item category`);
            }
        }
        this.isAttributesSet = true;
    }
}
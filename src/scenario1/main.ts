import StorageCabinet from "./Cabinet";
import Company from "./Company";
import ItemCategory from "./ItemCategory";
import Item from "./Item";
import ShelfCategory from "./ShelfCategory";
import Magazine from "./Magazine";
import Factory from "./Factory";
import Workplace from "./Workplace";


const factory = Factory.getInstance()
const magazine = Magazine.getInstance()

const cabinet1 = new StorageCabinet()
cabinet1.addShelves(72, 'big')
cabinet1.addShelves(160, 'small')

magazine.addCabinet(cabinet1, 'main')

const company1 = new Company('firma1', 'fajna ta firma1')

const itemCategory1 = new ItemCategory(['radius', 'width', 'angle'])


const tool1 = new Item('12343','frez1', 'fajny frez1', itemCategory1, company1)
tool1.setItemAttributes({
    'radius': 1,
    'width': 2,
    'angle': 90
})

const tool2 = new Item('123445','frez2', 'fajny frez2', itemCategory1, company1)
tool2.setItemAttributes({
    'radius': 2,
    'width': 4,
    'angle': 120
})

const availableCabinets = magazine.getAvailableCabinets()

magazine.cabinets[availableCabinets[0]].getShelf('small', '100').addItem(tool1)

magazine.cabinets[availableCabinets[0]].getShelf('small', '100').addItem(tool2)

const newShelfCategory = new ShelfCategory('french', 'red', 'new shelf category')

magazine.cabinets[availableCabinets[0]].getShelf('small', '100').changeCategory(newShelfCategory)

// magazine.cabinets[availableCabinets[0]].getShelf('small', '100').removeItem(tool1.id)

factory.addMagazine(magazine)

// ###
console.log(magazine.cabinets[availableCabinets[0]].getShelf('small', '100').getAll())
// ###

const workplace1 = new Workplace('szyba', '')
workplace1.storage.addItem(tool1)
workplace1.storage.removeItem(tool1.id)

factory.addWorkplace(workplace1)
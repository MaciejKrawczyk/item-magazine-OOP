let lastId = 0;

export function generateUniqueId(obj: Object) {
    let id;
    do {
        id = ++lastId;
    } while (obj.hasOwnProperty(id)); // Check if this ID already exists in the object

    return id;
}

export function removeItem<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

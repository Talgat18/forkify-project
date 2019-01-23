import uniqid from 'uniqid';
import {
    runInThisContext
} from 'vm';


export default class List {
    constructor() {
        this.items = [];
    }



    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        // [2,4,8] splice (1, 2) -> return 4,8 | mutate , original array [2]
        // [2,4,8] slice (1,2) -> start and end -> return 4 | original array [2,4,8]
        this.items.splice(index, 1); // слайс получает начало и конец массива и возвращает новый, а сплайс получает начало индекса и сколько хотим отрезать и мутирует старый массив
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount; // return not index but element
    }

}

// Private constructor to prevent external attempts at making instances
class Singleton {
    // Static member so prevent multiple instances
    static instance = null;

    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        console.log('Singleton is Instantiated.');
        Singleton.instance = this;
    }
    // Creates singleton instance
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // getAll creates array with food items
    getAll() {
        return [
            { id: "1", name: "Bread" },
            { id: "2", name: "Milk" },
            { id: "3", name: "Fruit" },
            { id: "4", name: "Vegetables" },
            { id: "5", name: "Meat" }
        ];

    }
    
}

const foods = Singleton.getInstance();

module.exports = Singleton.getInstance();
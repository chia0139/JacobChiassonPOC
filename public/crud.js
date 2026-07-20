const foodStore = require('../foodSingleton');
const foods = foodStore.getAll();

// Read
exports.getFood = (req, res) => {
    const food = foods.find(f => f.id === req.params.id);
    if (!food) return res.status(404).json({ error: 'Food id not found' });
    res.json(food);
};

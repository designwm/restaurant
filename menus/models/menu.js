import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    category: {
        type: String,
        required: true
    },

    subcategory: {
        type: String
    },

    foodType: {
        type: String,
        enum: ['Veg', 'Non-Veg', 'Vegan'],
        required: true
    },

    description: {
        type: String
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    discountPrice: {
        type: Number,
        min: 0
    },

    image: {
        type: String
    },

    preparationTime: {
        type: Number
    },

    calories: {
        type: Number
    },

    spicyLevel: {
        type: String,
        enum: ['Mild', 'Medium', 'Hot']
    },

    ingredients: [{
        type: String
    }],

    isAvailable: {
        type: Boolean,
        default: true
    },

    isFeatured: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
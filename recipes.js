const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


const recipeSchema = new Schema({
    title:{
	type:String,
	required: true,
	unique:true,
    },
    
    level:{
	type:String,
	enum:['Easy Peasy' , 'Amateur Chef' , 'UltraPro Chef'],
	
    },
    
    ingredients:{
	type:Array
    },
    cuisine:{
	type:String,
	required:true,
    },

    dishType:{
	type:String,
	enum:['Breakfast' , 'Dish' , 'Snack' , 'Drink' , 'Dessert' , 'Other']
    },

    image:{
	type:string,
	default:'https://images.media-allrecipes.com/images/75131.jpg.'
    },

    duration:{
	type:Number,
	min:0
    },

    creator:{
	type:String
    },

    created:{
	type:Date,
	default:Date.now,
    }
    
})


const Recipe = mongoose.model('Recipe' , recipeSchema);
module.exports = Recipe;


Recipe.create({title: 'Tlalpenio Soup'. level:'Easy Peasy' , ingredients:['chicken' , 'tomatoe sauce' , 'sauce'] , cuisine:'Mexican',dishType:'Dish', duration:30, cretor:'Daddy Rafa' })
    .then(()=>{
	console.log(title)
    })
    

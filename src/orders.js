const orders = [{
      "name": "Banana Split",
      "temp": "frozen",
      "shelfLife": 20,
      "decayRate": 0.63
   },
   {
      "name": "McFlury",
      "temp": "frozen",
      "shelfLife": 375,
      "decayRate": 0.4
   },
   {
      "name": "Acai Bowl",
      "temp": "cold",
      "shelfLife": 249,
      "decayRate": 0.3
   },
   {
      "name": "Yogurt",
      "temp": "cold",
      "shelfLife": 263,
      "decayRate": 0.37
   },
   {
      "name": "Chocolate Gelato",
      "temp": "frozen",
      "shelfLife": 300,
      "decayRate": 0.61
   },
   {
      "name": "Cobb Salad",
      "temp": "cold",
      "shelfLife": 269,
      "decayRate": 0.19
   },
   {
      "name": "Cottage Cheese",
      "temp": "cold",
      "shelfLife": 251,
      "decayRate": 0.22
   },
   {
      "name": "Coke",
      "temp": "cold",
      "shelfLife": 240,
      "decayRate": 0.25
   },
   {
      "name": "Snow Cone",
      "temp": "frozen",
      "shelfLife": 50,
      "decayRate": 0.86
   },
   {
      "name": "Pad See Ew",
      "temp": "hot",
      "shelfLife": 210,
      "decayRate": 0.72
   },
   {
      "name": "Chunky Monkey",
      "temp": "frozen",
      "shelfLife": 210,
      "decayRate": 0.54
   },
   {
      "name": "Beef Stew",
      "temp": "hot",
      "shelfLife": 206,
      "decayRate": 0.69
   },
   {
      "name": "Cheese",
      "temp": "cold",
      "shelfLife": 255,
      "decayRate": 0.2
   },
   {
      "name": "Spinach Omelet",
      "temp": "hot",
      "shelfLife": 230,
      "decayRate": 0.63
   },
   {
      "name": "Beef Hash",
      "temp": "hot",
      "shelfLife": 30,
      "decayRate": 0.74
   },
   {
      "name": "Pork Chop",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.7
   },
   {
      "name": "Kale Salad",
      "temp": "cold",
      "shelfLife": 250,
      "decayRate": 0.25
   },
   {
      "name": "Fresh Fruit",
      "temp": "cold",
      "shelfLife": 252,
      "decayRate": 0.29
   },
   {
      "name": "Cranberry Salad",
      "temp": "cold",
      "shelfLife": 245,
      "decayRate": 0.21
   },
   {
      "name": "Fudge Ice Cream Cake",
      "temp": "frozen",
      "shelfLife": 415,
      "decayRate": 0.49
   },
   {
      "name": "Mint Chocolate Ice Cream",
      "temp": "frozen",
      "shelfLife": 290,
      "decayRate": 0.5
   },
   {
      "name": "Vegan Pizza",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.7
   },
   {
      "name": "Orange Chicken",
      "temp": "hot",
      "shelfLife": 215,
      "decayRate": 0.67
   },
   {
      "name": "MeatLoaf",
      "temp": "hot",
      "shelfLife": 213,
      "decayRate": 0.5
   },
   {
      "name": "Milk",
      "temp": "cold",
      "shelfLife": 252,
      "decayRate": 0.15
   },
   {
      "name": "Pastrami Sandwich",
      "temp": "hot",
      "shelfLife": 190,
      "decayRate": 0.8
   },
   {
      "name": "Arugula",
      "temp": "cold",
      "shelfLife": 251,
      "decayRate": 0.27
   },
   {
      "name": "Pickles",
      "temp": "cold",
      "shelfLife": 259,
      "decayRate": 0.29
   },
   {
      "name": "Chicken",
      "temp": "hot",
      "shelfLife": 201,
      "decayRate": 0.74
   },
   {
      "name": "Cookie Dough",
      "temp": "frozen",
      "shelfLife": 600,
      "decayRate": 0.15
   },
   {
      "name": "Hamburger",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.63
   },
   {
      "name": "French Fries",
      "temp": "hot",
      "shelfLife": 220,
      "decayRate": 0.67
   },
   {
      "name": "Ice",
      "temp": "frozen",
      "shelfLife": 100,
      "decayRate": 0.9
   },
   {
      "name": "Carne Asada",
      "temp": "hot",
      "shelfLife": 222,
      "decayRate": 0.71
   },
   {
      "name": "Sherbet",
      "temp": "frozen",
      "shelfLife": 175,
      "decayRate": 0.6
   },
   {
      "name": "Orange Sorbet",
      "temp": "frozen",
      "shelfLife": 165,
      "decayRate": 0.65
   },
   {
      "name": "Frosty",
      "temp": "frozen",
      "shelfLife": 135,
      "decayRate": 0.52
   },
   {
      "name": "Fresh Bread",
      "temp": "hot",
      "shelfLife": 201,
      "decayRate": 0.9
   },
   {
      "name": "Burrito",
      "temp": "hot",
      "shelfLife": 202,
      "decayRate": 0.72
   },
   {
      "name": "Icy",
      "temp": "frozen",
      "shelfLife": 230,
      "decayRate": 0.6
   },
   {
      "name": "Push Pop",
      "temp": "frozen",
      "shelfLife": 220,
      "decayRate": 0.5
   },
   {
      "name": "Pasta",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.7
   },
   {
      "name": "Chicken Nuggets",
      "temp": "hot",
      "shelfLife": 205,
      "decayRate": 0.71
   },
   {
      "name": "Ice Cream Sandwich",
      "temp": "frozen",
      "shelfLife": 250,
      "decayRate": 0.5
   },
   {
      "name": "Taco",
      "temp": "hot",
      "shelfLife": 198,
      "decayRate": 0.38
   },
   {
      "name": "Tomato Soup",
      "temp": "hot",
      "shelfLife": 243,
      "decayRate": 0.71
   },
   {
      "name": "Vanilla Ice Cream",
      "temp": "frozen",
      "shelfLife": 310,
      "decayRate": 0.35
   },
   {
      "name": "Poppers",
      "temp": "hot",
      "shelfLife": 204,
      "decayRate": 0.78
   },
   {
      "name": "Popsicle",
      "temp": "frozen",
      "shelfLife": 345,
      "decayRate": 0.75
   },
   {
      "name": "Strawberries",
      "temp": "frozen",
      "shelfLife": 500,
      "decayRate": 0.05
   },
   {
      "name": "Brown Rice",
      "temp": "hot",
      "shelfLife": 224,
      "decayRate": 0.64
   },
   {
      "name": "Cheese Pizza",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.76
   },
   {
      "name": "Pressed Juice",
      "temp": "cold",
      "shelfLife": 250,
      "decayRate": 0.2
   },
   {
      "name": "Coconut",
      "temp": "cold",
      "shelfLife": 254,
      "decayRate": 0.22
   },
   {
      "name": "Onion Rings",
      "temp": "hot",
      "shelfLife": 201,
      "decayRate": 0.7
   },
   {
      "name": "Fish Tacos",
      "temp": "hot",
      "shelfLife": 207,
      "decayRate": 0.74
   },
   {
      "name": "Pot Stickers",
      "temp": "hot",
      "shelfLife": 204,
      "decayRate": 0.73
   },
   {
      "name": "Kombucha",
      "temp": "cold",
      "shelfLife": 246,
      "decayRate": 0.19
   },
   {
      "name": "Mixed Greens",
      "temp": "cold",
      "shelfLife": 252,
      "decayRate": 0.26
   },
   {
      "name": "Sushi",
      "temp": "cold",
      "shelfLife": 251,
      "decayRate": 0.25
   },
   {
      "name": "Apples",
      "temp": "cold",
      "shelfLife": 244,
      "decayRate": 0.23
   },
   {
      "name": "Kebab",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.54
   },
   {
      "name": "Mac & Cheese",
      "temp": "hot",
      "shelfLife": 205,
      "decayRate": 0.51
   },
   {
      "name": "Corn Dog",
      "temp": "hot",
      "shelfLife": 203,
      "decayRate": 0.3
   },
   {
      "name": "Grilled Corn Salad",
      "temp": "cold",
      "shelfLife": 305,
      "decayRate": 0.1
   },
   {
      "name": "Pistachio Ice Cream",
      "temp": "frozen",
      "shelfLife": 175,
      "decayRate": 0.4
   },
   {
      "name": "Strawberyy Banana Split",
      "temp": "frozen",
      "shelfLife": 24,
      "decayRate": 0.60
   },
   {
      "name": "McFlury",
      "temp": "frozen",
      "shelfLife": 372,
      "decayRate": 0.45
   },
   {
      "name": "Acai Bowl",
      "temp": "cold",
      "shelfLife": 240,
      "decayRate": 0.9
   },
   {
      "name": "Yogurt",
      "temp": "cold",
      "shelfLife": 400,
      "decayRate": 0.67
   },
   {
      "name": "Chocolate Gelato",
      "temp": "frozen",
      "shelfLife": 308,
      "decayRate": 0.67
   },
   {
      "name": "Cobb Salad",
      "temp": "cold",
      "shelfLife": 263,
      "decayRate": 0.2
   },
   {
      "name": "Cottage Cheese",
      "temp": "cold",
      "shelfLife": 255,
      "decayRate": 0.26
   },
   {
      "name": "Coke",
      "temp": "cold",
      "shelfLife": 240,
      "decayRate": 0.25
   },
   {
      "name": "Snow Cone",
      "temp": "frozen",
      "shelfLife": 50,
      "decayRate": 0.86
   },
   {
      "name": "Pad See Ew",
      "temp": "hot",
      "shelfLife": 210,
      "decayRate": 0.72
   },
   {
      "name": "Chunky Monkey",
      "temp": "frozen",
      "shelfLife": 210,
      "decayRate": 0.54
   },
   {
      "name": "Beef Stew",
      "temp": "hot",
      "shelfLife": 206,
      "decayRate": 0.69
   },
   {
      "name": "Cheese",
      "temp": "cold",
      "shelfLife": 255,
      "decayRate": 0.2
   },
   {
      "name": "Spinach Omelet",
      "temp": "hot",
      "shelfLife": 230,
      "decayRate": 0.63
   },
   {
      "name": "Beef Hash",
      "temp": "hot",
      "shelfLife": 30,
      "decayRate": 0.74
   },
   {
      "name": "Pork Chop",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.7
   },
   {
      "name": "Kale Salad",
      "temp": "cold",
      "shelfLife": 250,
      "decayRate": 0.25
   },
   {
      "name": "Fresh Fruit",
      "temp": "cold",
      "shelfLife": 252,
      "decayRate": 0.29
   },
   {
      "name": "Cranberry Salad",
      "temp": "cold",
      "shelfLife": 245,
      "decayRate": 0.21
   },
   {
      "name": "Fudge Ice Cream Cake",
      "temp": "frozen",
      "shelfLife": 415,
      "decayRate": 0.49
   },
   {
      "name": "Mint Chocolate Ice Cream",
      "temp": "frozen",
      "shelfLife": 290,
      "decayRate": 0.5
   },
   {
      "name": "Vegan Pizza",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.7
   },
   {
      "name": "Orange Chicken",
      "temp": "hot",
      "shelfLife": 215,
      "decayRate": 0.67
   },
   {
      "name": "MeatLoaf",
      "temp": "hot",
      "shelfLife": 213,
      "decayRate": 0.5
   },
   {
      "name": "Milk",
      "temp": "cold",
      "shelfLife": 252,
      "decayRate": 0.15
   },
   {
      "name": "Pastrami Sandwich",
      "temp": "hot",
      "shelfLife": 190,
      "decayRate": 0.8
   },
   {
      "name": "Arugula",
      "temp": "cold",
      "shelfLife": 251,
      "decayRate": 0.27
   },
   {
      "name": "Pickles",
      "temp": "cold",
      "shelfLife": 259,
      "decayRate": 0.29
   },
   {
      "name": "Chicken",
      "temp": "hot",
      "shelfLife": 201,
      "decayRate": 0.74
   },
   {
      "name": "Cookie Dough",
      "temp": "frozen",
      "shelfLife": 600,
      "decayRate": 0.15
   },
   {
      "name": "Hamburger",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.63
   },
   {
      "name": "French Fries",
      "temp": "hot",
      "shelfLife": 220,
      "decayRate": 0.67
   },
   {
      "name": "Ice",
      "temp": "frozen",
      "shelfLife": 100,
      "decayRate": 0.9
   },
   {
      "name": "Carne Asada",
      "temp": "hot",
      "shelfLife": 222,
      "decayRate": 0.71
   },
   {
      "name": "Sherbet",
      "temp": "frozen",
      "shelfLife": 175,
      "decayRate": 0.6
   },
   {
      "name": "Orange Sorbet",
      "temp": "frozen",
      "shelfLife": 165,
      "decayRate": 0.65
   },
   {
      "name": "Frosty",
      "temp": "frozen",
      "shelfLife": 135,
      "decayRate": 0.52
   },
   {
      "name": "Fresh Bread",
      "temp": "hot",
      "shelfLife": 201,
      "decayRate": 0.9
   },
   {
      "name": "Burrito",
      "temp": "hot",
      "shelfLife": 202,
      "decayRate": 0.72
   },
   {
      "name": "Icy",
      "temp": "frozen",
      "shelfLife": 230,
      "decayRate": 0.6
   },
   {
      "name": "Push Pop",
      "temp": "frozen",
      "shelfLife": 220,
      "decayRate": 0.5
   },
   {
      "name": "Pasta",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.7
   },
   {
      "name": "Chicken Nuggets",
      "temp": "hot",
      "shelfLife": 205,
      "decayRate": 0.71
   },
   {
      "name": "Ice Cream Sandwich",
      "temp": "frozen",
      "shelfLife": 250,
      "decayRate": 0.5
   },
   {
      "name": "Taco",
      "temp": "hot",
      "shelfLife": 198,
      "decayRate": 0.38
   },
   {
      "name": "Tomato Soup",
      "temp": "hot",
      "shelfLife": 243,
      "decayRate": 0.71
   },
   {
      "name": "Vanilla Ice Cream",
      "temp": "frozen",
      "shelfLife": 310,
      "decayRate": 0.35
   },
   {
      "name": "Poppers",
      "temp": "hot",
      "shelfLife": 204,
      "decayRate": 0.78
   },
   {
      "name": "Popsicle",
      "temp": "frozen",
      "shelfLife": 345,
      "decayRate": 0.75
   },
   {
      "name": "Strawberries",
      "temp": "frozen",
      "shelfLife": 500,
      "decayRate": 0.05
   },
   {
      "name": "Brown Rice",
      "temp": "hot",
      "shelfLife": 224,
      "decayRate": 0.64
   },
   {
      "name": "Cheese Pizza",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.76
   },
   {
      "name": "Pressed Juice",
      "temp": "cold",
      "shelfLife": 250,
      "decayRate": 0.2
   },
   {
      "name": "Coconut",
      "temp": "cold",
      "shelfLife": 254,
      "decayRate": 0.22
   },
   {
      "name": "Onion Rings",
      "temp": "hot",
      "shelfLife": 201,
      "decayRate": 0.7
   },
   {
      "name": "Fish Tacos",
      "temp": "hot",
      "shelfLife": 207,
      "decayRate": 0.74
   },
   {
      "name": "Pot Stickers",
      "temp": "hot",
      "shelfLife": 204,
      "decayRate": 0.73
   },
   {
      "name": "Kombucha",
      "temp": "cold",
      "shelfLife": 246,
      "decayRate": 0.19
   },
   {
      "name": "Mixed Greens",
      "temp": "cold",
      "shelfLife": 252,
      "decayRate": 0.26
   },
   {
      "name": "Sushi",
      "temp": "cold",
      "shelfLife": 251,
      "decayRate": 0.25
   },
   {
      "name": "Apples",
      "temp": "cold",
      "shelfLife": 244,
      "decayRate": 0.23
   },
   {
      "name": "Kebab",
      "temp": "hot",
      "shelfLife": 200,
      "decayRate": 0.54
   },
   {
      "name": "Mac & Cheese",
      "temp": "hot",
      "shelfLife": 205,
      "decayRate": 0.51
   },
   {
      "name": "Corn Dog",
      "temp": "hot",
      "shelfLife": 203,
      "decayRate": 0.3
   },
   {
      "name": "Grilled Corn Salad",
      "temp": "cold",
      "shelfLife": 305,
      "decayRate": 0.1
   },
   {
      "name": "Pistachio Ice Cream",
      "temp": "frozen",
      "shelfLife": 175,
      "decayRate": 0.4
   }
]

export default orders
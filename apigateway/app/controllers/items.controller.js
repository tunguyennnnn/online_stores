const Promise = require('bluebird')

const items = [
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'BUY_AND_SELL',
    subCategory: 'Books'
  },
  {
    imageUrl: 'https://static.pexels.com/photos/2255/black-and-white-city-houses-skyline.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'BUY_AND_SELL',
    subCategory: 'Clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'RENT',
    subCategory: 'clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'RENT',
    subCategory: 'clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'RENT',
    subCategory: 'clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'RENT',
    subCategory: 'clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'RENT',
    subCategory: 'clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'RENT',
    subCategory: 'clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'RENT',
    subCategory: 'clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'RENT',
    subCategory: 'clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'rent',
    subCategory: 'clothing'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My house',
    description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
    price: 3000000000,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner',
    category: 'rent',
    subCategory: 'clothing'
  }
]

function get (req, res, next) {
  const {userId = '1', email} = res.decoded
  console.log(res.pExec)
  res.json({userId, email, items})
}

function getUserItems (req, res, next) {

}

function create (req, res, next) {
  const {decoded} = res
  const {title, imageUrl, description, price, category} = req.body
  res.json({itemId: 1, title, imageUrl, description, price, category})
}

function update (req, res, next) {
  res.status(200)
}

module.exports = {get, create, update, getUserItems}

const settings = require('../../config/')
const {superSecret} = settings.auth
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const Ad = require('../models/ads.models')
const Promotion = require('../models/promotion.model')
const Plan = require('../models/plan.model')
const Promise = require('bluebird')

function createUser (req, res, next) {
  const {email, password, firstName, lastName, isAdmin, province, city} = req.body
  console.log('reachhhhhhhhhhh')
  User.create({exec: res.pExec, email, password, firstName, lastName, province, city, isAdmin})
    .then(user => {
      console.log(user)
      const userId = user.id
      const apiToken = jwt.sign({userId, email, password, isAdmin}, superSecret, {expiresIn: 60 * 60 * 24})
      res.json({userId, firstName, lastName, email, apiToken})
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

function getAds (req, res, next) {
  const {decoded} = res
  console.log(res)
  const {userId} = decoded
  User.getAllMyAds({exec: res.pExec, userId})
  .then(r => {
    if (r) {
      console.log(r)
      res.json({info: r})
    } else res.status(404).send()
  })
  .catch(err => {
    console.log(err)
    res.status(500).send()
  })
}


function createAd (req, res, next) {
  const {decoded} = res
  console.log(res)
  const {title, imageUrl, description, price, category} = req.body
  console.log(title)
  // const {title, imageUrl, description, price, category} = data
  // console.log()
  User.createAd({exec: res.pExec, title, imageUrl, description, price, category})
  .then(r => {
    if (r) {
      console.log(`successfully created an ad for ${userId}`)
      res.status(200).send()
    } else res.status(400).send()
  })
  .catch(err => {
    console.log(err)
    res.status(500).send()
  })
}

const mock = {
  userId: 1,
  email: 'tunguyenuni@gmail.com',
  firstName: 'Tu',
  lastName: 'Nguyen',
  items: [
    {
      itemId: '100',
      price: 30,
      imageUrl: 'https://i.ebayimg.com/00/s/MjM2WDMxNQ==/z/n1sAAOSwYIxX89W6/$_57.JPG',
      title: 'Motocycle',
      description: 'It is free'
    },
    {
      itemId: '101',
      price: 30,
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My House',
      description: 'It is far'
    },
    {
      itemId: '102',
      price: 20,
      imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
      title: 'My Wife',
      description: 'She is invaluable'
    }
  ]
}

const adminMock = {
  userId: 1,
  email: 'tunguyenuni@gmail.com',
  firstName: 'Tu',
  lastName: 'Nguyen',
  isAdmin: true,
  items: [
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
  ],
  plans: [
    {
      planId: '1',
      title: 'First',
      price: '20.0',
      duration: 14,
      available: true
    },
    {
      planId: '1',
      title: 'First',
      price: '20.0',
      duration: 14,
      available: false
    }
  ],
  promotions: [
    {
      promotionId: '1',
      title: 'First',
      price: '20.0',
      duration: 5,
      available: true
    },
    {
      promotionId: '1',
      title: 'First',
      price: '20.0',
      duration: 5,
      available: false
    }
  ],
}

function show (req, res, next) {
  const {decoded} = res
  const exec = res.pExec
  const {userId, isAdmin, email} = decoded
  const promises = [Ad.getAds({exec, isAdmin, userId}), Promotion.getSet({exec, isAdmin}), Plan.getSet({exec, isAdmin})]
  Promise.all(promises)
    .then(data => {
      console.log(data)
      const [items, promotions, plans] = data
      res.json({userId, email, isAdmin, items, promotions, plans})
    })
    .catch(err => {
      console.log(err)
      res.status(500).send()
    })
}

module.exports = {createUser, show, getAds, createAd}

const Promise = require('bluebird')
const _ = require('lodash')
const settings = require('../../config/')
const {superSecret} = settings.auth
const jwt = require('jsonwebtoken')

function createUser (req, res, next) {
  const {email, password, firstName, lastName} = req.body
  const apiToken = jwt.sign({email, password}, superSecret, {expiresIn: 60 * 60 * 24})
  res.json({apiToken, expiresIn: 60 * 60 * 24, userId: '1'})
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

function show (req, res, next) {
  const {decoded} = res
  res.json({info: mock})
}

module.exports = {createUser, show}

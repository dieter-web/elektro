require('use-strict')
const path = require('path')
const express = require('express')
const router = express.Router()

// const { routerGet } = require(path.resolve('src/js/routerGet.js'))
const { frouter } = require(path.resolve('src/js/frouter.js'))

const vF = 'pages/Formulare'
const lF = 'layouts/Formulare'

/** SECTION Formulare */
const str1 = '/Formulare'

/** NOTE Kennzeichnung */
{
  const str2 = '/Kennzeichnung'
  frouter(router, vF, lF, str1, str2)
}

/** !SECTION Formulare */

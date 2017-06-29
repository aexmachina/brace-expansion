#!/usr/bin/env node
const getStdin = require('get-stdin')
const expand = require('./index')

getStdin().then(input => {
  expand(input)
    .map(keyword => console.log(keyword))
}).catch(console.error)

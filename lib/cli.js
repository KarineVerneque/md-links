#! /usr/bin/env node
const mdLinks = require("./index.js");

const path = process.argv[2]

mdLinks(path)
  .then((valorPassadoPeloResolve) => {
    console.log(valorPassadoPeloResolve)
  })
  .catch(console.error);
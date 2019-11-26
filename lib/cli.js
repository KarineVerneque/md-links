const mdLinks = require("./index.js");

// const path = require('path');

mdLinks("./README.md")
// mdLinks(path)
  .then((valorPassadoPeloResolve) => {
    console.log(valorPassadoPeloResolve)
  })
  .catch(console.error);

  //#!/usr/bin/env node
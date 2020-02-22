#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

const argv = require('yargs').argv
const { readFileSync } = require('fs')
const { join } = require('path')

const lerEImprimirConteudo = nomeArquivo => {
  console.log(readFileSync(join(__dirname, `./conteudo/${nomeArquivo}`), 'utf8'))
}

if (argv.gitconfig) {
  console.log('teste')
} else {
  lerEImprimirConteudo('cartao')
}

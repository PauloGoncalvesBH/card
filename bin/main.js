#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

const { readFileSync } = require('fs')
const { join } = require('path')

const lerEImprimirConteudo = nomeArquivo => {
  console.log(readFileSync(join(__dirname, `./conteudo/${nomeArquivo}.txt`), 'utf8'))
}

switch (process.argv[2]) {
  case undefined:
    lerEImprimirConteudo('cartao')
    break

  case '-gc':
  case '--gitconfig':
    lerEImprimirConteudo('gitconfig')
    break

  case '-vs':
  case '--vscode':
    lerEImprimirConteudo('vscode')
    break

  default:
    lerEImprimirConteudo('ajuda')
    break
}

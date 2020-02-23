'use strict'

const boxen = require('boxen')
const { writeFileSync } = require('fs')
const { join } = require('path')

const { opcoesBoxen } = require('./constants')

const criarArquivo = ({ nomeArquivo, conteudo }) => {
  const diretorio = join(__dirname, `../../bin/conteudo/${nomeArquivo}.txt`)
  const arquivo = boxen(conteudo, opcoesBoxen)
  writeFileSync(diretorio, arquivo)
}

const quantidadeDeEspaco = numeroDeEspacos => {
  let string = ''
  for (let index = 0; index < numeroDeEspacos; index++) {
    string = `${string}\xa0`
  }
  return string
}

module.exports = {
  criarArquivo,
  quantidadeDeEspaco
}

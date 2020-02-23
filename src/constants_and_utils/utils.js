'use strict'

const boxen = require('boxen')
const { writeFileSync } = require('fs')
const { join } = require('path')

const opcoesBoxen = require('./opcoesBoxen')

module.exports = ({ nomeArquivo, conteudo }) => {
  const diretorio = join(__dirname, `../../bin/conteudo/${nomeArquivo}.txt`)
  const arquivo = boxen(conteudo, opcoesBoxen)
  writeFileSync(diretorio, arquivo)
}

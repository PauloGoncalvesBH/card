'use strict'

const boxen = require('boxen')
const chalk = require('chalk')
const { writeFileSync } = require('fs')
const { join } = require('path')

const { espacamentoDoTitulo, novaLinha, opcoesBoxen } = require('./constants')

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

const titulo = titulo => {
  return quantidadeDeEspaco(espacamentoDoTitulo) + chalk.white.bold(titulo) + novaLinha + novaLinha
}

module.exports = {
  criarArquivo,
  quantidadeDeEspaco,
  titulo
}

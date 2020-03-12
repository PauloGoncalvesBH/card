'use strict'

const boxen = require('boxen')
const chalk = require('chalk')
const { writeFileSync } = require('fs')
const { join } = require('path')

const { cinza, espacamentoDoTitulo, espacamentoDoSubtitulo, novaLinha, opcoesBoxen } = require('./constants')

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

const chalkCinza = text => {
  return chalk.rgb(cinza.red, cinza.green, cinza.blue)(text)
}

const titulo = ({ titulo, subtitulo = false }) => {
  const tituloFormatado = quantidadeDeEspaco(espacamentoDoTitulo) + chalk.white.bold(titulo) + novaLinha
  const subtituloFormatado = subtitulo ? quantidadeDeEspaco(espacamentoDoSubtitulo) + chalk.italic.rgb(cinza.red, cinza.green, cinza.blue)(subtitulo) + novaLinha : ''
  return tituloFormatado + subtituloFormatado + novaLinha
}

module.exports = {
  chalkCinza,
  criarArquivo,
  quantidadeDeEspaco,
  titulo
}

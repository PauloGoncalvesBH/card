'use strict'

const chalk = require('chalk')

const { novaLinha } = require('../constants_and_utils/constants')
const { chalkCinza, titulo, quantidadeDeEspaco } = require('../constants_and_utils/utils')

const valores = texto => {
  return `  ${chalkCinza(texto)}${novaLinha}`
}

const conteudo =
  titulo({ titulo: 'Paulo Gonçalves' }) +
  quantidadeDeEspaco(13) + chalk.white('Quality Assurance') + novaLinha +
  novaLinha +
  chalk.blue.bold('     Email:') + valores('paulorochag@hotmail.com') +
  chalk.green.bold('    GitHub:') + valores('https://github.com/paulogoncalvesbh') +
  chalk.red.bold('  LinkedIn:') + valores('https://linkedin.com/in/paulo-goncalves') +
  chalk.yellow.bold('    Dev.to:') + valores('https://dev.to/paulogoncalvesbh') +
  chalk.cyan.bold('   Twitter:') + valores('https://twitter.com/paulorgoncalves') +
  novaLinha +
  quantidadeDeEspaco(13) + chalk.white('npx paulogoncalves [-h | --help]')

module.exports = {
  conteudo,
  nomeArquivo: 'cartao'
}

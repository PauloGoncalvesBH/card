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
  chalk.green.bold('    GitHub:') + valores('github.com/paulogoncalvesbh') +
  chalk.cyan.bold('  LinkedIn:') + valores('linkedin.com/in/paulo-goncalves') +
  chalk.yellow.bold('    Dev.to:') + valores('dev.to/paulogoncalvesbh') +
  novaLinha +
  chalk.red.bold('       NPM:') + valores('npmjs.com/~paulogoncalves') +
  chalk.red.bold('          ~') + chalk.white('  serverest (Author)') + novaLinha +
  chalk.red.bold('          ~') + chalk.white('  protractor-helper (Maintainer)') + novaLinha +
  novaLinha +
  quantidadeDeEspaco(13) + chalk.white.bold('npx paulogoncalves [-h | --help]')

module.exports = {
  conteudo,
  nomeArquivo: 'cartao'
}

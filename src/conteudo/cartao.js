'use strict'

const chalk = require('chalk')

const dados = {
  nome: '             ' + chalk.white.bold('Paulo Gonçalves'),
  trabalho: chalk.white('             Quality Assurance'),
  email: chalk.rgb(110, 110, 110)('paulorochag@hotmail.com'),
  github: chalk.rgb(110, 110, 110)('https://github.com/paulogoncalvesbh'),
  linkedin: chalk.rgb(110, 110, 110)('https://linkedin.com/in/paulo-goncalves'),
  devto: chalk.rgb(110, 110, 110)('https://dev.to/paulogoncalvesbh'),
  twitter: chalk.rgb(110, 110, 110)('https://twitter.com/paulorgoncalves'),
  npx: chalk.white('             npx paulogoncalves [-h | --help]'),
  labelEmail: chalk.blue.bold('     Email:'),
  labelGitHub: chalk.green.bold('    GitHub:'),
  labelLinkedIn: chalk.red.bold('  LinkedIn:'),
  labelDevto: chalk.yellow.bold('    Dev.to:'),
  labelTwitter: chalk.cyan.bold('   Twitter:'),
}

const novaLinha = '\n'
const heading = `${dados.nome}`
const working = `${dados.trabalho}`
const emailing = `${dados.labelEmail}  ${dados.email}`
const githubing = `${dados.labelGitHub}  ${dados.github}`
const linkedining = `${dados.labelLinkedIn}  ${dados.linkedin}`
const devtoing = `${dados.labelDevto}  ${dados.devto}`
const twittering = `${dados.labelTwitter}  ${dados.twitter}`
const carding = `${dados.npx}`

const conteudo = heading + novaLinha +
               novaLinha +
               working + novaLinha +
               novaLinha +
               emailing + novaLinha +
               githubing + novaLinha +
               linkedining + novaLinha +
               devtoing + novaLinha +
               twittering + novaLinha +
               novaLinha +
               carding

const nomeArquivo = 'cartao'

module.exports = {
  conteudo,
  nomeArquivo
}

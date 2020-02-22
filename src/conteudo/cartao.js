'use strict'

const chalk = require('chalk')

const dados = {
  nome: '             ' + chalk.white.bold('Paulo Gonçalves'),
  trabalho: chalk.white('Quality Assurance'),
  github: chalk.rgb(150, 150, 150)('https://github.com/paulogoncalvesbh'),
  linkedin: chalk.rgb(150, 150, 150)('https://linkedin.com/in/paulo-goncalves'),
  devto: chalk.rgb(150, 150, 150)('https://dev.to/paulogoncalvesbh'),
  twitter: chalk.rgb(150, 150, 150)('https://twitter.com/paulorgoncalves'),
  npx: chalk.white('npx paulogoncalves'),
  labelTrabalho: chalk.white.bold('      Work:'),
  labelGitHub: chalk.green.bold('    GitHub:'),
  labelLinkedIn: chalk.red.bold('  LinkedIn:'),
  labelDevto: chalk.yellow.bold('    Dev.to:'),
  labelTwitter: chalk.cyan.bold('   Twitter:'),
  labelNpx: chalk.white('      Card:')
}

const newline = '\n'
const heading = `${dados.nome}`
const working = `${dados.labelTrabalho}  ${dados.trabalho}`
const githubing = `${dados.labelGitHub}  ${dados.github}`
const linkedining = `${dados.labelLinkedIn}  ${dados.linkedin}`
const devtoing = `${dados.labelDevto}  ${dados.devto}`
const twittering = `${dados.labelTwitter}  ${dados.twitter}`
const carding = `${dados.labelNpx}  ${dados.npx}`

const conteudo = heading + newline +
               newline +
               working + newline +
               newline +
               githubing + newline +
               linkedining + newline +
               devtoing + newline +
               twittering + newline +
               newline +
               carding

const nomeArquivo = 'cartao'

module.exports = {
  conteudo,
  nomeArquivo
}

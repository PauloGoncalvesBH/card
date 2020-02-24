'use strict'

const chalk = require('chalk')

const { cinza, novaLinha } = require('../constants_and_utils/constants')
const { titulo } = require('../constants_and_utils/utils')

const detalheDoComando = (explicacao, adicionarNovaLinha = true) => {
  const detalheDoComando = chalk.rgb(cinza.red, cinza.green, cinza.blue).italic(explicacao)
  return (adicionarNovaLinha) ? `${detalheDoComando}${novaLinha}` : detalheDoComando
}

const conteudo =
  titulo('Ajuda') +
  `Uso: npx paulogoncalves [opção]${novaLinha}` +
  novaLinha +
  `Opções:${novaLinha}` +
  `    -h, --help           ${detalheDoComando('Ajuda')}` +
  `    -gc, --gitconfig     ${detalheDoComando('Gitconfig.ini', false)}`

module.exports = {
  conteudo,
  nomeArquivo: 'ajuda'
}

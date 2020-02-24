'use strict'

const chalk = require('chalk')

const { cinza, novaLinha } = require('../constants_and_utils/constants')
const { titulo, quantidadeDeEspaco } = require('../constants_and_utils/utils')

const topico = titulo => {
  return chalk.blue.bold(`[${titulo}]${novaLinha}`)
}

const subtopico = (chave, valor, adicionarNovaLinha = true) => {
  const subtopico = `${quantidadeDeEspaco(4)}${chave} = ${chalk.rgb(cinza.red, cinza.green, cinza.blue)(valor)}`
  return (adicionarNovaLinha) ? `${subtopico}${novaLinha}` : subtopico
}

const conteudo =
  titulo('Gitconfig.ini') +
  topico('user') +
  subtopico('email', 'paulorochag@hotmail.com') +
  subtopico('name', 'Paulo Gonçalves') +
  topico('alias') +
  subtopico('st', 'status --short --branch') +
  subtopico('lg', 'log --oneline --graph --decorate --all') +
  topico('push') +
  subtopico('default', 'upstream') +
  subtopico('followTags', 'true') +
  topico('tag') +
  subtopico('sort', 'version:refname') +
  topico('color "branch"') +
  subtopico('upstream', 'cyan') +
  topico('core') +
  subtopico('autocrlf', 'false', false)

module.exports = {
  conteudo,
  nomeArquivo: 'gitconfig'
}

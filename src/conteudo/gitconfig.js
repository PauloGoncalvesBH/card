'use strict'

const chalk = require('chalk')

const { novaLinha } = require('../constants_and_utils/constants')
const { chalkCinza, titulo, quantidadeDeEspaco } = require('../constants_and_utils/utils')

const topico = titulo => {
  return chalk.blue.bold(`[${titulo}]${novaLinha}`)
}

const subtopico = (chave, valor, adicionarNovaLinha = true) => {
  const subtopico = `${quantidadeDeEspaco(4)}${chave} = ${chalkCinza(valor)}`
  return (adicionarNovaLinha) ? `${subtopico}${novaLinha}` : subtopico
}

const conteudo =
  titulo({ titulo: 'Gitconfig.ini' }) +
  topico('user') +
  subtopico('email', 'paulorochag@hotmail.com') +
  subtopico('name', 'Paulo Gonçalves') +
  topico('alias') +
  subtopico('st', 'status --short --branch') +
  subtopico('lg', 'log --oneline --graph --decorate') +
  subtopico('lg-diff-origin', 'lg origin/main..HEAD') +
  subtopico('lg-diff-origin-master', 'lg origin/master..HEAD') +
  topico('push') +
  subtopico('default', 'upstream') +
  subtopico('followTags', 'true') +
  topico('tag') +
  subtopico('sort', 'version:refname') +
  topico('color "branch"') +
  subtopico('upstream', 'cyan') +
  topico('core') +
  subtopico('autocrlf', 'false') +
  subtopico('editor', 'vim') +
  topico('init') +
  subtopico('defaultBranch', 'main', false)

module.exports = {
  conteudo,
  nomeArquivo: 'gitconfig'
}

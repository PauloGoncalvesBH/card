'use strict'

const chalk = require('chalk')

const { cinza, novaLinha } = require('../constants_and_utils/constants')

const dados = {
  titulo: '              ' + chalk.white.bold('Ajuda'),
  uso: 'Uso: npx paulogoncalves [opção]',
  opcao: 'Opções:',
  ajuda: '    -h, --help',
  mensagemAjuda: chalk.rgb(cinza.red, cinza.green, cinza.blue).italic('           Ajuda'),
  gitconfig: '    -gc, --gitconfig',
  mensagemGitconfig: chalk.rgb(cinza.red, cinza.green, cinza.blue).italic('     Gitconfig.ini')
}

const conteudo = dados.titulo + novaLinha +
                 novaLinha +
                 dados.uso + novaLinha +
                 novaLinha +
                 dados.opcao + novaLinha +
                 dados.ajuda + dados.mensagemAjuda + novaLinha +
                 dados.gitconfig + dados.mensagemGitconfig

module.exports = {
  conteudo,
  nomeArquivo: 'ajuda'
}

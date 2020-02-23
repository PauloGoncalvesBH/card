'use strict'

const chalk = require('chalk')

const dados = {
  titulo: '              ' + chalk.white.bold('Ajuda'),
  uso: 'Uso: npx paulogoncalves [opção]',
  opcao: 'Opções:',
  ajuda: '    -h, --help',
  mensagemAjuda: chalk.rgb(110, 110, 110).italic('           Ajuda'),
  gitconfig: '    -gc, --gitconfig',
  mensagemGitconfig: chalk.rgb(110, 110, 110).italic('     Gitconfig.ini')
}

const novaLinha = '\n'
const conteudo = dados.titulo + novaLinha +
                 novaLinha +
                 dados.uso + novaLinha +
                 novaLinha +
                 dados.opcao + novaLinha +
                 dados.ajuda + dados.mensagemAjuda + novaLinha +
                 dados.gitconfig + dados.mensagemGitconfig

const nomeArquivo = 'ajuda'

module.exports = {
  conteudo,
  nomeArquivo
}

'use strict'

const chalk = require('chalk')

const dados = {
  gitconfig: '                 ' + chalk.white.bold('Gitconfig.ini'),
  user: chalk.blue.bold('[user]'),
  userEmail: '    ' + 'email = ' + chalk.rgb(110, 110, 110)('paulorochag@hotmail.com'),
  userName: '    ' + 'name = ' + chalk.rgb(110, 110, 110)('Paulo Gonçalves'),
  alias: chalk.blue.bold('[alias]'),
  aliasSt: '    ' + 'st = ' + chalk.rgb(110, 110, 110)('status -s -b'),
  aliasLg: '    ' + 'lg = ' + chalk.rgb(110, 110, 110)('log --oneline --graph --decorate --all'),
  push: chalk.blue.bold('[push]'),
  pushDefault: '    ' + 'default = ' + chalk.rgb(110, 110, 110)('upstream'),
  pushFollowTags: '    ' + 'followTags = ' + chalk.rgb(110, 110, 110)('true'),
  tag: chalk.blue.bold('[tag]'),
  tagSort: '    ' + 'sort = ' + chalk.rgb(110, 110, 110)('version:refname'),
  colorBranch: chalk.blue.bold('[color "branch"]'),
  colorBranchUpstream: '    ' + 'upstream = ' + chalk.cyan('cyan')
}

const novaLinha = '\n'
const conteudo = dados.gitconfig + novaLinha +
                 novaLinha +
                 dados.user + novaLinha +
                 dados.userEmail + novaLinha +
                 dados.userName + novaLinha +
                 dados.alias + novaLinha +
                 dados.aliasSt + novaLinha +
                 dados.aliasLg + novaLinha +
                 dados.push + novaLinha +
                 dados.pushDefault + novaLinha +
                 dados.pushFollowTags + novaLinha +
                 dados.tag + novaLinha +
                 dados.tagSort + novaLinha +
                 dados.colorBranch + novaLinha +
                 dados.colorBranchUpstream

const nomeArquivo = 'gitconfig'

module.exports = {
  conteudo,
  nomeArquivo
}

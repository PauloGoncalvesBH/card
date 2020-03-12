'use strict'

const cartao = require('./conteudo/cartao')
const { criarArquivo } = require('./constants_and_utils/utils')
const gitconfig = require('./conteudo/gitconfig')
const ajuda = require('./conteudo/ajuda')
const vscode = require('./conteudo/vsCode')

criarArquivo(cartao)
criarArquivo(gitconfig)
criarArquivo(ajuda)
criarArquivo(vscode)

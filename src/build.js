'use strict'

const cartao = require('./conteudo/cartao')
const { criarArquivo } = require('./constants_and_utils/utils')
const gitconfig = require('./conteudo/gitconfig')
const ajuda = require('./conteudo/ajuda')

criarArquivo(cartao)
criarArquivo(gitconfig)
criarArquivo(ajuda)

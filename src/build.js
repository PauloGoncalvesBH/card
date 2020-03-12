'use strict'

const { criarArquivo } = require('./constants_and_utils/utils')
const { ajuda, cartao, gitconfig, vsCode } = require('./conteudo')

criarArquivo(ajuda)
criarArquivo(cartao)
criarArquivo(gitconfig)
criarArquivo(vsCode)

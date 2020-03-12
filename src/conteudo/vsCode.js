'use strict'

const chalk = require('chalk')

const { novaLinha } = require('../constants_and_utils/constants')
const { chalkCinza, titulo } = require('../constants_and_utils/utils')

const objeto = (chave, valor) => {
  const chaveFormat = typeof valor === 'string' ? chalk.yellowBright(`"${valor}"`) : (valor)
  return chalk.cyanBright(`    "${chave}": `) + chaveFormat + novaLinha
}

const conteudo =
  titulo({ titulo: 'Settings.json', subtitulo: 'VS Code' }) +
  chalkCinza('{') + novaLinha +
  objeto('workbench.colorTheme', 'Dracula Soft') +
  objeto('workbench.iconTheme', 'vscode-icons') +
  objeto('editor.tabSize', 2) +
  objeto('editor.minimap.enabled', false) +
  objeto('window.title', '${dirty} ${activeEditorMedium} | ${rootName} ${dirty}') +
  objeto('scm.diffDecorationsGutterWidth', 5) +
  objeto('outline.showProperties', false) +
  objeto('outline.showVariables', false) +
  objeto('telemetry.enableTelemetry', false) +
  chalkCinza('}')

module.exports = {
  conteudo,
  nomeArquivo: 'vscode'
}

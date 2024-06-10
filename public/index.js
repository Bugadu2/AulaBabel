"use strict";

var saudacao = function saudacao(nome) {
  return "Ol\xE1 ".concat(nome);
};
var usuario = 'João Burro';
console.log(saudacao(usuario));
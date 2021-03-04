import { validaCPF } from "./validaCPF";

function validarCPF(cpf) {
  if (validaCPF(cpf) && cpf.length === 11) {
    return { valido: true, texto: "" };
  } else {
    return { valido: false, texto: "CPF Invalido" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter 4 e 72 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarEmail(email) {
  var sintaxe = /\S+@\S+\.\S+/;
  if (sintaxe.test(email) === false) {
    return { valido: false, texto: "Email Invalido" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarCEP(value) {
  const cep = value?.replace(/[^0-9]/g, "");
  if (cep?.length !== 8) {
    return { valido: false, texto: "CEP Invalido" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha, validarEmail, validarCEP };

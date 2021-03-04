import React from "react";

const ValidacoesCadastro = React.createContext({
    email: semdados,
    senha: semdados,
    cpf:   semdados,  
    cep:   semdados,
});
function semdados(dados){
    console.log(dados)
    return {valido:true, texto:""}
}
export default ValidacoesCadastro;

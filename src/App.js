import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validarCPF, validarSenha, validarEmail, validarCEP } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <div>
          <Typography align="center" variant="h3" component="h1">
            Formulario de Cadastro
          </Typography>
        </div>
        <ValidacoesCadastro.Provider
          value={{ email: validarEmail, cpf: validarCPF, senha: validarSenha, cep: validarCEP }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}
function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;

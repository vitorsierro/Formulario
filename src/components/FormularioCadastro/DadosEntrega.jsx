import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";
import estados from "../../models/estados.js";

export default function DadosEntrega(aoEnviar) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      setEndereco(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(estados(data.uf));
    });
  if (endereco === undefined) {
    erros.cep = { valido: false, texto: "CEP Invalido" };
    setEndereco("");
    setBairro("");
    setCidade("");
    setEstado("");
  } else {
    erros.cep = { valido: true, texto: "" };
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ cep, endereco, numero, estado, cidade });
        }
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cep.valido}
        helperText={erros.cep.texto}
        id="cep"
        name="cep"
        label="cep"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereço"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        label="Numero"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={bairro}
        onChange={(event) => {
          setBairro(event.target.value);
        }}
        id="bairro"
        label="Bairro"
        type="text"
        required
        fullWidth
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}
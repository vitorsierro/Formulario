export default function estados(uf) {
    let state = "";
    switch (uf) {
      case "AC":
        state = "Acre";
        break;
      case "AL":
        state = "Alagoas";
        break;
      case "AP":
        state = "Amapá";
        break;
      case "AM":
        state = "Amazonas";
        break;
      case "BA":
        state = "Bahia";
        break;
      case "CE":
        state = "Ceará";
        break;
      case "DF":
        state = "Distrito Federal";
        break;
      case "ES":
        state = "Espírito Santo";
        break;
      case "GO":
        state = "Goiás";
        break;
      case "MA":
        state = "Maranhão";
        break;
      case "MT":
        state = "Mato Grosso";
        break;
      case "MS":
        state = "Mato Grosso do Sul";
        break;
      case "MG":
        state = "Minas Gerais";
        break;
      case "PA":
        state = "Pará";
        break;
      case "PB":
        state = "Paraíba";
        break;
      case "PR":
        state = "Paraná";
        break;
      case "PE":
        state = "Pernambuco";
        break;
      case "PI":
        state = "Piauí";
        break;
      case "RJ":
        state = "Rio de Janeiro";
        break;
      case "RN":
        state = "Rio Grande do Norte";
        break;
      case "RS":
        state = "Rio Grande do Sul";
        break;
      case "RO":
        state = "Rond&ohat;nia";
        break;
      case "RR":
        state = "Roraima";
        break;
      case "SC":
        state = "Santa Catarina";
        break;
      case "SP":
        state = "São Paulo";
        break;
      case "SE":
        state = "Sergipe";
        break;
      case "TO":
        state = "Tocantins";
        break;
      default:
        state = "";
    }
    return state;
  }
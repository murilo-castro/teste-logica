const allStates = [];

const incomeByState = (state, income) => {
  const estado = {
    nome: state,
    faturamento: income,
  };
  return estado;
};

const montaTd = (valor, classe) => {
  const td = document.createElement("td");
  td.innerHTML = valor;
  td.className = classe;
  return td;
};

const montaTr = (estado) => {
  const tr = document.createElement("tr");
  tr.appendChild(montaTd(estado.nome, "nome-estado"));
  tr.appendChild(montaTd(estado.faturamento, "faturamento-estado"));
  tr.appendChild(montaTd("", "percentage"));
  return tr;
};

const addEstadoNaTabela = (tr) => {
  const table = document.querySelector("table tbody");
  table.appendChild(tr);
};

const calcPercentage = (somaInvoicing, states, allTr) => {
  let percentage = 0;
  for (index = 0; index < states.length; index += 1) {
    percentage = (states[index].faturamento * 100) / somaInvoicing;
    states[index].percentage = percentage.toFixed(2);
    allTr[index].innerHTML = percentage.toFixed(2);
  }
  return percentage;
};

const invoicingPercentage = (states, allTr) => {
  allTr = document.querySelectorAll("table tbody .percentage");
  let somaInvoicing = 0;
  states.forEach((element) => {
    somaInvoicing += element.faturamento;
  });
  calcPercentage(somaInvoicing, states, allTr);
};

const monthlyInvoicing = document.querySelector("#insert-state");
monthlyInvoicing.addEventListener("click", (e) => {
  e.preventDefault();
  const nameState = document.querySelector("#state");
  const income = document.querySelector("#income");
  const state = incomeByState(nameState.value, Number(income.value));
  const tr = montaTr(state);
  allStates.push(state);
  addEstadoNaTabela(tr);
  invoicingPercentage(allStates);
  nameState.value = "";
  income.value = "";
});

const btnPercentage = document.querySelector("#calc-percentage");
btnPercentage.addEventListener("click", (e) => {
  e.preventDefault();
  table = document.querySelectorAll("table tbody");
  table[0].innerHTML = "";
});

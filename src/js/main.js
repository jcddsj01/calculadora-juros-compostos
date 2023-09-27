const capitalInput = document.querySelector("#capital");
const taxaJurosInput = document.querySelector("#taxa-juros");
const tempoRendimentoInput = document.querySelector("#tempo-rendimento");
const buttonCalcularJurosCompostos = document.querySelector("#calcular-juros-compostos");
const buttonLimpar = document.querySelector("#limpar");
const valorTotal = document.querySelector("#valor-total");
const valorInvestido = document.querySelector("#valor-investido");
const totalJuros = document.querySelector("#total-juros");

buttonCalcularJurosCompostos.addEventListener("click", function() {
    const capital = Number(capitalInput.value);
    const taxaJuros = Number(taxaJurosInput.value);
    const tempoRendimento = Number(tempoRendimentoInput.value);

    if (capital <= 0 || taxaJuros <= 0 || tempoRendimento <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos e positivos.");
        limparCampos();
        return;
    }

    // Converte a Taxa de Juros em porcentagem
    const taxaJurosDecimal = taxaJuros / 100;

    // Fórmula: M = C (1 + i)t
    // M: É o valor final da transação, o montante acumulado
    // C: É o capital investido
    // i: É a taxa de juros
    // t: É o tempo em que o capital ficará aplicado ou sob empréstimo 
    const montante = capital * Math.pow(1 + taxaJurosDecimal, tempoRendimento);
    const calculoTotalJuros = montante - capital; 

    // Valor total final
    exibirResultado(valorTotal, montante, '#000');
    
    // Valor investido
    exibirResultado(valorInvestido, capital, '#0077BD');
    
    // Total em juros
    exibirResultado(totalJuros, calculoTotalJuros, '#28A745');
});

function exibirResultado(elemento, valor, cor) {
    elemento.innerHTML = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    elemento.style.color = cor;
    elemento.style.fontWeight = 'bold';
}

function limparCampos() {
    capitalInput.value = "";
    taxaJurosInput.value = "";
    tempoRendimentoInput.value = "";
};

buttonLimpar.addEventListener("click", function() {
    limparCampos();
    valorTotal.innerHTML = "0,00";
    valorTotal.style.color = "#fff";
    valorTotal.style.fontWeight = 'normal';

    valorInvestido.innerHTML = "0,00";
    valorInvestido.style.color = "#fff";
    valorInvestido.style.fontWeight = 'normal';

    totalJuros.innerHTML = "0,00";
    totalJuros.style.color = "#fff";
    totalJuros.style.fontWeight = 'normal';
});
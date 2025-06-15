const perguntas = [
    {
        enunciado: "1- Quantos dias Deus levou para criar os céus, a terra e tudo que neles há, antes de descansar?",
        alternativas: [
            "5 dias",
            "6 dias",
            "7 dias",
            "40 dias"
        ],
        correta: 2 
    },
    {
        enunciado: "2- O que Deus criou no primeiro dia?",
        alternativas: [
            "O firmamento",
            "O sol e a lua",
            "A luz",
            "Os peixes"
        ],
        correta: 3
    },
    {
        enunciado: "3- Qual foi a ordem da criação dos seres humanos, segundo Gênesis 1?",
        alternativas: [
            "Mulher primeiro, depois o homem",
            "Homem primeiro, depois a mulher",
            "Primeiro os animais, depois as plantas",
            "Homem, depois o sol e a lua"
        ],
        correta: 2
    },
    {
        enunciado: "4- Segundo Gênesis 2, de que forma Deus criou o homem?",
        alternativas: [
            "Com um raio de luz",
            "A partir da água",
            "Do pó da terra",
            "Do vento"
        ],
        correta: 3
    },
    {
        enunciado: "5- Para que Deus criou a mulher, segundo Gênesis 2:18?",
        alternativas: [
            "Para multiplicar a terra",
            "Para trabalhar no jardim",
            "Para ser uma auxiliadora idônea para o homem",
            "Para dominar sobre os animais"
        ],
        correta: 3
    }
];

let indiceAtual = 0;
let pontuacao = 0;
let respondeu = false;

function CarregarQuestao() {
    const q = perguntas[indiceAtual];

    document.getElementById("enunciado").innerText = q.enunciado;
    document.getElementById("alt1").innerText = q.alternativas[0];
    document.getElementById("alt2").innerText = q.alternativas[1];
    document.getElementById("alt3").innerText = q.alternativas[2];
    document.getElementById("alt4").innerText = q.alternativas[3];

    document.getElementById("feedback").innerText = "";

    // Limpar seleção
    document.querySelectorAll('input[name="resposta"]').forEach(el => el.checked = false);

    respondeu = false;
}

function EnviarResposta() {
    if (respondeu) return;

    const opcoes = document.getElementsByName("resposta");
    let respostaSelecionada = -1;

    opcoes.forEach((opcao, index) => {
        if (opcao.checked) {
            respostaSelecionada = index + 1; // +1 porque os values vão de 1 a 4
        }
    });

    if (respostaSelecionada === -1) {
        alert("Selecione uma resposta antes de enviar.");
        return;
    }

    const correta = perguntas[indiceAtual].correta;
    const feedback = document.getElementById("feedback");

    if (respostaSelecionada === correta) {
        pontuacao++;
        feedback.innerText = "Correto!";
        feedback.style.color = "green";
    } else {
        const respostaCerta = perguntas[indiceAtual].alternativas[correta - 1];
        feedback.innerText = `Incorreto. A resposta correta é: ${respostaCerta}`;
        feedback.style.color = "red";
    }

    respondeu = true;
}

function ProximaQuestao() {
    if (!respondeu) {
        alert("Você precisa responder antes de avançar.");
        return;
    }

    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        CarregarQuestao();
    } else {
        MostrarPontuacaoFinal();
    }
}

function MostrarPontuacaoFinal() {
    document.getElementById("pergunta").style.display = "none";
    document.getElementById("botoes").style.display = "none";
    document.getElementById("feedback").style.color = "black";
    document.getElementById("feedback").innerText = `Fim do quiz! Sua pontuação foi ${pontuacao} de ${perguntas.length}.`;
}

window.onload = CarregarQuestao;
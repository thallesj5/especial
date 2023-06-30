const botoesCarrossel = document.querySelectorAll('.botao');
const imagensCarrossel = document.querySelectorAll('.imagem');
const descricaoCarrossel = document.querySelectorAll('.descricao');

botoesCarrossel.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        marcarBotaoClicado(botao);

        esconderImagemAtiva();
        esconderDescricaoAmostra()

        mostrarImagemDeFundo(index);
        mostrarDescricao(index)
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function marcarBotaoClicado(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagemDeFundo(index) {
    imagensCarrossel[index].classList.add('ativa');
}

function esconderDescricaoAmostra() {
    const descricaoAmostra = document.querySelector('.amostra');
    descricaoAmostra.classList.remove('amostra');
}

function mostrarDescricao(index) {
    descricaoCarrossel[index].classList.add('amostra');
}




const ingrid = atletas [0];

//window.onload = () => {   
    const espaco_nome = document.getElementById('nome');
    const imagem = document.querySelector('div#container > img');
    const descricao = document.querySelector('div#container > p');

    espaco_nome.innerText = ingrid.nome;
    imagem.src = ingrid.imagem;
    descricao.innerText = ingrid.descricao;

//} (Não é necessário agora por causa do 'defer' no script no html)



// cria uma intercação com os navegadores. altera o layout, implementa itens complexos //
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assent/img/close_white_36dp_svg";

        /* adicionando evento
        para fechar a tela quando for 
        clicado em qualquer lugar da página */
    }

}

function cripto() {
    // o nome que esta no name do textarea sera convertido em valor 
    let text = document.getElementById('text').value
    //código aberto que proporciona a comunicação anônima e segura ao navegar na Internet e em atividades online, protegendo contra a censura e principalmente a privacidade. exem; ela e fatiada como uma cebola e fica pequeno 
    let split = text.split("")
    // vai contar a quantidade de codigo que vai usar 
    let chars = split.length
    const pre = ['Z','E','N','I','T','P','O','L','A','R','z','e','n','i','t','p','o','l','a','r',]
    // um arranjo(array) é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave.

    const pos = ['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t',]
    let rslt = document.getElementById('result')

    for (i = 0; i < chars; i++) {
        let index = pre.indexOf(split[i])


        if (index === -1) {
            // adiciona na string final o
            // caractere correspondente da posição
            // encontrada no array 'pre'
            split[i] = split [i]
        } else {
            // se não tiver nenhum
            // elemento correspondente no array 'pre
            // ele coloca um x
            split[i] = pos[index]
        }

        const toString = split.join('')

        rslt.innerText = toString
        /*
            innerHTML é usado para coloc
            html dentro do container result
            */

    }
    // fim do loop

}
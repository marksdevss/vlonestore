
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar-menu").style.top = "0";
    } else {
      document.getElementById("navbar-menu").style.top = "-50px";
    }
  }
  
  
const navbar = document.querySelector('nav');

navbar.addEventListener('mouseenter', function() {
  navbar.classList.remove('navbar-hidden');
});

navbar.addEventListener('mouseleave', function() {
  navbar.classList.add('navbar-hidden');
});

var janelaBoasVindas = document.getElementById("popup");

    // Defina o tempo em milissegundos após o qual a janela de boas-vindas deve desaparecer automaticamente
    var tempoDeExibicao = 5000; // 5 segundos

    // Defina uma função para esconder a janela de boas-vindas
    function esconderJanela() {
      janelaBoasVindas.style.display = "none";
    }

    // Inicie o temporizador para esconder a janela de boas-vindas após o tempo de exibição definido
    setTimeout(esconderJanela, tempoDeExibicao);

function toggleMenu() {
  var menu = document.getElementById("menu");
  var isOpen = menu.classList.contains("show");
  if (isOpen) {
      menu.classList.remove("show"); // Remove a classe "show" para ocultar o menu
      document.body.classList.remove("menu-close-icon");
  } 
  else {
      menu.classList.add("show"); // Adiciona a classe "show" para mostrar o menu
      document.body.classList.add("menu-open-icon");
  }
}


    document.addEventListener('click', function(event) {
      // Fecha todos os dropdowns quando o clique não é dentro de um dropdown
      var dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(event.target)) {
          var dropdownContent = dropdown.querySelector('.dropdown-content');
          dropdownContent.style.display = 'none';
          var dropdownBtn = dropdown.querySelector('.dropdown-btn');
          dropdownBtn.classList.remove('active');
        }
      });
    });

    function toggleTab(tabName) {
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active'));
        document.querySelector('.tab-' + tabName.toLowerCase()).classList.add('active');

        var dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => dropdown.style.display = 'none');
        document.getElementById('tipo-imovel-' + tabName.toLowerCase()).style.display = 'block';
        document.getElementById('cidade-' + tabName.toLowerCase()).style.display = 'block';
        document.getElementById('valor-' + tabName.toLowerCase()).style.display = 'block';
        document.getElementById('quartos-' + tabName.toLowerCase()).style.display = 'block';

        var searchButtonComprar = document.getElementById('search-button');
        var searchButtonAlugar = document.getElementById('search-button-alugar');
        if (tabName === 'Comprar') {
            searchButtonComprar.style.display = 'block';
            searchButtonAlugar.style.display = 'none';
        } else {
            searchButtonComprar.style.display = 'none';
            searchButtonAlugar.style.display = 'block';
        }
    }
  
    


  
    function toggleDropdown(dropdownId) {
      var dropdownContent = document.querySelector('#' + dropdownId + ' .dropdown-content');
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  
      var dropdownBtn = document.querySelector('#' + dropdownId + ' .dropdown-btn');
      dropdownBtn.classList.toggle('active');
    }
  
    function procurarImoveis(tabName) {
      var tipoImovel = document.querySelector('#tipo-imovel-' + tabName.toLowerCase() + ' input:checked');
      var cidade = document.querySelector('#cidade-' + tabName.toLowerCase() + ' input').value;
      var valor = document.querySelector('#valor-' + tabName.toLowerCase() + ' input:checked');
      var quartos = document.querySelector('#quartos-' + tabName.toLowerCase() + ' input:checked');
  
      console.log('Tipo de Imóvel:', tipoImovel ? tipoImovel.value : 'Nenhum selecionado');
      console.log('Cidade:', cidade);
      console.log('Valor:', valor ? valor.value : 'Nenhum selecionado');
      console.log('Quartos:', quartos ? quartos.value : 'Nenhum selecionado');
    }





    // Adiciona ou remove a classe 'active' ao clicar nos links
    document.addEventListener('DOMContentLoaded', function () {
      const navLinks = document.querySelectorAll('nav a');

      navLinks.forEach(link => {
        link.addEventListener('click', function () {
          navLinks.forEach(otherLink => otherLink.classList.remove('active'));
          this.classList.add('active');
        });
      });
    });




    window.onload = function () {
      const banner = document.getElementById("banner");

      // Arrays de imagens para desktop e mobile
      const desktopImages = ["Banner_Principal.png"];
      const mobileImages = ["Banner_Principal_mob.png"];

      // Verifica se o dispositivo é mobile
      const isMobile = window.matchMedia("only screen and (max-width: 899px)").matches;

      // Seleciona o array apropriado de imagens
      const images = isMobile ? mobileImages : desktopImages;

      // Seleciona uma imagem aleatória
      const randomIndex = Math.floor(Math.random() * images.length);
      const imageUrl = images[randomIndex];

      // Cria e insere a imagem
      const img = document.createElement("img");
      img.src = imageUrl;
      banner.appendChild(img);
  };

    
 
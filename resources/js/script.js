"use strict";

/* Función efecto Scroll del menú */
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    // Cambia "100" por el número de píxeles de scroll que prefieras para iniciar la transición
    if (window.scrollY > 10) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  });

/* Función que conrolla el mostrar o no el sidebar */
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

/* Función para asegurar que el sidebar se oculta al cambiar el tamaño de la ventana */
window.addEventListener("resize", function () {
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth > 800) {
    // Asume 800px como el breakpoint para modo desktop
    sidebar.style.display = "none";
  }
});

/* Función para asegurar que el sidebar se oculta al cambiar el tamaño de la ventana */
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function() {
        var dropdownContent = this.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones de dropdown en la navegación de escritorio
    var dropdowns = document.querySelectorAll('.desktop-nav .dropbtn');

    dropdowns.forEach(function(dropbtn) {
        dropbtn.addEventListener('click', function() {
            // Cierra cualquier dropdown ya abierto
            var openDropdown = document.querySelector('.desktop-nav .dropdown-content.show');
            if(openDropdown && openDropdown !== this.nextElementSibling) {
                openDropdown.classList.remove('show');
            }

            // Abre o cierra el dropdown clickeado
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            } else {
                dropdownContent.classList.add('show');
            }
        });
    });

    // Cerrar el dropdown si se hace clic fuera de él
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.querySelectorAll('.desktop-nav .dropdown-content');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    }
});

/* Función que al hacer scroll el svg, logo del navbar, cambie de solor a negro */
window.addEventListener('scroll', function() {
    const svgIcon = document.getElementById('svgIcon');
    if (window.scrollY > 10) {
      svgIcon.classList.add('svg-scroll-color');
    } else {
      svgIcon.classList.remove('svg-scroll-color');
    }
  });
  

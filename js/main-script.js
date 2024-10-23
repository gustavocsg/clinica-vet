// Função para alterar o tema do site (escuro ou claro)
$(document).ready(function () {
  function removerClasseAtivo() {
    $(".lista-temas li a").removeClass("active");
  }

  function removerFundo() {
    $("#topo").removeClass("bg-dark");
    $("#topo").removeClass("bg-light");
    $("#topo").removeClass("bg-auto");

    $("body").removeClass("bg-dark");
    $("body").removeClass("bg-light");
    $("body").removeClass("bg-auto");
  }

  $(".lista-temas li").on("click", function () {
    let linkElement = $(this).find("a");
    let theme = linkElement.data("theme");
    let iconClass = linkElement.data("icon");
    let colorTheme = "bg-" + theme;

    $("body").attr("data-bs-theme", theme);
    $("#themeIcon").removeClass().addClass("bi").addClass(iconClass);
    removerClasseAtivo();
    removerFundo();
    linkElement.addClass("active");
    $("#topo").addClass(colorTheme);
    $("body").addClass(colorTheme);
  });
});

// $(document).ready(function () {
// });
// document.getElementById("btnSwitch").addEventListener("click", () => {
//   if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
//     document.documentElement.setAttribute("data-bs-theme", "light");
//   } else {
//     document.documentElement.setAttribute("data-bs-theme", "dark");
//   }
// });

// document.getElementById("btnSwitch").addEventListener("click", () => {
//   if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
//     document.documentElement.setAttribute("data-bs-theme", "light");
//   } else {
//     document.documentElement.setAttribute("data-bs-theme", "dark");
//   }
// });

// $(function () {
//   $("btnSwitch").change(function () {
//     if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
//       document.documentElement.setAttribute("data-bs-theme", "light");
//     } else {
//       document.documentElement.setAttribute("data-bs-theme", "dark");
//     }
//   });
// });

// document.getElementById("btnSwitch").change(function () {
//   if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
//     document.documentElement.setAttribute("data-bs-theme", "light");
//   } else {
//     document.documentElement.setAttribute("data-bs-theme", "dark");
//   }
// });

// document.getElementsByClassName("lista-temas").addEventListener("click", () => {
//   let link = this.find("a");
//   let tema = link.data("theme");

//   document.getElementsByTagName("html");
// });

// document.querySelector('.themes-list li').on('click', function(){
//     let linkElemnt = document.querySelector(this).find('a');
//     let theme = linkElemnt.data('theme');
//     document.querySelector('html').attr('data-bs-theme', theme);
// });

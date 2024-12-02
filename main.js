$(document).ready(function() {
  
  document.getElementById("btnCadastrar").addEventListener("click", function () {
    window.location.href = "pet-form.html";
  });
  
  $.ajax({
    url: "http://localhost:3000/pets",
    method: "GET",
    success: function (listaPets) {
      for (const pet of listaPets) {
        var card = $("<div>").addClass("card");
        var cardHead = $("<div>").addClass("card-head");
        var cardBody = $("<div>").addClass("card-body");
        var tema = pet.coloracao.toLocaleLowerCase();
            
        cardHead.append(`
          <img src="/imgs/${pet.nome}.jpg" alt"Foto de ${pet.nome}">
          <p>${pet.nome}</p>
        `);
        cardBody.append(`
          <p>Espécie: ${pet.especie}</p>
          <p>Coloração: ${pet.coloracao}</p>
          <p>Peso: ${pet.pesoKg}kg</p>
          <p>Castrado: ${pet.castrado ? "Sim" : "Não"}</p>
        `)        
            
        card.append(cardHead);
        card.append(cardBody);
        card.addClass(tema);
            
        $(".cards").append(card);
      }
    },
    error: function (error) {
      console.log("Erro ao acessar a API:", error);
    }  
  });


});
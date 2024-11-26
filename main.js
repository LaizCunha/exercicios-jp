$(document).ready(function() {
  const listaPets = [
    {
      nome: 'Chantilly',
      especie: 'Gato',
      coloracao: 'Tricolor',
      pesoKg: 7.8,
      castrado: true
    },
    {
      nome: 'Cheetos',
      especie: 'Gato',
      coloracao: 'Laranja',
      pesoKg: 5.2,
      castrado: false
    },
    {
      nome: 'Malu',
      especie: 'Cachorro',
      coloracao: 'Preto',
      pesoKg: 13,
      castrado: true
    },
    {
      nome: 'AL',
      especie: 'Cachorro',
      coloracao: 'Caramelo',
      pesoKg: 20,
      castrado: true
    },
    {
      nome: 'Hantaro',
      especie: 'Hamster',
      coloracao: 'Branco',
      pesoKg: 0.3,
      castrado: false
    }
  ];

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

});
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

    
    listaPets.forEach(pets => {
        var card = $("<div>").addClass("card");
        var cardHead = $("<div>").addClass("card-head");
        var cardBody = $("<div>").addClass("card-body");
        
        cardHead.append(`
            <img src="/imgs/${pets.nome}.jpg" alt"Foto de ${pets.nome}">
            <p>${pets.nome}</p>
            `);
        cardBody.append(`
            <p>Espécie: ${pets.especie}</p>
            <p>Coloração: ${pets.coloracao}</p>
            <p>Peso: ${pets.pesoKg}kg</p>
            <p>Castrado: ${pets.castrado ? "Sim" : "Não"}</p>
            `)        
        
        card.append(cardHead);
        card.append(cardBody);
        
        $(".cards").append(card);


        });

});
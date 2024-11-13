$(document).ready(function() {
    const listaPets = [
        {
            nome: 'Chantilly',
            especie: 'Gato',
            coloracao: 'Tricolor',
            pesoKg: 7.8,
            Castrado: true
        },
        {
            nome: 'Cheetos',
            especie: 'Gato',
            coloracao: 'Laranja',
            pesoKg: 5.2,
            Castrado: false
        },
        {
            nome: 'Mel',
            especie: 'Cachorro',
            coloracao: 'Preto',
            pesoKg: 13,
            Castrado: true
        },
        {
            nome: 'AL',
            especie: 'Cachorro',
            coloracao: 'Caramelo',
            pesoKg: 20,
            Castrado: true
        },
        {
            nome: 'Hantaro',
            especie: 'Hamster',
            coloracao: 'Branco',
            pesoKg: 0.3,
            Castrado: false
        }
    ];

    listaPets.forEach(function(pet) {
        var card = `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body pet-color" >
                <h5 class="card-title">${pet.nome}</h5>
                <p class="pet-info">Espécie: ${pet.especie}, Cor: ${pet.coloracao}, ${pet.pesoKg}kgs Castrado: ${pet.Castrado}</p>
            </div>
        </div>
        `;
        $('.cards-pets').append(card);
    })
})

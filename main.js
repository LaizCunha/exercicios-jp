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

    listaPets.forEach(function(pet) {
        var card = `
        <div class="card ${pet.coloracao.toLocaleLowerCase()}" style="width: 18rem;">
          <img src="/imgs/${pet.nome}.jpg" class="card-img-top" alt="...">
            <div class="card-body pet-color" >
                <h5 class="card-title">${pet.nome}</h5>
                <p class="pet-info">Espécie: ${pet.especie}, Cor: ${pet.coloracao}, ${pet.pesoKg}kgs Castrado: ${pet.castrado ?  'Sim' : 'Não'}</p>
            </div>
        </div>
        `;
        $('.cards-pets').append(card);
    })
})
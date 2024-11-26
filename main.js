$(document).ready(function() {
    const listaPets = [];

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
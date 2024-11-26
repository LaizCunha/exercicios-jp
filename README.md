## Exercícios JP

### **Desafio 1: Renderizar cards dos pets.**

Percorrer a lista de pets no javascript (estática por enquanto) e para cada pet:
- Criar uma div para o card do pet;
- Estilizar o card de acordo com a coloração do pet (criar temas no css?);
- Usar o grid system do bootstrap para permitir responsividade da exibição dos cards em dispositivos com telas menores;
- Usar o componente card do bootstrap.

---

### **Desafio 2: Substituir dados estáticos por requisição HTTP para API.**

Instalar o pacote npm "json-server" e criar uma fake api usando o arquivo "dados.json", depois substituir a lista de pets, atualmente estática, por uma requisição à api fake. Ao adicionar novos registros na lista de pets, em "dados.json", o app deve refletir e renderizar o novo card automaticamente.

---

### **Desafio 3: Criar uma página de formulário de Novo Pet**

Criar uma nova página "pet-form.html" e implementar um formulário para permitir cadastrar novos pets. Este form deve ser estilizado com as classes do bootstrap, deve conter um link para "Voltar" para a tela dos cards e deve ter um botão "Salvar", que deve enviar os dados do formulário (via POST) para o endpoint "/pets" da fake api do json-server.

---

### **Desafio N: Aplicar filtros sobre os pets.**

Criar controles e inputs para permitir filtrar os pets como, por espécie, faixa de peso, ...
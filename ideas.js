let index_redirect = document.getElementById('index_redirect').addEventListener('click', () => {
   window.location.href = 'index.html'
})
let api = 'https://64d7f1fa5f9bf5b879ce11dd.mockapi.io/idea/';
let dataContainer = document.getElementById('dataContainer');

fetch(api)
   .then(response => response.json())
   .then(data => {
      data.forEach(item => {
         let paragraph = document.createElement('p');
         paragraph.textContent = item.idea;
         paragraph.classList.add('data-item');
         dataContainer.appendChild(paragraph);
      });
   })
   .catch(error => {
      console.error('Greška pri dohvatanju podataka:', error);
   });
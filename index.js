let other_ideas = document.getElementById('other_ideas')
other_ideas.addEventListener('click', () => {
   window.location.href = 'ideas.html'
})

let api = 'https://64d7f1fa5f9bf5b879ce11dd.mockapi.io/idea/'
let idea = document.getElementById('idea')
let send = document.getElementById('send')

send.addEventListener('click', () => {
   if (idea.value.length < 15) {
      alert('Morate da unesete ideju')
   } else {
      let ideaText = idea.value;

      let data = {
         idea: ideaText
      };

      fetch(api, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(response => response.json())
         .then(result => {
            console.log('Uspešno poslato:', result);
            idea.value = 'Postvaljeno, redirecting';
            setTimeout(() => {
               window.location.href = 'ideas.html';
            }, 2000);
         })
         .catch(error => {
            console.error('Greška pri slanju:', error);
         });

   }
});
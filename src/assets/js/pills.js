 // FILTRO SIMPLES
    
 const buttons = document.querySelectorAll('.filter button');
 const cards = document.querySelectorAll('.lesson');
 
 buttons.forEach(btn => {
   btn.addEventListener('click', () => {
     buttons.forEach(b => b.classList.remove('active'));
     btn.classList.add('active');
 
     const cat = btn.dataset.cat;
 
     cards.forEach(card => {
       if(cat === 'all' || card.dataset.cat === cat){
         card.style.display = 'block';
       } else {
         card.style.display = 'none';
       }
     });
   });
 });
 
 function toggleMenu() {
     const menu = document.getElementById("sideMenu");
     const overlay = document.getElementById("overlay");
     menu.classList.toggle("open");
     overlay.classList.toggle("show");
 }
 
 // Quando o overlay (fundo) for clicado, o menu se fecha
 document.getElementById("overlay").addEventListener("click", closeMenu);
 
 function closeMenu() {
     const menu = document.getElementById("sideMenu");
     const overlay = document.getElementById("overlay");
     menu.classList.remove("open");
     overlay.classList.remove("show");
 };
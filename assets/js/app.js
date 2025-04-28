/* Search Input*/
let search_input = document.getElementById('search-input')
let icon_items = document.getElementsByClassName('icon-item')
search_input.onfocus = function(){

    for(let item of icon_items){
        item.style.display = 'none'
    }
    this.style.width = '100%'
}
search_input.onblur = function(){

    for(let item of icon_items){
        item.style.display = 'block'
    }
    this.style.width = '70px'
}

/*Nav Background*/
let nav = document.getElementById('nav')
window.onscroll = function(){
    if(window.pageYOffset > 350){
        nav.classList.add('bg')
    }else{
        nav.classList.remove('bg')
    }
}

/*Nav Show Hide*/
let hambargar = document.getElementById('hambargar');
let navbar_menu = document.getElementById('navbar-menu');

hambargar.onclick = function() {
    navbar_menu.classList.toggle('active');

    if (hambargar.innerHTML.trim() === '<i class="fa-solid fa-bars"></i>') {
        hambargar.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    } else {
        hambargar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

/*Slider Image*/
let next_btn = document.getElementById('next_btn');
let prev_btn = document.getElementById('prev_btn');
let sliders = document.getElementsByClassName('slider')
let slider_no = 1

 function next(){
    document.getElementById('slider' + slider_no).classList.remove ('active');

    slider_no ++
    if( slider_no > sliders.length ){
        slider_no = 1
    }

    document.getElementById('slider' + slider_no).classList.add ('active');
    //console.log('slider_no');
}

 function prev(){
    document.getElementById('slider' + slider_no).classList.remove ('active');

    slider_no --
    if( slider_no < 1 ){
        slider_no = sliders.length;
    }

    document.getElementById('slider' + slider_no).classList.add ('active');
    //console.log('slider_no');
}

next_btn.onclick = next
prev_btn.onclick = prev

setInterval(next, '3000')

/*Product Filter
let all_btn = document.getElementById('all_btn');
let cloth_btn = document.getElementById('cloth_btn');
let watch_btn = document.getElementById('watch_btn');
let lapel_btn = document.getElementById('lapel_btn');
let necktie_btn = document.getElementById('necktie_btn');
let shoe_btn = document.getElementById('shoe_btn');


let cloth_cards = document.getElementsByClassName('cloth');
let lapel_cards = document.getElementsByClassName('lapel');
let necktie_cards = document.getElementsByClassName('necktie');
let watch_cards = document.getElementsByClassName('watch');
let shoe_cards = document.getElementsByClassName('shoe');

all_btn.onclick = function(){
    //console.log('cloth_cards');
    for(let shoe_card of shoe_cards){
        shoe_card.style.display = 'block';
    }
    for(let watch_card of watch_cards){
        watch_card.style.display = 'block';
    }
    for(let lapel_card of lapel_cards){
        lapel_card.style.display = 'block';
    }
    for(let necktie_card of necktie_cards){
        necktie_card.style.display = 'block';
    }
    for(let cloth_card of cloth_cards){
        cloth_card.style.display = 'block';
    }
    this.classList.add('active')
    cloth_btn.classList.remove('active');
    watch_btn.classList.remove('active');
    lapel_btn.classList.remove('active');
    necktie_btn.classList.remove('active');
    shoe_btn.classList.remove('active');
}

cloth_btn.onclick = function(){
    //console.log('cloth_cards');
    for(let shoe_card of shoe_cards){
        shoe_card.style.display = 'none';
    }
    for(let watch_card of watch_cards){
        watch_card.style.display = 'none';
    }
    for(let lapel_card of lapel_cards){
        lapel_card.style.display = 'none';
    }
    for(let necktie_card of necktie_cards){
        necktie_card.style.display = 'none';
    }
    for(let cloth_card of cloth_cards){
        cloth_card.style.display = 'block';
    }
    this.classList.add('active')
    all_btn.classList.remove('active');
    watch_btn.classList.remove('active');
    lapel_btn.classList.remove('active');
    necktie_btn.classList.remove('active');
    shoe_btn.classList.remove('active');
}

watch_btn.onclick = function(){
    //console.log('watch_cards');
    for(let shoe_card of shoe_cards){
        shoe_card.style.display = 'none';
    }
    for(let watch_card of watch_cards){
        watch_card.style.display = 'block';
    }
    for(let lapel_card of lapel_cards){
        lapel_card.style.display = 'none';
    }
    for(let necktie_card of necktie_cards){
        necktie_card.style.display = 'none';
    }
    for(let cloth_card of cloth_cards){
        cloth_card.style.display = 'none';
    }
    this.classList.add('active')
    cloth_btn.classList.remove('active');
    all_btn.classList.remove('active');
    lapel_btn.classList.remove('active');
    necktie_btn.classList.remove('active');
    shoe_btn.classList.remove('active');
}
lapel_btn.onclick = function(){
    //console.log('lapel_cards');
    for(let shoe_card of shoe_cards){
        shoe_card.style.display = 'none';
    }
    for(let watch_card of watch_cards){
        watch_card.style.display = 'none';
    }
    for(let lapel_card of lapel_cards){
        lapel_card.style.display = 'block';
    }
    for(let necktie_card of necktie_cards){
        necktie_card.style.display = 'none';
    }
    for(let cloth_card of cloth_cards){
        cloth_card.style.display = 'none';
    }
    this.classList.add('active')
    cloth_btn.classList.remove('active');
    watch_btn.classList.remove('active');
    all_btn.classList.remove('active');
    necktie_btn.classList.remove('active');
    shoe_btn.classList.remove('active');
}
necktie_btn.onclick = function(){
    //console.log('necktie_cards');
    for(let shoe_card of shoe_cards){
        shoe_card.style.display = 'none';
    }
    for(let watch_card of watch_cards){
        watch_card.style.display = 'none';
    }
    for(let lapel_card of lapel_cards){
        lapel_card.style.display = 'none';
    }
    for(let necktie_card of necktie_cards){
        necktie_card.style.display = 'block';
    }
    for(let cloth_card of cloth_cards){
        cloth_card.style.display = 'none';
    }
    this.classList.add('active')
    cloth_btn.classList.remove('active');
    watch_btn.classList.remove('active');
    lapel_btn.classList.remove('active');
    all_btn.classList.remove('active');
    shoe_btn.classList.remove('active');
}
shoe_btn.onclick = function(){
    //console.log('shoe_cards');
    for(let shoe_card of shoe_cards){
        shoe_card.style.display = 'block';
    }
    for(let watch_card of watch_cards){
        watch_card.style.display = 'none';
    }
    for(let lapel_card of lapel_cards){
        lapel_card.style.display = 'none';
    }
    for(let necktie_card of necktie_cards){
        necktie_card.style.display = 'none';
    }
    for(let cloth_card of cloth_cards){
        cloth_card.style.display = 'none';
    }
    this.classList.add('active')
    cloth_btn.classList.remove('active');
    watch_btn.classList.remove('active');
    lapel_btn.classList.remove('active');
    necktie_btn.classList.remove('active');
    all_btn.classList.remove('active');
}
    */

   /* advance product filter */
   // Product Filter
const buttons = {
    all: document.getElementById('all_btn'),
    cloth: document.getElementById('cloth_btn'),
    watch: document.getElementById('watch_btn'),
    lapel: document.getElementById('lapel_btn'),
    necktie: document.getElementById('necktie_btn'),
    shoe: document.getElementById('shoe_btn')
  };
  
  const cards = {
    cloth: document.getElementsByClassName('cloth'),
    watch: document.getElementsByClassName('watch'),
    lapel: document.getElementsByClassName('lapel'),
    necktie: document.getElementsByClassName('necktie'),
    shoe: document.getElementsByClassName('shoe')
  };
  
  // Helper function to show or hide cards
  function filterProducts(selectedCategory) {
    for (let category in cards) {
      for (let card of cards[category]) {
        card.style.display = (selectedCategory === 'all' || selectedCategory === category) ? 'block' : 'none';
      }
    }
    
    // Update active class
    for (let btn in buttons) {
      if (btn === selectedCategory) {
        buttons[btn].classList.add('active');
      } else {
        buttons[btn].classList.remove('active');
      }
    }
  }
  
  // Attach events
  buttons.all.onclick = () => filterProducts('all');
  buttons.cloth.onclick = () => filterProducts('cloth');
  buttons.watch.onclick = () => filterProducts('watch');
  buttons.lapel.onclick = () => filterProducts('lapel');
  buttons.necktie.onclick = () => filterProducts('necktie');
  buttons.shoe.onclick = () => filterProducts('shoe');
  

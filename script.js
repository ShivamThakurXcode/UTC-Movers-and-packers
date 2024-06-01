
import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm'

const keenSlider = new KeenSlider(
  '#keen-slider',
  {
    loop: true,
    slides: {
      origin: 'center',
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          origin: 'auto',
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  },
  []
)

const keenSliderPrevious = document.getElementById('keen-slider-previous')
const keenSliderNext = document.getElementById('keen-slider-next')

const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop')
const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop')

keenSliderPrevious.addEventListener('click', () => keenSlider.prev())
keenSliderNext.addEventListener('click', () => keenSlider.next())

keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev())
keenSliderNextDesktop.addEventListener('click', () => keenSlider.next())
;


const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
    else{
      entry.target.classList.remove('show')
    }


 
  });
});

const hiddenElemenets = document.querySelectorAll('.box');


hiddenElemenets.forEach((el) => observer.observe(el));



const ContactContainer = document.querySelector('.call-container');

const callBtn = document.querySelector('.contact');

callBtn.addEventListener("click", () =>{
  ContactContainer.classList.toggle('hidden');
})



document.addEventListener('DOMContentLoaded', () => {
  const openModalButton = document.getElementById('openModalButton');
  const closeModalButton = document.getElementById('closeModalButton');
  const modal = document.getElementById('modal');

  openModalButton.addEventListener('click', () => {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
  });

  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
  });
});
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
// HTML 
const slide = document.getElementById('slide');

slide.innerHTML = `
 <div id="card-slider" class="splide">
	<div class="splide__slider">
		<div class="splide__track">
			<ul class="splide__list">	
			</ul>
		</div>
	</div>
</div>
`;




// SPLIDE
setTimeout(function() {
    new Splide( '#card-slider', {
        type      : 'loop',
        perPage   : 3,
        height    : '300px',
        heightRatio: 0.5,
        cover     : true,
        breakpoints: {
            600: {
                perPage: 1,
            }
        }
    } ).mount();
}, 800);


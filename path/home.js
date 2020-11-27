


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

s('html').style.color = 'white';
s('body').style.color = 'white';
s('body').style.background = 'black';

/*

s('body').style.background = 'url("'+path+'/assets/background.gif")';
s('body').style.backgroundSize = '100% 100%'

*/

s('body').style.backgroundSize = '100%';

/*notclick('html', 0, false);
notclick('html', 1, false);
notclick('html', 2, false);*/


mod_loader.init();
mod_hall.init();


particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 4489.553770423464,
        "rotateY": 4890.406785639845
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 365.4347455356053,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 97.44926547616141,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


function rr(){

	if( (data.lastW!=s('body').clientWidth) || (data.lastH!=s('body').clientHeight) ){

		data.lastW=s('body').clientWidth;
		data.lastH=s('body').clientHeight;

		if(data.lastW>500){

			data.movil = false;

		}else{

			data.movil = true;

		}

		console.log('movil ->'+data.movil);

		/* -------------------------------------------------------------------------- */
		/* -------------------------------------------------------------------------- */

		setTimeout(function(){



		}, 950);

		/* -------------------------------------------------------------------------- */
		/* -------------------------------------------------------------------------- */

	}

}

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

var data = {

	movil: false,
	lastH: null,
	lastW: null

};
rr();
setInterval(function(e){
	rr();
}, 100);



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */









/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

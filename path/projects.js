


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

s('html').style.color = 'white';
s('body').style.color = 'white';
s('body').style.background = 'black';
s('body').style.overflow = 'hidden';

/*

s('body').style.background = 'url("'+path+'/assets/background.gif")';
s('body').style.backgroundSize = '100% 100%'

*/

s('body').style.backgroundSize = '100%';

notclick('html', 0, false);
notclick('html', 1, false);
notclick('html', 2, false);


mod_loader.init();
mod_hall.init();
mod_projects.init();
/* mod_tech.init(); */
mod_footer.init();



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

		if(data.lastW>600){

			data.movil = false;

		}else{

			data.movil = true;

		}

		console.log('movil ->'+data.movil);

    /* -------------------------------------------------------------------------- */
		/* -------------------------------------------------------------------------- */

    if(data.movil){

      s('.title-content').style.height = '30%';

      s('.pc1').style.width = '100%';
      s('.pc2').style.width = '100%';
      s('.pc3').style.width = '100%';

      s('.foc1').style.width = '100%';
      s('.foc2').style.width = '100%';

      /*

      s('.content-legend-movil').style.margin = 'auto';
      s('.content-legend-movil').style.marginLeft = 'none';
      s('.space-pc-tech-legend-1').style.display = 'none';
      s('.space-pc-tech-legend-2').style.display = 'none';

      s('.tech-content-movil').style.display = 'block';
      s('.tech-content-pc').style.display = 'none';

      */

    }else{

      s('.title-content').style.height = '100%';

      s('.pc1').style.width = ((100/3)+'%');
      s('.pc2').style.width = ((100/3)+'%');
      s('.pc3').style.width = ((100/3)+'%');

      s('.foc1').style.width = '50%';
      s('.foc2').style.width = '50%';

      /*

      s('.content-legend-movil').style.margin = 'none';
      s('.content-legend-movil').style.marginLeft = '20%';
      s('.space-pc-tech-legend-1').style.display = 'block';
      s('.space-pc-tech-legend-2').style.display = 'block';

      s('.tech-content-movil').style.display = 'none';
      s('.tech-content-pc').style.display = 'block';

      */

    }

    mod_hall.rr();

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

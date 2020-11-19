


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

s('html').style.color = 'white';
s('body').style.color = 'white';
s('html').style.background = 'black';
s('body').style.background = 'url("'+path+'/assets/background.gif")';
/* s('body').style.backgroundSize = '100% 100%' */
s('body').style.backgroundSize = '100%';

/*notclick('html', 0, false);
notclick('html', 1, false);
notclick('html', 2, false);*/


/*

var str1en = "<a class='button' target='_blank' href='https://underpost.net/'><strong>underpost.net</strong></a> is a virtual laboratory that develop technologies to web hosting service nexodev.org, and the virtual world cyberiaonline.com";
var str1es = "<a class='button' target='_blank' href='https://underpost.net/'><strong>underpost.net</strong></a> es un laboratorio virtual que desarrolla tecnologías para el servicio de alojamiento web nexodev.org, y el mundo virtual cyberiaonline.com";

var str2en = "<a class='button' target='_blank' href='https://www.nexodev.org/'><strong>nexodev.org</strong></a> is a web hosting service for Wordpress and multiplatform applications. It's also the service in charge of developing applications for clients that require it";
var str2es = "<a class='button' target='_blank' href='https://www.nexodev.org/'><strong>nexodev.org</strong></a> es un servicio de alojamiento web para Wordpress y aplicaciones multiplataforma. También es el servicio encargado de desarrollar aplicaciones para clientes que lo requieran";

var str3en = "<a class='button' target='_blank' href='https://www.cyberiaonline.com/'><strong>cyberiaonline.com</strong></a> is a multiplatform virtual world  with characteristics of a MMORPG (massively multiplayer online role-playing game) Complemented with the characteristics of modern social networks";
var str3es = "<a class='button' target='_blank' href='https://www.cyberiaonline.com/'><strong>cyberiaonline.com</strong></a> es un mundo virtual multiplataforma con características de un MMORPG (juego de rol multijugador masivo en línea) Complementado con las características de las redes sociales modernas";

*/


mod_loader.init();
mod_hall.init();
mod_realtime_tech.init();
/* mod_realtime_projects.init(); */
mod_git.init();



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


function rr(){

	if( (data.lastW!=s('body').clientWidth) || (data.lastH!=s('body').clientHeight) ){

		data.lastW=s('body').clientWidth;
		data.lastH=s('body').clientHeight;

		if(data.lastH>400&&data.lastW>600){

			data.movil = false;

		}else{

			data.movil = true;

		}

		console.log('movil ->'+data.movil);

		/* -------------------------------------------------------------------------- */
		/* -------------------------------------------------------------------------- */

		setTimeout(function(){

			/* --------------------------------- */
			/* --------------------------------- */

			mod_hall.rr(data);

			/* --------------------------------- */
			/* --------------------------------- */

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

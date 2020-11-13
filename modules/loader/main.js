var mod_loader = {

	init: function(){



		append('body', `



		<loader class='fix'>

			<div class='abs center' style='top: 40%;'>

				<img class='in img-loader' src='`+path+`/assets/fondo3.gif'>

				<br>

				<br>

				L O A D I N G

			</div>

		</loader>



		`);

		setTimeout(function(){

			fadeOut(s('loader'));

		}, 1000);

	}

};

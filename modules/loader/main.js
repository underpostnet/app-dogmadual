var mod_loader = {

	init: function(){



		append('body', `



		<loader class='fix'>

			<div class='abs center' style='top: 40%;'>

				<img class='in img-loader' src='`+path+`/assets/loading.gif'>

				<br>

				<br>

				L O A D I N G

			</div>

		</loader>


		<div class='abs content-pjs'>

    	<div class='particles-js' id='particles-js'>

			</div>

		</div>

		<div class='abs main-content'>


		</div>

		`);

		setTimeout(function(){

			fadeOut(s('loader'));

		}, 1000);

	}

};

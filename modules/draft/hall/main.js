

var mod_hall = {

	init: function(){

		append('body', `

			<div class='in content-logo'>

					<br>

					<img class='inl img-logo' src='`+path+`/assets/dogmadual_pad_alpha.png'>

					<span class='inl txt-logo-0'><strong>DOGMADUAL</strong>.com</span>

					<br>

					<span class='inl txt-logo-1'>

						VIRTUAL MACHINE DEVELOPMENT

					</span>

					<br>

					<br>

			</div>

		`);


	},
	rr: function(data){


		let estandar_css = 400;

		s('.img-logo').style.width = (((data.lastW*44)/estandar_css)+'px');
		s('.img-logo').style.top = ('-'+((data.lastW*7)/estandar_css)+'px');
		s('.txt-logo-0').style.top = ('-'+((data.lastW*20)/estandar_css)+'px');
		s('.txt-logo-0').style.fontSize = (((data.lastW*25)/estandar_css)+'px');
		s('.txt-logo-1').style.top = ('-'+((data.lastW*18)/estandar_css)+'px');
		s('.txt-logo-1').style.fontSize = (((data.lastW*12)/estandar_css)+'px');
		s('.txt-logo-1').style.left = (((data.lastW*6)/estandar_css)+'px');



	}

};
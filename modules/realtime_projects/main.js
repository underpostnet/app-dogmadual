var mod_realtime_projects = {

	init: function(){

		append('body', `



				 <div class='in sub-title'>PROJECTS</div>

				  <br>

         <div class='in content-mrp-m'>

					 	<div class='in mrp-c1-m'>

							<div class='abs center'>c1</div>

						</div>

						<div class='in mrp-c2-m'>

							<div class='abs center'>c2</div>

						</div>

				 </div>


		`);


	},
	rr: function(){

		let estandar_css = 300;

		s('.content-mrp-m').style.height =  (((data.lastW*400)/estandar_css)+'px');;

	}

};

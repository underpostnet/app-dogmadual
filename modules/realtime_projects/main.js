var mod_realtime_projects =  {

  init: function(){

    var str1en = "Is a virtual laboratory that develop technologies to web hosting service nexodev.org, and the virtual world cyberiaonline.com";
    var str1es = "Es un laboratorio virtual que desarrolla tecnologías para el servicio de alojamiento web nexodev.org, y el mundo virtual cyberiaonline.com";

    var str2en = "Is a web hosting service for Wordpress and multiplatform applications. It's also the service in charge of developing applications for clients that require it";
    var str2es = "Es un servicio de alojamiento web para Wordpress y aplicaciones multiplataforma. También es el servicio encargado de desarrollar aplicaciones para clientes que lo requieran";

    var str3en = "Is a multiplatform virtual world  with characteristics of a MMORPG (massively multiplayer online role-playing game) Complemented with the characteristics of modern social networks";
    var str3es = "Es un mundo virtual multiplataforma con características de un MMORPG (juego de rol multijugador masivo en línea) Complementado con las características de las redes sociales modernas";


    append('body', `

        <hr class='hr-projects'>

        <br>

        <div class='in projects-title'>

          OUR PROJECTS

        </div>

        <br>

        <hr class='hr-projects'>

        <br>

        <img class='in img-underpot' alt='underpost.net' src='`+path+`/assets/underpost_alpha.png'>

        <br>

        <div class='in content-txt-projects'>

          `+str1en+`

        </div>

        <br>

        <a target='_blank' class='link-out-projects' href='https://underpost.net/' alt='underpost.net'>

          <div class='in' style='text-align: center;'>

            UNDERpost.net <img class='inl lout-projects' src='`+path+`/assets/lout.jpg'>

          </div>

        </a>

        <br>

        <hr class='hr-projects-min'>

        <br>

        <img class='in img-nexodev' alt='nexodev.org' src='`+path+`/assets/nexodev_alpha.png'>

        <br>

        <div class='in content-txt-projects'>

          `+str2en+`

        </div>

        <br>

        <a target='_blank' class='link-out-projects' href='https://www.nexodev.org/' alt='nexodev.org'>

          <div class='in' style='text-align: center;'>

            nexodev.org <img class='inl lout-projects' src='`+path+`/assets/lout.jpg'>

          </div>

        </a>

        <br>

        <hr class='hr-projects-min'>

        <br>

        <img class='in img-cyberia' alt='cyberiaonline.com' src='`+path+`/assets/cyberia_alpha.png'>

        <br>

        <div class='in content-txt-projects'>

          `+str3en+`

        </div>

        <br>

        <a target='_blank' class='link-out-projects' href='https://www.cyberiaonline.com/' alt='cyberiaonline.com'>

          <div class='in' style='text-align: center;'>

            cyberiaonline.com <img class='inl lout-projects' src='`+path+`/assets/lout.jpg'>

          </div>

        </a>

        <br>

        <br>

        <hr class='hr-projects'>

        <br>

        <br>

        <br>


    `);

  }

};

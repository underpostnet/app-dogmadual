var mod_projects = {

  init: function(){


    var str1en = "Virtual laboratory that develop technologies to web hosting service nexodev.org, and the virtual world cyberiaonline.com";
    var str1es = "Laboratorio virtual que desarrolla tecnologías para el servicio de alojamiento web nexodev.org, y el mundo virtual cyberiaonline.com";

    var str2en = "Web hosting service for Wordpress and multiplatform applications. It's also the service in charge of developing applications for clients that require it";
    var str2es = "Servicio de alojamiento web para Wordpress y aplicaciones multiplataforma. También es el servicio encargado de desarrollar aplicaciones para clientes que lo requieran";

    var str3en = "Multiplatform virtual world  with characteristics of a MMORPG (massively multiplayer online role-playing game) Complemented with the characteristics of modern social networks";
    var str3es = "Mundo virtual multiplataforma con características de un MMORPG (juego de rol multijugador masivo en línea) Complementado con las características de las redes sociales modernas";



    append('.main-content', `

      <div class='in title-projects'>

        OUR PROJECTS

        <br>

        <br>

        <br>

      </div>

      <div class='fl'>

          <div class='in fll pc1'>

            <br>

            <img class='in img-nexodev' alt='nexodev.org' src='`+path+`/assets/nexodev_alpha.png'>

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

          </div>

          <div class='in fll pc2'>

            <br>

            <img class='in img-underpost' alt='underpost.net' src='`+path+`/assets/underpost_alpha.png'>

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

          </div>

          <div class='in fll pc3'>

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

          </div>



      </div>

    `);

  }

};

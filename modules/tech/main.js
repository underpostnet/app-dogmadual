var mod_tech = {

  init: function(){


    const tech_header = [

      "SCRIPTING",
      "HTTP SERVER",
      "WEBSOCKET SERVER",
      "DNS & SSL SYSTEM",
      "HTTP PROXY SERVER",
      "API REST",
      "SESSION",
      "SQL DATABASE",
      "JSON DATABASE",
      "MAILER INTEGRATION",
      "LIVE MEDIA STREAM",
      "DATA ANALYTICS",
      "MATH SOLVER",
      "SYMMETRIC/ASYMMETRIC KEY SYSTEM",
      "BLOCKCHAIN",
      "BACKPROP NEURAL NETWORK (MLP)"

    ];

    const tech_data = [

      {
        name: "PHP",
        path: "/assets/tech_icon/php.png",
        state: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b']
      },
      {
        name: "NodeJS",
        path: "/assets/tech_icon/nodejs.svg",
        state: ['green', 'green', 'green', '#e3c70b', '#e3c70b', 'green', 'green', 'green', 'green', 'green', 'green', 'green', '#e3c70b', 'green', 'green', '#e3c70b']
      },
      {
        name: "Python",
        path: "/assets/tech_icon/python.png",
        state: ['green', 'green', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', 'green', '#e3c70b', '#e3c70b', 'green', 'green','#e3c70b', '#e3c70b', 'green']
      },
      {
        name: "C#",
        path: "/assets/tech_icon/c.png",
        state: ['green', 'green', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b','#e3c70b', '#e3c70b', '#e3c70b']
      },
      {
        name: "Scheme",
        path: "/assets/tech_icon/lambda.png",
        state: ['green', 'green', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', 'green', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b','#e3c70b', 'green', '#e3c70b']
      }

    ];


    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/

    append('.main-content', `

    <br>

    <br>

    <div class='space-pc-tech-legend-1' style='display: none; height: 100px;'></div>

    <div class='in content-legend-movil'>
      <div class='in tech-title' style='text-align: center;'>

      <a class='estandar-link' href='https://www.dogmadual.com/tech/'>SERVER <br> TECH STACK</a>

      </div>
      <div class='in tech-sub-title'> &nbsp;&nbsp;&nbsp; OPERATIVE <span class='abs legend-tech-color' style='color: green; font-size: 50px;'>•</span></div>
      <div class='in tech-sub-title'> &nbsp;&nbsp;&nbsp; PENDING <span class='abs legend-tech-color' style='color: #e3c70b; font-size: 50px;'>•</span></div>
    </div>

    <div class='space-pc-tech-legend-2' style='display: none; height: 30px;'></div>

    `);

    append('.main-content', `<div class='tech-content-movil' style='display: none;'></div>`);

    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/


    for(let i=0;i<l(tech_data);i++){

      let row_tech = '';

      console.log(tech_data[i]);

      for(let ii=0;ii<l(tech_data[i].state);ii++){

        row_tech = row_tech + `

        <div class='in row-tech'>

          <div class='inl row-1'>

            <div class='abs txt-row-1'>

              `+tech_header[ii]+`

            </div>

          </div>

          <div class='inl row-0'>

            <div class='abs center circle' style='background: `+tech_data[i].state[ii]+`;'>

            </div>

          </div>

        </div>

        `;

      }

      append('.tech-content-movil', `


      <br>

      <pad_0 class='in'>

        <pad_1 class='in'>

          <br>

          <div class='in title-language'>

            `+tech_data[i].name+`

          </div>

          <div class='in logo-tech'>

            <img class='abs center tech_icon' src='`+path+tech_data[i].path+`'>

          </div>

          `+row_tech+`

          <br>

          <br>

        </pad_1>

      </pad_0>





      `);

    }



    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/

    append('.main-content', `

    <div class='tech-content-pc' style='display: none;'>

      <br>

      <br>

      <br>

      <br>

      <div class='fl content-pc-fl'>

          <div class='fll row-pc-tech row-pc-tech-1' style='width: 25%;'>



          </div>

          <div class='fll row-pc-tech row-pc-tech-2' style='width: 15%;'>



          </div>

          <div class='fll row-pc-tech row-pc-tech-3' style='width: 15%;'>



          </div>

          <div class='fll row-pc-tech row-pc-tech-4' style='width: 15%;'>



          </div>

          <div class='fll row-pc-tech row-pc-tech-5' style='width: 15%;'>



          </div>

          <div class='fll row-pc-tech row-pc-tech-6' style='width: 15%;'>



          </div>


      </div>

      <br>

      <br>

      <br>

      <br>

    </div>


    `);


      append('.row-pc-tech-1', `


      <div class='in co-pc' style='height: 123px;'>

      </div>

      <br>


      `);

      for(let i=0;i<l(tech_header);i++){

        append('.row-pc-tech-1', `


        <div class='in co-pc'>

          <div class='in txt-tech-pc'>`+tech_header[i]+`</div>

        </div>


        `);

      }

      for(let i=0;i<l(tech_data);i++){

        append(('.row-pc-tech-'+(i+2)), `

        <div class='in title-language'>

          `+tech_data[i].name+`

        </div>

        <br>

        <div class='in co-pc' style='height: 100px;'>

          <img class='in img-logo-tech-pc' src='`+path+tech_data[i].path+`'>

        </div>


        `);

        for(let ii=0;ii<l(tech_data[i].state);ii++){

          append(('.row-pc-tech-'+(i+2)), `


          <div class='in co-pc'>

            <div class='abs center circle' style='background: `+tech_data[i].state[ii]+`;'>

            </div>

          </div>


          `);

        }

      }



    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/



  }

};

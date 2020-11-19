var mod_realtime_tech = {

  init: function(){

    const tech_header = [

      "SCRIPTING",
      "HTTP SERVER",
      "WEBSOCKET SERVER",
      "DNS & SSL SYSTEM",
      "PROXY SERVER",
      "API REST",
      "SESSION",
      "DATABASE INTEGRATION",
      "MAILER INTEGRATION",
      "DATA ANALYTICS",
      "MATH SOLVER"

    ];

    const tech_data = [

      {
        name: "PHP",
        path: "/assets/tech_icon/php.png",
        state: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', '#e3c70b', '#e3c70b']
      },
      {
        name: "NodeJS",
        path: "/assets/tech_icon/nodejs.svg",
        state: ['green', 'green', 'green', '#e3c70b', '#e3c70b', 'green', 'green', 'green', '#e3c70b', '#e3c70b', '#e3c70b']
      },
      {
        name: "Python",
        path: "/assets/tech_icon/python.png",
        state: ['green', 'green', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', 'green', '#e3c70b', 'green', 'green']
      },
      {
        name: "C#",
        path: "/assets/tech_icon/c.png",
        state: ['green', 'green', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b', '#e3c70b']
      }

    ];


    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/


    append('body', `

    <div class='in tech-title' style='text-align: center;'>SERVER <br> TECH STACK</div>
    <div class='in tech-sub-title'> &nbsp;&nbsp;&nbsp; OPERATIVE <span class='abs legend-green' style='color: green; font-size: 50px;'>•</span></div>
    <div class='in tech-sub-title'> &nbsp;&nbsp;&nbsp; PENDING <span class='abs legend-green' style='color: #e3c70b; font-size: 50px;'>•</span></div>

    `);


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

      append('body', `


      <br>

      <pad_0 class='in'>

        <pad_1 class='in'>

          <br>

          <div class='in sub-tech-title'>

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

  }

};

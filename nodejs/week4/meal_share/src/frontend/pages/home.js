window.handleHomeRequest = () => {
  document.body.innerHTML = ` <script>document.title="home"</script>
  <style>
      img{
          position: fixed;
          left: 0px;
          top: 0px;
          right: 0px;
          height: 100vh;
          width: 100vw;
          opacity: 0.7;
          margin: 0;
          padding: 0px;
      }
      main{
          border: solid black 1px;
          height: 100vh;
      }
      a{      
          position: relative;   
          top:90%;
          margin-left: 47%;
      }
    
      footer{
          text-align: center;
      }
      h3{
          color: maroon;
          opacity:0.9;
      }
  </style>
  <img src="background.jpg" alt="" srcset="">
  <main>
     <a href="meals" data-navigo>Main menu</a>
  </main>
  <footer>
      <h3>Ali baba best food in Estonia.for more info pleass contact on: <br> Mobil. 29920518 Email. dr.wael85@gmail.com</h3>
  </footer> `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
/*<h1>Home</h1>
  <a href="meals" data-navigo>Meals</a>
  asd
  <a href="meal/1" data-navigo>meal/1</a>
  <a href="home" data-navigo>home</a>*/
 
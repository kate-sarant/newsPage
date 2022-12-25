
<!DOCTYPE html>
<html lang-"en" style="margin:8px;">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content=" width=device-width, initital-scale=1.0">
        <title>News</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/styles_header.css">
        <link rel="stylesheet" href="main_styles.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script type="text/javascript" src="footer_header/header_script.js">

        </script>

    </head>
    <script type="text/javascript">
       $(function(){
         $('#more').hover(
           function(){
             $('#submenu1',this).slideDown(500);
           },
           function(){
             $('#submenu1',this).slideUp(300);
           }

         )
       });

    </script>

    <body>
      <header id="header">
        <div class="scroll_news">

        </div>
        <div class="hamberger_menu">
          <div class=icon_home><a href="myphp.php"><i class="fa fa-home  fa-2x"></i></a></div>
          <div  class="social">
            <a href="https://www.instagram.com/"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
            <a href="https://twitter.com/?lang=en"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
              <a href="https://facebook.com/?lang=en"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
          </div>


          <div class="label">
                <img src="assets/photos/news-photo-editor (1).png" alt="news">
          </div>
          <div class="date_and_time">

              <p><?=date('l d,F Y')?></p>
              <p ><i class="fa fa-clock-o" > </i>
                <?=date('H:i')?> Athens,GR</p>
          </div>

            <!-- weather wiget -->
              <div class="frame_weather">
                  <div class="weather">
                    <h6 class="city">Weather in Athens</h6>
                  <div class="">
                    <div class="temp_icon_weather">
                      <div class="temp">51℃</div>
                      <img src="" alt="weather_icon" class="icon">
                    </div>
                    </div>
                  </div>
              </div>

          </div>
      </div>


<!-- menu starts -->

          <hr>
      <div class="navbar">
        <div class="dropdown" id="more">
          <button class="dropbtn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list"id="button_menulist" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>

          </button>
          <div class="dropdown-content" id="submenu1">
            <a href="index.php">news</a>
            <a href="sports_news.php">sports</a>
            <a href="health_page.php">health</a>
            <a href="economics_page.php">business</a>
            <a href="science_page.php">science</a>
          </div>
        </div>
          <a class="menu_item" href="index.php">news</a>
          <a class="menu_item" href="sports_news.php">sports</a>
          <a class="menu_item" href="health_page.php">health</a>
          <a class="menu_item" href="economics_page.php">business</a>
          <a class="menu_item" href="science_page.php">science</a>



        </div>
        <!-- menu ends -->
          <hr>
          <button id="top_btn"type="button" name="button"><a href="#header"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
        </svg></a>
          </button>

      </header>

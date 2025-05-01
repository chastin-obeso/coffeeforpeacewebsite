
function openNav() {
    document.getElementById("sidenav").style.display = "flex";
    document.getElementById("navbarlinks-mobile").style.width = "50vw";
    console.log("open");
  }
  

function closeNav() {
    document.getElementById("sidenav").style.display = "none";
    document.getElementById("navbarlinks-mobile").style.width = "0vw";
  }

const desktop = window.matchMedia("(min-width: 1025px)");
const image = document.getElementById('fb');
  image.addEventListener('mouseover', function() {
    if(desktop.matches){
      image.src = '/Img/facebook-hover.png';
    }
  });

  image.addEventListener('mouseout', function() {
    if(desktop.matches){
      image.src = '/Img/facebook.png'; 
    }
  });

const image2 = document.getElementById('ig');
  image2.addEventListener('mouseover', function() {
    if(desktop.matches){
      image2.src = '/Img/instagram-hover.png';
    }
  });

  image2.addEventListener('mouseout', function() {
    if(desktop.matches){
      image2.src = '/Img/instagram.png'; 
    }
  });

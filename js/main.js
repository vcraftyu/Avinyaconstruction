// Navbar
function toggleContainerClass() {
    if (window.innerWidth < 992) {
        document.querySelector('.navbar-collapse').classList.remove('container');
    } else {
        document.querySelector('.navbar-collapse').classList.add('container');
    }
  }
  
  window.addEventListener('resize', toggleContainerClass);
  window.addEventListener('load', toggleContainerClass);
  
  
  
      // Initiate the wowjs
      new WOW().init();
  
      // Facts counter
      $('.counter').counterUp({
          delay: 10,
          time: 2000
      });

      
      $(document).ready(function() {
        $(".gallery-link").click(function() {
            var filter = $(this).data("filter");
    
            $(".gallery-link").removeClass("active");
            $(this).addClass("active");
    
            if (filter == "all") {
                $("#gallery .col-lg-4").show();
            } else {
                $("#gallery .col-lg-4").hide();
                $("#gallery .col-lg-4[data-category='" + filter + "']").show();
            }
        });
    });
    // preloader js code

document.addEventListener("DOMContentLoaded", function() {
    showPreloader(); 
    setTimeout(hidePreloader, 1500); 
    document.body.style.overflow = "hidden";
});

function showPreloader() {
    var preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "flex";
    }
}

function hidePreloader() {
    var preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
        document.body.style.overflow = ""; 
    }
}
window.addEventListener("load",function(){
    this.setTimeout(
        function open(e){
            document.querySelector(".otp-Form").style.display = "block";
        },
        3000
    )
});

document.querySelector('.exitBtn').addEventListener("click",function(){
    document.querySelector(".otp-Form").style.display = "none";
});
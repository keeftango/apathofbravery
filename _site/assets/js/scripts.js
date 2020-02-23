$(document).ready(function(){

    /* Change phone number to call me button on window resize AND load */
    $(document).ready(phone);
    $(window).resize(phone);
    function phone(){
        if ($(window).width() < 700) {
            $(".callMe").html("<i class='fas fa-mobile-alt fa-fw'></i> Call me");
        } else {
            $(".callMe").html("<i class='fas fa-mobile-alt fa-fw'></i> +(44) 7892861976");
        }
    }

    /* START - Case study add/remove CSS class with media queries */
    function myFunction(x) {
      if (x.matches) { // If media query matches
          $( "div.supporting-block" ).removeClass( "myClass" );
      } else {
          $( "div.supporting-block" ).addClass( "myClass" );
      }
    }
    var x = window.matchMedia("(max-width: 767px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

    /* START - Page transition */
    /* https://blog.adam-marsden.co.uk/minimal-page-transitions-with-jquery-css-d97f692d5292?gi=44397e13a1ef */
    $(function() {

        $('.cs__button').each(function() {
            /* [1] */
            if (location.hostname === this.hostname || !this.hostname.length) {
                /* [1] */

                var link = $(this).attr("href"); /* [2] */

                if (link.match("^#")) {
                    /* [3] */

                    $(this).click(function() {
                        var target = $(link); /* [4] */
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); /* [4] */
                        if (target.length) {
                            $('html,body').animate({
                                /* [5] */
                                scrollTop: target.offset().top - 70 /* [5] */
                            }, 1000);
                            return false; /* [5] */
                        }
                    });

                } else if (link.match("^mailto")) {
                    /* [6] */
                    // Act as normal  /* [6] */
                } else {

                    $(this).click(function(e) {
                        e.preventDefault(); /* [7] */
                        $('html').addClass('fadeSiteOut'); /* [8] */
                        setTimeout(function() {
                            /* [9] */
                            window.location = link; /* [9] */
                        }, 500); /* [9] */
                    });

                }

            }
        });

    });
    /* END - Page transition */

});

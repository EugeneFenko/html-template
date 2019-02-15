var AOS = require('aos');

//CSSans 
function CSSans(s,n){var c='<div class="cssans__word">',e='<div class="cssans__accessible">'+encodeURI(n)+"</div>"+c;for(var i in n)e+=" "==n[i]?"</div>"+c:'<b class="cssans:'+encodeURI(n[i])+'"></b>';return e+="</div>",s.innerHTML=e,s.style.lineHeight="0px",e}
// CSSans-conf
let myName = document.getElementById('header__name');
CSSans(myName, 'Eugene Fenko');

$(document).ready(function () {
    
    // AOS
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    // OwlCarousel
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false,
        loop: true,
        margin: 0,
        dots: false,
        margin: 0,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
                // mergeFit:true
            },
            1000: {
                items: 3,
                // mergeFit:true
            }
        }
    })



    //Contact form
    $('.contact-form').find('.form-control').each(function () {
        var targetItem = $(this).parent();
        if ($(this).val()) {
            $(targetItem).find('label').css({
                'top': '10px',
                'fontSize': '14px'
            });
        }
    })
    $('.contact-form').find('.form-control').focus(function () {
        $(this).parent('.input-block').addClass('focus');
        $(this).parent().find('label').animate({
            'top': '10px',
            'fontSize': '14px'
        }, 300);
    })
    $('.contact-form').find('.form-control').blur(function () {
        if ($(this).val().length == 0) {
            $(this).parent('.input-block').removeClass('focus');
            $(this).parent().find('label').animate({
                'top': '25px',
                'fontSize': '18px'
            }, 300);
        }
    })


    // Scroll
    $('.goto').click(function () { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    })

});

// // Animation
// $(document).ready(function () {

//     $('.about_img img').hover(function () {
//         // over
//         $('.about_img img').addClass('floater');
//     }, function () {
//         // out
//         $('.about_img img').removeClass('floater');
//     }
//     );
// });

//ActiveMenu
var menu_selector = ".navbar-nav"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function () {
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top - 100 <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$(document).ready(function () {

    $(document).on("scroll", onScroll);

    $("a[href^='#']").click(function (e) {
        e.preventDefault();

        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function () {
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });

    });

});


$(window).scroll(function () {
    var full = $("#header").outerHeight();
    var the_top = $(document).scrollTop();
    if (the_top > full) {
        $('.navbar').addClass('FixNav');
        $('#about').css('margin-top', "56px");
    }
    else {
        $('.navbar').removeClass('FixNav');
        $('#about').css('margin-top', "0px");
    }
});

$(document).ready(function () {
    var page = $('#main-wrap');
    $(window).on('scroll',function (event, delta, deltaX, deltaY) {
        if (delta < 0) page.scrollTop(page.scrollTop() + 65);
        else if (delta > 0) page.scrollTop(page.scrollTop() - 65);
        return false;
    })
});


// GetYear
const nowDate = new Date;
document.getElementById('copyYear').textContent = nowDate.getFullYear();

// GitHub User Data Fetch
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const github_div = document.getElementById("github-data");

fetch("https://api.github.com/users/EugeneFenko").then( data =>{
    data.json().then(
        user => {
          div_data = createNode('div')
          div_data.className = "row"
          div_data.innerHTML = `
              <div class="col-12 col-sm-6">
                <p><i class="fas fa-map-marker-alt"></i> ${user.location}</p>
                <p><i class="fab fa-github"></i> <a target="_blank" href="${user.html_url}">${user.company}</a></p>
              </div>
              <div class="col-12 col-sm-6">
                <p><i class="fas fa-users"></i> Followers: ${user.followers}</p>
                <p><i class="fas fa-bookmark"></i> Following: ${user.following}</p>
              </div>
              <div class="col-12 col-lg-6">
              <p><i class="fas fa-link"></i> <a target="_blank" href="https://${user.blog}">${user.blog}</a></p>
              <p><i class="fab fa-free-code-camp"></i> <a target="_blank" href="https://www.freecodecamp.org/eugenefenko">freeCodeCamp</a></p>
              </div>
              <div class="col-12 col-lg-6">
                <p><i class="fas fa-folder-open"></i> Public repositories: ${user.public_repos}</p>
              </div>
          `;
          append(github_div, div_data);
        //   console.log(user)
        });
});


console.info("👋 Hello, hacker!")
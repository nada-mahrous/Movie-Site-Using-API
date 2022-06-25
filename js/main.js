/* data */
let movies = [];





/* ******************************* side nav ******************************* */
let divWidth = $('.nav-tab-menu').innerWidth() - 10
    , isTrue = !0;
$(".strip-toggel-menu").click(function () {
    isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"),

        $(".strip-header-nav").css("left", divWidth),
        $(".nav-tab-menu .item1").animate({ opacity: "1", paddingTop: "25px" }, 1100),
        $(".nav-tab-menu .item2").animate({ opacity: "1", paddingTop: "25px" }, 1200),
        $(".nav-tab-menu .item3").animate({ opacity: "1", paddingTop: "25px" }, 1300),
        $(".nav-tab-menu .item4").animate({ opacity: "1", paddingTop: "25px" }, 1400),
        $(".nav-tab-menu .item5").animate({ opacity: "1", paddingTop: "25px" }, 1500),
        $(".nav-tab-menu .item6").animate({ opacity: "1", paddingTop: "25px" }, 1600),
        isTrue = !isTrue) :
        ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"),
            $(".strip-header-nav").css("left", 0),
            isTrue = !isTrue)
});
/* ******************************* end side nav ******************************* */

//nicescroll
$("a[href ^= '#']").click(function (e) {

    let linkHref = $(e.target).attr('href');
    let sectionOffset = $(linkHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 500)
})

/* ******************************* start spinner loading ******************************* */
$(document).ready(function () {

    $("#loading .spinner").fadeOut(100, function () {
        $("#loading").fadeOut(100, function () {
            $("#loading").remove();
            $("body").css('overflow-y', 'auto')
        })

    })
})

/* ******************************* end spinner loading ******************************* */


const baseUrl = "https://api.themoviedb.org";
let popularURL = `${baseUrl}/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`,
    topratedURL = `${baseUrl}/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`,
    trendingURL = `${baseUrl}/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`,
    upcomingURL = `${baseUrl}/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
searchByName = document.getElementById("allMovies"),
    searchByword = document.getElementById("word");
sideNavItems = document.querySelectorAll('.nav-tab-menu.open-menu ul li');
const apiUrlNow = `${baseUrl}/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`;


getApi(apiUrlNow);

async function getApi(apiUrlNow) {
    let response = await fetch(apiUrlNow);
    let finalResponse = await response.json();
    console.log(finalResponse.results);
    movies = finalResponse.results;
    displayMovies(movies);
}
/* search on page */
function search(e) {
    const movieTitle = e.target.value
    let filterMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(movieTitle.toLowerCase()) // true , false
    });
    // display filter movies >> 1
    displayMovies(filterMovies);
}


/* func to display */
function displayMovies(treandingMovies) {
    let cartona = ''
    for (let i = 0; i < treandingMovies.length; i++) {
        cartona += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
        <div class="movie shadow rounded position-relative">
            <div class="post">
                <img src="https://image.tmdb.org/t/p/w500${treandingMovies[i].poster_path}" class="img-fluid rounded" alt="">
                <div class="layer d-flex align-items-center ">
                    <div class="info p-0">
                        <h2>${treandingMovies[i].title}</h2>
                        <p>${treandingMovies[i].overview}</p>
                        <p>rate: ${treandingMovies[i].vote_average}</p>
                        <p>${treandingMovies[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById('rowData').innerHTML = cartona;
}

/* func to search by word */
searchByName.addEventListener('input', function (e) {
    console.log(searchByName.value);

    e.preventDefault();
    // searchValue = searchByName.value;
    if (searchByName.value !== '') {
        // getApi(apiSearch+searchByName.value);
        getApi(`https://api.themoviedb.org/3/search/movie?query=${searchByName.value}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false` + searchByName.value);
        // searchByName.value = '';
    }
    else {
        window.location.reload();
    }
})

/* func to show some type of moveis */
function filterType(type) {
    upcomingURL
    let apiType;
    switch (type) {
        case 'now-playing':
            apiType = apiUrlNow;
            break;
        case 'popular':
            apiType = popularURL;
            break;
        case 'top-rated':
            apiType = topratedURL;
            break;
        case 'trending':
            apiType = trendingURL;
            break;
        case 'upcoming':
            apiType = upcomingURL;
            break;
        default: return;
    }
    getApi(apiType);
}

//  let items = $('#item');
//  items.click(function (e) {
//     console.log('hello');
//     // let bgColor = $(e.target).css('backgroundColor');
//     // $('h2').css('color', bgColor)
// })

/* ******************************** */


/* ******************************* contactus ******************************* */

let userName = document.getElementById("name")
    , userEmail = document.getElementById("email")
    , userPhone = document.getElementById("phone")
    , userAge = document.getElementById("age")
    , userPassword = document.getElementById("password")
    , userRePassword = document.getElementById("rePassword")
    , userNameAlert = document.getElementById("namealert")
    , userEmailAlert = document.getElementById("emailalert")
    , userPhoneAlert = document.getElementById("phonealert")
    , userAgeAlert = document.getElementById("agealert")
    , userpasswordAlert = document.getElementById("passwordalert")
    , userRepasswordAlert = document.getElementById("repasswordalert");


/* userName */
userName.addEventListener('input', function () {
    let regaxName = /^[a-z]{3,} {0,1}$/
    if (regaxName.test(userName.value) == true) {
        console.log('true');
        userNameAlert.style.display = "none"
        $('.contact .name input').addClass('is-valid');
        $('.contact .name input').removeClass('is-invalid');
    }
    else {
        userNameAlert.style.display = "block"
        $('.contact .name input').addClass('is-invalid');
        $('.contact .name input').removeClass('is-valid');
    }
})

/* userEmail */
userEmail.addEventListener('input', function () {
    let regaxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regaxEmail.test(userEmail.value) == true) {
        console.log('true');
        userEmailAlert.style.display = "none"
        $('.contact .email input').addClass('is-valid');
        $('.contact .email input').removeClass('is-invalid');

    }
    else {
        userEmailAlert.style.display = "block"
        $('.contact .email input').addClass('is-invalid');
        $('.contact .email input').removeClass('is-valid');


    }
})

/* userPhone */
userPhone.addEventListener('input', function () {
    let regaxEmail = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (regaxEmail.test(userPhone.value) == true) {
        console.log('true');
        userPhoneAlert.style.display = "none"
        $('.contact .phone input').addClass('is-valid');
        $('.contact .phone input').removeClass('is-invalid');

    }
    else {
        userPhoneAlert.style.display = "block"
        $('.contact .phone input').addClass('is-invalid');
        $('.contact .phone input').removeClass('is-valid');


    }
})

/* userAge */
userAge.addEventListener('input', function () {
    let regaxEmail = /^[1-9][0-9]?$|^100$/
    if (regaxEmail.test(userAge.value) == true) {
        console.log('true');
        userAgeAlert.style.display = "none"
        $('.contact .age input').addClass('is-valid');
        $('.contact .age input').removeClass('is-invalid');

    }
    else {
        userAgeAlert.style.display = "block"
        $('.contact .age input').addClass('is-invalid');
        $('.contact .age input').removeClass('is-valid');


    }
})

/* userPassword */
userPassword.addEventListener('input', function () {
    let regaxEmail = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (regaxEmail.test(userPassword.value) == true) {
        console.log('true');
        userpasswordAlert.style.display = "none"
        $('.contact .password input').addClass('is-valid');
        $('.contact .password input').removeClass('is-invalid');

    }
    else {
        userpasswordAlert.style.display = "block"
        $('.contact .password input').addClass('is-invalid');
        $('.contact .password input').removeClass('is-valid');


    }
})

/* userRePassword */
userRePassword.addEventListener('input', function () {
    let regaxEmail= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (userPassword.value == userRePassword.value) {
        console.log('true');
        userRepasswordAlert.style.display = "none"
        $('.contact .password input').addClass('is-valid');
        $('.contact .password input').removeClass('is-invalid');

    }
    else {
        userRepasswordAlert.style.display = "block"
        $('.contact .password input').addClass('is-invalid');
        $('.contact .password input').removeClass('is-valid');


    }
})



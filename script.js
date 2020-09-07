// Wrap every letter in a span
$( document ).ready(function() {
    var offSet = 1700
    setTimeout(function(){ navBarAnimate()}, offSet + 900);
    setTimeout(function(){ frontEndTitle();}, offSet + 500);
    setTimeout(function(){ OlegNosyrevTitle()}, offSet + 1500);
    setTimeout(function(){ locationTitle()}, offSet + 2200);
    setTimeout(function(){ scrollAnimate()}, offSet + 3800);

    document.querySelectorAll('.theme').forEach(link => {
        link.onclick = () => {
        
            // changing css file
            var oldlink = document.getElementsByTagName("link").item(5);
        
            var newlink = document.createElement("link");
            newlink.setAttribute("rel", "stylesheet");
            newlink.setAttribute("type", "text/css");
            newlink.setAttribute("href", `css/${link.dataset.page}.css`);
            
            // adding/removing leafs
            if(link.dataset.page == "ocean")
            {
                document.getElementById("theme_change").className = "container-leaf";
            }
            else
            {
                document.getElementById("theme_change").className = "container-leaf snow-bg";
            }

            // conclusion
            document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
            
            }
    });
});

function sendMail() {
    var link = "mailto:oleg.ymmy@gmail.com"
             + "?cc=chem-pion@mail.ru"
             + "&subject=" + encodeURIComponent(document.getElementById('mySubject').value)
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}

// Good Morning Animate
function frontEndTitle()
{
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper.style.opacity = "1"
        anime.timeline({loop: false})
        .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 250,
            delay: (el, i) => 50 * (i+1)
        }).add({
            targets: '.ml3',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
        setTimeout(function(){ textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "$&");}, 1500);
}
// Oleg Nosyrev Animate
function OlegNosyrevTitle()
{
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml14');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper.style.opacity = "1"
    anime.timeline({loop: false})
    .add({
        targets: '.ml14 .letter',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
    }).add({
        targets: '.ml14 .letter',
        translateY: [0,0],
        opacity: [1,1],
        translateZ: 1,
        easing: "easeInExpo",
        duration: 1200,
        delay: (el, i) => 100 + 30 * i
    });
    setTimeout(function(){ textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "$&");}, 1500);
}
// Location Animate
function locationTitle()
{
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml16');
    var icon = `<i class="fas fa-map-marker-alt letter"></i>`
    textWrapper.innerHTML = icon + textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper.style.opacity = "1"
    anime.timeline({loop: false})
    .add({
        targets: '.ml16 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml16 .letter',
        translateX: [0,0],
        opacity: [1,1],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    });
    setTimeout(function(){ textWrapper.innerHTML = icon + textWrapper.textContent.replace(/\S/g, "$&");}, 1500);
    
}

// navBar animate
function navBarAnimate()
{
    var textWrapper = document.querySelector('.navbar');
    
    anime.timeline({loop: false})
    .add({
        targets: '.navbar',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
    })
}

function scrollAnimate()
{
    var textWrapper = document.querySelector('#arrow-link');
    textWrapper.style.opacity = "1";
    anime.timeline({loop: false})
    .add({
        targets: '#arrow-link',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
    })
}
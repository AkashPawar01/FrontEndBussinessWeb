function northland(){
    var tl = gsap.timeline();
    tl.to("#loader",{
        top : "-20%",
        height : 0,
        duration : 0.5,
        stagger : 1,
        delay : 2,
    })   
tl.to("#main #img img",{
    scale : 0.6,
    rotate : "5deg",

     scrollTrigger : {
        trigger : "#northland",
        scroller :"body",
        // markers : true,
        scrub : 5,
        start : "top",
        // end : "bottom",    
     }
})
}
function head(){
    var tl3 = gsap.timeline();
    tl3.to("#main>h1",{
        top : "-1%",
        // left : "13%",
        opacity : 1,
        duration : 0.5,
        rotate : 0,
        
        scrollTrigger: {
            trigger : "#main>h1",
            scroller : "body",
            // markers : true,
            start : "top",
            end : "bottom 30%",
            scrub : 4,
        }
    },"a")
}
function sidehead(){
    var tl2 = gsap.timeline();
    tl2.to(".sidehead",{
        top : "-1%",
        // left : "13%",
        opacity : 1,
        duration : 1,
        rotate : "-90deg",
        
        scrollTrigger: {
            trigger : "#main>h1",
            scroller : "body",
            // markers : true,
            start : "top",
            end : "bottom 30%",
            scrub : 4,
        }
    },"a")
    tl2.to("#note-box",{
        top : "30%",
        duration : 1,
        
        scrollTrigger: {
            trigger : "#main>h1",
            scroller : "body",
            // markers : true,
            start : "top",
            end : "bottom 20%",
            scrub : 4,
        }
    },"a")
}
function yes(){
    // var pro1 = document.querySelector("#proje");
   var crcl = document.querySelector(".crcl");
   var circle2 = document.querySelector(".circle2");
   var crh2 = document.querySelector(".crcl h2")
    crcl.addEventListener("mouseover", function(){
        circle2.style.height = "100%";
        circle2.style.width = "100%";
        crh2.textContent = "Let's work together"
        crh2.style.color = "Black";
        crh2.style.letterSpacing = "2px";


    })
    crcl.addEventListener("mouseleave", function(){
        circle2.style.height = "0%";
        circle2.style.width = "0%";
        crh2.style.letterSpacing = "7px";
        crh2.style.color = "white";
        crh2.textContent = "Yep";

    })
}
function nope(){
    // var pro1 = document.querySelector("#proje");
   var no = document.querySelector(" #nope");
   var circle3 = document.querySelector(".circle3");
   var noh2 = document.querySelector("#nope h2")
    no.addEventListener("mouseover", function(){
        circle3.style.height = "100%";
        circle3.style.width = "100%";
        noh2.textContent = "I'II KEEP TRING";
        noh2.style.color = "Black";
        noh2.style.letterSpacing = "3px";


    })
    no.addEventListener("mouseleave", function(){
        circle3.style.height = "0%";
        circle3.style.width = "0%";
        noh2.style.letterSpacing = "7px";
        noh2.style.color = "white";
        noh2.textContent = "Nope"

    })
}
function bottom(){
    var tl8 = gsap.timeline();
    tl8.from("#bottom a", {
        top:"25%",
        duration : 0.1,
        opacity : 0,
        // rotate : 5,
    
        scrollTrigger: {
            trigger: "#bottom",
            scroller: "body",
            // markers: true,
            scrub: 4,
            start: "top 90%",
        }
    },"a")  
    tl8.to("#bottom #line", {
        duration : 0.2,
        width : "1050px",
    
        scrollTrigger: {
            trigger: "#bottom",
            scroller: "body",
            // markers: true,
            scrub: 5,
            start: "top 80%",
            end: "bottom",
        }
    },"a")  
}
head() ;
northland();
sidehead();
yes();
nope();
bottom();
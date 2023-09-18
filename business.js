function loader(){
    var tl9 = gsap.timeline();
tl9.to("#loader",{
    top : "-20%",
    height : 0,
    duration : 0.5,
    stagger : 1,
    delay : 5,
})
}
function section1(){
var tl = gsap.timeline();
tl.to("#section1 #left",{
    top : "-20%",
    duration : 0.1,
    stagger : 1,

     scrollTrigger : {
        trigger : "#section1 #left",
        scroller :"body",
        // markers : true,
        scrub : 3,
        start : "top",
        end : "top 40%"
     }

})
tl.to("#section1 h1", {
    top: "5%",
    duration : 0.1,
    opacity : 0,
    // stagger : 5,
    rotate : 5,

    scrollTrigger: {
        trigger: "#section1 h1",
        scroller: "body",
        // markers: true,
        scrub: 2,
        start: "top 20%",
        end: "bottom 60%",
    }
},"a")     
tl.to("#section1 h4", {
    top: "45%",
    opacity :0,
    stagger : 1,
    rotate : 5,
    duration : 0.1,

    scrollTrigger: {
        trigger: "#section1 h1",
        scroller: "body",
        // markers: true,
        scrub: 2,
        start: "top 20%",
        end: "bottom 60%",
    }
},"a")     
tl.to("#section1 p", {
    top: "70%",
    opacity :0,
    delay : 1,
    stagger : 1,
    rotate : 5,
    duration : 0.1,

    scrollTrigger: {
        trigger: "#section1 h1",
        scroller: "body",
        // markers: true,
        scrub: 2,
        start: "top 20%",
        end: "bottom 60%",
    }
})    
}
function section2(){
    var tl2 = gsap.timeline();
    tl2.to("#section2>h1",{
        top : "-1%",
        left : "13%",
        opacity : 1,
        duration : 3,
        rotate : 0,
        
        scrollTrigger: {
            trigger : "#section2>h1",
            scroller : "body",
            // markers : true,
            start : "top 50%",
            end : "bottom 70%",
            scrub : 4,
        }
    },"a")
    tl2.to("#section2 #left img",{
        scale :1.3,
        
        scrollTrigger: {
            trigger : "#section2 #left img",
            scroller : "body",
            // markers : true,
            start : "top 40%",
            end : "bottom 80%",
            scrub : 4,
        }
    },"a")
    tl2.to("#section2 .number",{
        top : "1%",
        duration : 1,
        
        scrollTrigger: {
            trigger : "#section2 .web",
            scroller : "body",
            // markers : true,
            start : "top 70%",
            scrub : 4,
        }
    },"a")
   var pro1 = document.querySelector("#project2");
   var circle2 = document.querySelector("#circle2");
   var prohead1 = document.querySelector("#project2>a")
    pro1.addEventListener("mouseover", function(){
        circle2.style.height = "100%";
        circle2.style.width = "100%";
        prohead1.style.letterSpacing = "0px";

    })
    pro1.addEventListener("mouseleave", function(){
        circle2.style.height = "0%";
        circle2.style.width = "0%";
        prohead1.style.letterSpacing = "7px";

    })
}
function section3(){
    var tl3 = gsap.timeline();
    tl3.to("#section3>h1",{
        top : "-1%",
        left : "13%",
        opacity : 1,
        duration : 3,
        rotate : 0,
        
        scrollTrigger: {
            trigger : "#section3>h1",
            scroller : "body",
            // markers : true,
            start : "top 50%",
            end : "bottom 70%",
            scrub : 4,
        }
    },"a")
    tl3.to("#section3 #left img",{
        scale :1.3,
        left : "-10%",
        
        scrollTrigger: {
            trigger : "#section3 #left img",
            scroller : "body",
            // markers : true,
            start : "top 40%",
            end : "bottom 80%",
            scrub : 4,
        }
    },"a")
    tl3.to("#section3 .number",{
        top : "1%",
        duration : 1,
        
        scrollTrigger: {
            trigger : "#section3 .web",
            scroller : "body",
            // markers : true,
            start : "top 60%",
            scrub : 5,
        }
    },"a")
   var pro3 = document.querySelector("#project3");
   var circle3 = document.querySelector("#circle3");
   var prohead3 = document.querySelector("#project3>a")
    pro3.addEventListener("mouseover", function(){
        circle3.style.height = "100%";
        circle3.style.width = "100%";
        prohead3.style.letterSpacing = "0px";

    })
    pro3.addEventListener("mouseleave", function(){
        circle3.style.height = "0%";
        circle3.style.width = "0%";
        prohead3.style.letterSpacing = "7px";

    })
}
function section4(){
    var tl4 = gsap.timeline();
    tl4.to("#section4>h1",{
        top : "-1%",
        left : "13%",
        opacity : 1,
        duration : 3,
        rotate : 0,
        
        scrollTrigger: {
            trigger : "#section4>h1",
            scroller : "body",
            // markers : true,
            start : "top 50%",
            end : "bottom 70%",
            scrub : 4,
        }
    },"a")
    tl4.to("#section4 #left img",{
        scale :1.3,
        
        scrollTrigger: {
            trigger : "#section4 #left img",
            scroller : "body",
            // markers : true,
            start : "top 40%",
            end : "bottom 80%",
            scrub : 4,
        }
    },"a")
    tl4.to("#section4 .number",{
        top : "1%",
        duration : 1,
        
        scrollTrigger: {
            trigger : "#section4 .web",
            scroller : "body",
            // markers : true,
            start : "top 60%",
            scrub : 5,
        }
    },"a")
   var pro4 = document.querySelector("#project4");
   var circle4 = document.querySelector("#circle4");
   var prohead4 = document.querySelector("#project4>a")
    pro4.addEventListener("mouseover", function(){
        circle4.style.height = "100%";
        circle4.style.width = "100%";
        prohead4.style.letterSpacing = "0px";

    })
    pro4.addEventListener("mouseleave", function(){
        circle4.style.height = "0%";
        circle4.style.width = "0%";
        prohead4.style.letterSpacing = "7px";

    })
}
function section5(){
    var tl5 = gsap.timeline();
    tl5.to("#section5>h1",{
        top : "-1%",
        left : "13%",
        opacity : 1,
        duration : 3,
        rotate : 0,
        
        scrollTrigger: {
            trigger : "#section5>h1",
            scroller : "body",
            // markers : true,
            start : "top 50%",
            end : "bottom 70%",
            scrub : 4,
        }
    },"a")
    tl5.to("#section5 #left img",{
        scale :1.3,
        
        scrollTrigger: {
            trigger : "#section5 #left img",
            scroller : "body",
            // markers : true,
            start : "top 40%",
            end : "bottom 80%",
            scrub : 4,
        }
    },"a")
    tl5.to("#section5 .number",{
        top : "1%",
        duration : 1,
        
        scrollTrigger: {
            trigger : "#section5 .web",
            scroller : "body",
            // markers : true,
            start : "top 60%",
            scrub : 5,
        }
    },"a")
   var pro5 = document.querySelector("#project5");
   var circle5 = document.querySelector("#circle5");
   var prohead5 = document.querySelector("#project5>a")
    pro5.addEventListener("mouseover", function(){
        circle5.style.height = "100%";
        circle5.style.width = "100%";
        prohead5.style.letterSpacing = "0px";

    })
    pro5.addEventListener("mouseleave", function(){
        circle5.style.height = "0%";
        circle5.style.width = "0%";
        prohead5.style.letterSpacing = "7px";

    })
}
function section6(){
    var tl6 = gsap.timeline();
    tl6.to("#section6>h1",{
        top : "-1%",
        left : "13%",
        opacity : 1,
        duration : 3,
        rotate : 0,
        
        scrollTrigger: {
            trigger : "#section6>h1",
            scroller : "body",
            // markers : true,
            start : "top 50%",
            end : "bottom 70%",
            scrub : 4,
        }
    },"a")
    tl6.to("#section6 #left img",{
        scale :1.3,
        
        scrollTrigger: {
            trigger : "#section6 #left img",
            scroller : "body",
            // markers : true,
            start : "top 40%",
            end : "bottom 80%",
            scrub : 4,
        }
    },"a")
    tl6.to("#section6 .number",{
        top : "1%",
        duration : 1,
        
        scrollTrigger: {
            trigger : "#section6 .web",
            scroller : "body",
            // markers : true,
            start : "top 60%",
            scrub : 5,
        }
    },"a")
   var pro6 = document.querySelector("#project6");
   var circle6 = document.querySelector("#circle6");
   var prohead6 = document.querySelector("#project6>a")
    pro6.addEventListener("mouseover", function(){
        circle6.style.height = "100%";
        circle6.style.width = "100%";
        prohead6.style.letterSpacing = "0px";

    })
    pro6.addEventListener("mouseleave", function(){
        circle6.style.height = "0%";
        circle6.style.width = "0%";
        prohead6.style.letterSpacing = "7px";

    })
}
function section7(){
    var tl7 = gsap.timeline();
    tl7.to("#section7 h1", {
        top: "5%",
        duration : 0.1,
        opacity : 0,
        stagger : 5,
        rotate : 5,
    
        scrollTrigger: {
            trigger: "#section7 h1",
            scroller: "body",
            // markers: true,
            scrub: 4,
            start: "top 30%",
            end: "bottom 60%",
        }
    },"a")  
    tl7.to("#section7 h3", {
        top: "80%",
        duration : 0.1,
        opacity : 0,
        // stagger : 5,
        rotate : 5,
    
        scrollTrigger: {
            trigger: "#section7 h1",
            scroller: "body",
            // markers: true,
            scrub: 4,
            start: "top 30%",
            end: "bottom 60%",
        }
    },"a")  
}
function section8(){
    var tl8 = gsap.timeline();
    tl8.from("#section8 h1", {
        top:"25%",
        duration : 0.1,
        opacity : 0,
        // rotate : 5,
    
        scrollTrigger: {
            trigger: "#section8",
            scroller: "body",
            // markers: true,
            scrub: 4,
            start: "top 90%",
        }
    },"a")  
    tl8.to("#section8 #line", {
        duration : 0.2,
        width : "1200px",
    
        scrollTrigger: {
            trigger: "#section8",
            scroller: "body",
            // markers: true,
            scrub: 5,
            start: "top 80%",
            end: "bottom",
        }
    },"a")  
}
function sidebar(){
    var spro = document.querySelector("#sproject");
    var scircle = document.querySelector("#scircle");
    var sprohead = document.querySelector("#sproject>h2")
     spro.addEventListener("mouseover", function(){
         scircle.style.height = "100%";
         scircle.style.width = "100%";
         sprohead.style.letterSpacing = "1px";
         sprohead.style.color = "black";    
     })
     spro.addEventListener("mouseleave", function(){
         scircle.style.height = "0%";
         scircle.style.width = "0%";
         sprohead.style.letterSpacing = "8px";
         sprohead.style.color = "white";
     })
     var menu = document.querySelector("#icon1");
     var cross = document.querySelector("#icon2");
     var sidebar = document.querySelector("#sidebar");
     var main = document.querySelector("#main");
     menu.addEventListener("click", function(){
          sidebar.style.display = "initial";
          sidebar.style.opacity = "1";
          menu.style.display = "none";
     }) 
     cross.addEventListener("click", function(){
        sidebar.style.display = "none";
        menu.style.display = "initial";
        sidebar.style.opacity = "0";
     })
}
loader();
section1(); 
section2(); 
section3();
section4();
section5();
section6();
section7();
section8();
sidebar();

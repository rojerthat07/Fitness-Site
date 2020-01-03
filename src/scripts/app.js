var storeMessage = document.getElementById("store-message");

function counterCountAdd() {
    var count = document.getElementById("cart-count").firstChild.nodeValue;
    count++;
    document.getElementById("cart-count").firstChild.nodeValue = count;
}

function storeMessageAppear() {
    storeMessage.style.display = "grid";
}

function storeMessageExit() {
    storeMessage.style.display = "none";
}


//Scroll Magic and TweenMax
const controller = new ScrollMagic.Controller();

//Headings
const headingtl = new TimelineMax();
const headingtl2 = new TimelineMax();
const headingtl3 = new TimelineMax();

//Effects
headingtl.from("#heading-1", 1, {
    opacity: 0,
    y: -100
});
headingtl2.from("#heading-2", 1, {
    opacity: 0,
    x: -200
});
headingtl3.from("#heading-3", 1, {
    opacity: 0,
    x: -100
});
//Trigger Scenes
const headingScene1 = new ScrollMagic.Scene({
        triggerElement: "#heading-1"
    })
    .setTween(headingtl)
    .addTo(controller)
const headingScene2 = new ScrollMagic.Scene({
        triggerElement: "#heading-2"
    })
    .setTween(headingtl2)
    .addTo(controller)
    const headingScene3 = new ScrollMagic.Scene({
        triggerElement: "#heading-3"
    })
    .setTween(headingtl3)
    .addTo(controller)

//Showcase
const showcasetl = new TimelineMax();
const showcasetl2 = new TimelineMax();
const showcasetl3 = new TimelineMax();

//Effects
showcasetl.from("#showcase-1", 1, {
    opacity: 0,
    x: -100
});
showcasetl2.from("#showcase-2", 1, {
    opacity: 0,
    x: 100
});
showcasetl3.from("#showcase-3", 1, {
    opacity: 0,
    x: -100
});
//Trigger Scenes
const showcaseScene1 = new ScrollMagic.Scene({
        triggerElement: "#showcase-1"
    })
    .setTween(showcasetl)
    .addTo(controller)
const showcaseScene2 = new ScrollMagic.Scene({
        triggerElement: "#showcase-2"
    })
    .setTween(showcasetl2)
    .addTo(controller)
const showcaseScene3 = new ScrollMagic.Scene({
        triggerElement: "#showcase-3"
    })
    .setTween(showcasetl3)
    .addTo(controller)

//Ready
const readytl = new TimelineMax();


//Effects
readytl.from(".ready", .5, {
    opacity: 0,
    
});

//Trigger Scenes
const readyScene1 = new ScrollMagic.Scene({
        triggerElement: ".ready"
    })
    .setTween(readytl)
    .addTo(controller)


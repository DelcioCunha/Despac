class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
       this.handleclick = this.handleclick.bind(this);
        
    }

animateLinks() {
    this.navLinks.forEach((link, index) => {
    link.style.animation
    ? (link.style.animation = "")
    : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);

});
    
}


    handleclick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }


    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleclick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }



}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

const content = document.querySelector('[data-shrink="yes"]');

const span = document.querySelector('[data-shrink="yes"] span');

span.classList.add('aparecer');

setInterval(function() {
    content.classList.toggle('shrink')
}, 5000);

setTimeout(function(){
setInterval(function() {
    span.classList.toggle('aparecer')
}, 5000);
},200)

const nav = document.getElementsByTagName("nav")[0];
const topoNav = nav.offsetTop;

window.onscroll=function(){ 
    fixarMenuNoTopo();
}
function fixarMenuNoTopo(){
    if (window.pageYOffset >= topoNav){
        nav.classList.add("fixonotopo");
    }else{
        nav.classList.remove("fixonotopo")
    }

}
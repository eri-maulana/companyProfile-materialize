const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
   indicators: false,
   height : 350,
   transition : 1000,
   interval : 3000
});


const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const material = document.querySelectorAll(".materialboxed");
M.Materialbox.init(material);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
   scrollOffset : 50

});
// if ($(window).scroll().top>10) {
// 	$('.navbar').removeClass('affix');
// }else{
// 	$('.navbar').addClass('affix');
// }
new WOW().init();
if ($(window).scrollTop()>100) {
	$('.navbar').removeClass('affix');
	// alert('lol');
}else{
	$('.navbar').addClass('affix');
	// alert('wkwkwk');
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    singleItem:true,
    items:1,
});
$(window).scroll(function(){
	
	if ($(this).scrollTop()>100) {
		$('.navbar').removeClass('affix');
		// alert('lol');
	}else{
		$('.navbar').addClass('affix');
		// alert('wkwkwk');
	}
	$('.parallaxgradient').css('background-position','0px '+String(parseInt(window.scrollY/3)-520)+'px');
});
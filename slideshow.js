$(function(){
$("#img2,#img3").hide(0.000000000001)
});
$(function start(){
$("#img1").delay(1000).fadeOut(7000,function one(){
$("#img2").fadeIn(7000).delay(1000).fadeOut(7000,function(){
$("#img3").fadeIn(7000).delay(1000).fadeOut(7000,function two(){
$("#img1").fadeIn(7000).delay(1000).fadeOut(7000,start())
})
})
})
})
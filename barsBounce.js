$(function now(){
$("#bars").effect("bounce",function one(){
$("#bars").delay(1000).effect("bounce",function(){
$("#bars").delay(1000).effect("bounce",function second(){
$("#bars").delay(1000).effect("bounce",now())
})
})
})
})
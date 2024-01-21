//open menue
$('.toggler').click(function(){
    $('.menue').animate({left:'0px'},700);
    $(this).hide()
})
$('.fa-close').click(function(){
    $('.menue').animate({left:'-250px'},700)
    $('.toggler').show(200)
    
})

//smooth scroll
$('.menueContent a').click(function(){
    let href=$(this).attr('href');
    
    let sec =$(href).offset().top;
    
    $('html , body').animate({scrollTop:sec},500)
    
})

//change toggler color while scrolling
$(document).scroll(function(){
    let homeSec=$('#home').offset().top;
    
    let detailsSec=$('#details').offset().top;
    let durationSec=$('#duration').offset().top;
    let contactSec=$('#contact').offset().top;
    let scroll= $(document).scrollTop()+450;
   
    if( scroll>=detailsSec && scroll<durationSec || scroll>contactSec){
        $('.toggler').css('color','#000000')
    }
    else{
        $('.toggler').css('color','#ffffff')
    }

})

//show details 
$('.toggle').click(function(){
    $('.innerText').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

//Countdown Timer
$(document).ready(function(){

   setInterval(function(){
    const futureTime= new Date('09 June 2024 09:30:00').getTime();
    let presentTime= new Date().getTime(); 
    let remainingTime= futureTime-presentTime;

    let totalSecs= Math.floor(remainingTime/1000);
    let totalMins= Math.floor(totalSecs/60);
    let totalHours= Math.floor(totalMins/60);
    let days=Math.floor(totalHours/24)
    let seconds= totalSecs%60
    let minutes= totalMins%60
    let hours= totalHours%24

    $('.days').html(`${days} D`)
    $('.hours').html(`${hours} h`)
    $('.minutes').html(`${minutes} m`)
    $('.seconds').html(`${seconds} s`)
   },1000)

})

//Remaining characters to be written 
$('textarea').keydown(function(e){
    let maxLength= 100;
    let RemainingChar= maxLength - $(this).val().length;
    $('.remainingChar').html(`${RemainingChar}`)
    // if(RemainingChar==0 ){
    //     e.preventDefault();

    // }

})
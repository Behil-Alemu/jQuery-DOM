
// let titleVal = $('input [type="text"] [placeholder="Title"]: checked')
// let rateVal = $('input [type="text"] [placeholder="Rating"]: checked')


$('#btn1').on('click', function(e){
    e.preventDefault()
    console.log("button clicked!")
    let $titleVal = $('input').eq(0).val();
    let $rateVal = $('input').eq(1).val();

    $('.placeHere').append(`<li class = 'liRemove'>${$rateVal} ${$titleVal} <button class ='removebtn'>Remove</button></li>`)
    
})

//why it doesnt remove? 
$('.removebtn').on('click',function(e){
    e.preventDefault();
    $('li').remove();
})





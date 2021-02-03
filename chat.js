$(document).ready(function(){
    $('.image1').hide();
    $('.image2').hide();
    $('.image3').hide();
    $('.user1').click(function(){
        $('.user1chats').fadeToggle(3000);
    })

    $('.user2').click(function(){
        $('.user2chats').fadeToggle(3000);
    })

    $('.user3').click(function(){
        $('.user3chats').fadeToggle(3000);
    })

    $('.img-btn1').click(function(){
        $('.image1').slideDown(1000);
        $('.image2').hide();
        $('.image3').hide();
    })
    $('.img-btn2').click(function(){
        $('.image2').slideUp(1000);
        $('.image1').hide();
        $('.image3').hide();
    })
    $('.img-btn3').click(function(){
        $('.image3').fadeToggle(1000);
        $('.image2').hide();
        $('.image1').hide();
    })

    var parentElement = document.getElementById("messages");
    $('.receiving').hide();
    $('.btn').click(function(){
        var msg = document.getElementById("text").value
        var div = document.createElement('div');
        div.setAttribute('class',"mySMS");
        div.setAttribute('id',"mySMS");
        parentElement.appendChild(div);
        var mymessage = document.getElementById("mySMS");
        mymessage.innerHTML = msg;
        div.setAttribute('class','mySMS mySMS-sent');
        div.setAttribute('id',"mySMS-sent");
        $('.sending').hide();
        $('.receiving').slideUp(500);

    })

    $('.btn1').click(function(){
        var msg = document.getElementById("text1").value
        var div = document.createElement('div');
        div.setAttribute('class',"Recieved");
        div.setAttribute('id',"Received");
        parentElement.appendChild(div);
        var mymessage = document.getElementById("Received");
        mymessage.innerHTML = msg;
        div.setAttribute('class','SMS-Received');
        div.setAttribute('id',"SMS-Received");
        $('.receiving').hide();
        $('.sending').slideUp(500);
    })

    //User 2 js
    var parentElement2 = document.getElementById("2messages");
    $('.2receiving').hide();
    $('.2btn').click(function(){
        var msg = document.getElementById("2text").value
        var div = document.createElement('div');
        div.setAttribute('class',"2mySMS");
        div.setAttribute('id',"2mySMS");
        parentElement2.appendChild(div);
        var mymessage = document.getElementById("2mySMS");
        mymessage.innerHTML = msg;
        div.setAttribute('class','2mySMS mySMS-sent');
        div.setAttribute('id',"SmySMS-sent");
        $('.2sending').hide();
        $('.2receiving').show();

    })

    $('.2btn1').click(function(){
        var msg = document.getElementById("2text1").value
        var div = document.createElement('div');
        div.setAttribute('class',"2Recieved");
        div.setAttribute('id',"2Received");
        parentElement2.appendChild(div);
        var mymessage = document.getElementById("2Received");
        mymessage.innerHTML = msg;
        div.setAttribute('class','SSMS-Received');
        div.setAttribute('id',"SSMS-Received");
        $('.2receiving').hide();
        $('.2sending').show();
    })


    //User 3 js
var parentElement3 = document.getElementById("3messages");
$('.3receiving').hide();
$('.3btn').click(function(){
    var msg = document.getElementById("3text").value
    var div = document.createElement('div');
    div.setAttribute('class',"3mySMS");
    div.setAttribute('id',"3mySMS");
    parentElement3.appendChild(div);
    var mymessage = document.getElementById("3mySMS");
    mymessage.innerHTML = msg;
    div.setAttribute('class','3mySMS mySMS-sent');
    div.setAttribute('id',"TmySMS-sent");
    $('.3sending').hide();
    $('.3receiving').show();

})

$('.3btn1').click(function(){
    var msg = document.getElementById("3text1").value
    var div = document.createElement('div');
    div.setAttribute('class',"3Recieved");
    div.setAttribute('id',"3Received");
    parentElement3.appendChild(div);
    var mymessage = document.getElementById("3Received");
    mymessage.innerHTML = msg;
    div.setAttribute('class','3SMS-Received');
    div.setAttribute('id',"TSMS-Received");
    $('.3receiving').hide();
    $('.3sending').show();
})
})
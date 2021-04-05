$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});
//loadAudioFile('../music/1.mp3');
$("#yanhua-button").click(function () {
        setTimeout(function () {
            location.href = "yanhua.html";
        }, 2000);
});
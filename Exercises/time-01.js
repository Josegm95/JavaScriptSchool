//Create a countdown process
function countdown(sec) {
    var x = setInterval(function () {
        var hours = parseInt(sec / 3600);
        var seconds = sec % 3600;
        var minutes = parseInt(seconds / 60);
        seconds %= 60;
        console.log(hours + "h:", minutes + "m:", seconds + "s");
        if (sec > 0) {
            sec -= 1;
        } else {
            clearInterval(x);
            console.log('¡TIME OUT!');
        }
    }, 1000);
}

//Testing Function
countdown(300);
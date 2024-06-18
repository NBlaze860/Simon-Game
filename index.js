    var arr=[];
    var lost = false;
    var i=0;
    var blu = new Audio('./sounds/huh.mp3');
    var gru = new Audio('./sounds/bonk.mp3');
    var wron = new Audio('./sounds/spider_2099.mp3')
    $(".btn").click(function(event) {
        $('#'+event.target.id).addClass("pressed");
        setTimeout(function(){
            $('#'+event.target.id).removeClass("pressed");
        },70);
        if (lost) {
            wron.play();
            $("body").css("background-color","red");
            setTimeout(function() {
                $("body").css("background-color","#011F3F");
            },100);
        }
        switch (event.target.id) {
            case "blue":
                blu.play();
                break;
            case "green":
                blu.play();
                break;
            case "red":
                gru.play();
                break;
            case "yellow":
                gru.play();
                break;
        
            default:
                break;
        }
        if (arr.length!=0) {
            validInput(event);
        }
    });
    function randomColor() {
        var n = Math.random() * 4;
        n = Math.floor(n) + 1;
        var p;
        switch (n) {
            case 1:
                p = "green";
                break;
            case 2:
                p = "red";
                break;
            case 3:
                p = "yellow";
                break;
            case 4:
                p = "blue";
                break;
        
            default:
                break;
        }
        return p;
    }
function blink(color) {
    $("."+color).css("background-color","black");
    setTimeout(function() {
        $("."+color).css("background-color",color);
    },100);
}
$(document).keypress(function(){

    if (arr.length==0) {
        newTarget();
    }
});
function newTarget() {
    var n = randomColor();
    arr.push(n);
    blink(n);
    $("h1").text("level "+arr.length);
    lost = false;
    i=0;
    validInput();
}
function validInput(event) {
    if (i<arr.length&&!lost) {
        if (event.target.id!=arr[i]) {
            lost = true;
            wron.play();
            gameOver();
        }
            console.log(i+" "+arr.length+" "+event.target.id+" "+arr[i]+" "+lost);
            i++;
    }
    if (i>=arr.length&&!lost) {
        setTimeout(newTarget,500);
    }
    // else if (lost==true) {
    //     gameOver();
    // }
}
function gameOver() {
    $("body").css("background-color","red");
    setTimeout(function() {
        $("body").css("background-color","#011F3F");
    },100);
    $("h1").text("Game Over, Press Any Key to Restart");
    arr = [];
}

// function Game() {
//     var lost = false;
//     var j =0;
// while (j<4) {
//     j++;
//     var n = randomColor();
//     blink(n);
//     arr.push(n);
//     console.log(arr[j]);
//     $("h1").text("level "+(arr.length+1));
//     var i=0;
//     while (i<j) {
//             $(".btn").on("click",function(evunt) {
//                console.log(evunt.target.id+" "+arr[i]);
//                 $(".btn").off("click");
//                 i++;                
//                 // if (evunt.target.id!=arr[i]) {
//                 //     lost = true;
//                 // }
//             });
//         if (lost==true) {
//             break;
//         } 
//     }
// }
// if (lost) {

    
// }
// }
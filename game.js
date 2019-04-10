
function rngNum () {
    // Define variables
    var rng = Math.floor((Math.random() * 10) + 1);
    var x = document.getElementById("output");
    var output;
    
    if (rng > 1) {
        rng = 0;
    }
    
    switch(rng){
        case rng = 1:
            output = "You Won!";
        break;
        
        case rng = 0:
            output = "You Lost!";
        break;
    }
    x.innerHTML = output;
}

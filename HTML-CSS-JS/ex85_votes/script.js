let counter = 3;

function upvote(){
    counter += 1;
    document.getElementById("votes").innerHTML = counter + " votes";
}

function downvote(){
    counter -= 1;
    document.getElementById("votes").innerHTML = counter + " votes";
}
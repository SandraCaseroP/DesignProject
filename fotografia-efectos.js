window.onload = function() {
    plus();
};

function plus(){
    setTimeout(() => {
        let followers = document.getElementById("followers");
        let numberFollowers = followers.textContent;
        followers.innerHTML = parseInt(numberFollowers) + 1;
        followers.style = "font-weight: 700; color: black;";
        plus();
    },1000)
}

function cambiarImagen(id){
    var patita = document.getElementById(id);

    if (patita.src.indexOf("fotografia/paws(2).png") == -1)
        patita.src = "fotografia/paws(2).png";
    else 
        patita.src = "fotografia/paws(1).png";
}

function follow(id){
    var boton = document.getElementById(id);
    boton.style.backgroundColor="rgb(106, 245, 205)";
    
    var follow = document.getElementById("follow");
    var followButton = document.getElementById("botonFollow");

    if (follow.src.indexOf("fotografia/followers(2).png") == -1){
        follow.src = "fotografia/followers(2).png";
        followButton.innerHTML = "Unfollow";

    }else{
        follow.src = "fotografia/followers(1).png";
        followButton.innerHTML = "Follow";
        boton.style.backgroundColor="white";
    }

}

function hide(id){
    document.getElementById(id).style.display = "none";
}

function direct(){
    var div = document.getElementById("direct");
    div.style.display = "block";
}

function mail(){
    var img = document.getElementById("wrong");
    img.style.display = "block";
    setTimeout('hide("wrong")', 250);
}

function cerrar(){
    var div = document.getElementById("direct");
    div.style.display = "none";
}
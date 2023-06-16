let jquery = document.createElement("script");

jquery.addEventListener("load", proceed);
jquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js";
document.querySelector("head").appendChild(jquery);


function swap(x) {
    x.classList.toggle("swap");
}

$(async function() {
  await typing("Welcome to my website!");
});
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function typing(message, arr , delay=100) {
    const mes_length = message.split("");
    let i=0;
    while (i < mes_length.length) {
        await wait(delay);
        $(arr).append(mes_length[i]);
        i++;
    }

}

 async function deleteM(message_to_del) {
    const del=  $(message_to_del).html()
    all_lets = del.split("");
    while (0 < all_lets.length) {
        await wait(100);
        all_lets.pop()
        $(del).html(all_lets.join(""));
    }
}

function links_dropdown() {
    document.getElementById("options").classList.toggle("show");
}
function scroll_menu() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").style.padding = "5px 1px";
        document.getElementById("name_head").style.fontSize = "25px";
        document.getElementById("menu_button").style.top = "20px";
    }
    else {
        document.getElementById("navbar").style.padding = "10px 2px";
        document.getElementById("name_head").style.fontSize = "40px";
        document.getElementById("menu_button").style.top = "40px";
    }
}



function checkbingo(){
    let nop = document.getElementsByClassName("fnk");
    for (var i = 0; i < nop.length ; i--) {
        if (nop[i].style.display === "block") {
        b01();
        }
    }
} 
function bollk(){
    let cop = document.getElementsByTagName("span");
for(var j = 0; j < cop.length; j++){
    cop[j].addEventListener("click", (event) => {
        //use event.target to refer to the clicked element
        event.target.style.color = "red";
        checkdiagonal();
        checkbingo();

});
};
};

function vnm(){
        let cd = document.getElementsByTagName("span");
        for(var i = 0; i < cd.length; i++){
            cd[i].innerHTML = "";
        cd[i].contentEditable='true';
        cd[i].style.color = "black";
    };
};
function vnp(){
        let cd = document.getElementsByTagName("span");
        for(var i = 0; i < cd.length; i++){
        cd[i].style.color = "black";
        cd[i].contentEditable='false';
    };
    let cop = document.getElementById("vnm"); 
    cop.style.display = "none";
    bollk();


};


function checkdiagonal() {
    let cop = document.getElementsByTagName("span");
    if (cop[0].style.color === "red" && cop[6].style.color === "red" && cop[12].style.color === "red" && cop[18].style.color === "red" && cop[24].style.color === "red" ) {
        let ciop = document.getElementById("blp1");
        ciop.style.display = "block";

    }
    if (cop[4].style.color === "red" && cop[8].style.color === "red" && cop[12].style.color === "red" && cop[16].style.color === "red" && cop[20].style.color === "red" ) {
        let we = document.getElementById("blp2");   
        we.style.display = "block";

    }
    if (cop[0].style.color === "red" && cop[1].style.color === "red" && cop[2].style.color === "red" && cop[3].style.color === "red" && cop[4].style.color === "red" ) {
        let er = document.getElementById("blp3");
        er.style.display = "block";

    }
    if (cop[5].style.color === "red" && cop[6].style.color === "red" && cop[7].style.color === "red" && cop[8].style.color === "red" && cop[9].style.color === "red" ) {
        let rt = document.getElementById("blp4");
        rt.style.display = "block";

    }
    if (cop[10].style.color === "red" && cop[11].style.color === "red" && cop[12].style.color === "red" && cop[13].style.color === "red" && cop[14].style.color === "red" ) {
        let ty = document.getElementById("blp5");
        ty.style.display = "block";

    }
     if (cop[15].style.color === "red" && cop[16].style.color === "red" && cop[17].style.color === "red" && cop[18].style.color === "red" && cop[19].style.color === "red" ) {
        let yu = document.getElementById("blp6");
        yu.style.display = "block";

    }
     if (cop[20].style.color === "red" && cop[21].style.color === "red" && cop[22].style.color === "red" && cop[23].style.color === "red" && cop[24].style.color === "red" ) {
        let ui = document.getElementById("blp7");
        ui.style.display = "block";

    }



    if (cop[0].style.color === "red" && cop[5].style.color === "red" && cop[10].style.color === "red" && cop[15].style.color === "red" && cop[20].style.color === "red" ) {
        let io = document.getElementById("blp8");
        io.style.display = "block";

    }
    if (cop[1].style.color === "red" && cop[6].style.color === "red" && cop[11].style.color === "red" && cop[16].style.color === "red" && cop[21].style.color === "red" ) {
        let as = document.getElementById("blp9");
        as.style.display = "block";

    }
     if (cop[2].style.color === "red" && cop[7].style.color === "red" && cop[12].style.color === "red" && cop[17].style.color === "red" && cop[22].style.color === "red" ) {
        let sd = document.getElementById("blp10");
        sd.style.display = "block";

    }
     if (cop[3].style.color === "red" && cop[8].style.color === "red" && cop[13].style.color === "red" && cop[18].style.color === "red" && cop[23].style.color === "red" ) {
        let df = document.getElementById("blp11");
        df.style.display = "block";

    }
    if (cop[4].style.color === "red" && cop[9].style.color === "red" && cop[14].style.color === "red" && cop[19].style.color === "red" && cop[24].style.color === "red" ) {
        let fg = document.getElementById("blp12");
        fg.style.display = "block";

    }
}




function b01() {
let v = document.getElementById("b01")
v.style.color = "red";




    
}
function b02() {
let v = document.getElementById("b02")
v.style.color = "red";


    
}
function b03() {
let v = document.getElementById("b03")
v.style.color = "red";


    
}
function b04() {
let v = document.getElementById("b04")
v.style.color = "red";


    
}
function b05() {
let v = document.getElementById("b05")
v.style.color = "red";
}


let key = document.getElementById("selectModal").value;


switch (key) {
        case "1":
            document.getElementById("state1").style.show;
            console.log("state1");
            break;
        case "2":
            document.getElementById("state2").style.show;
            console.log("state2");

            break;
        case "3":
            document.getElementById("state3").style.show;
            console.log("state3");

            break;
        case "4":
            document.getElementById("state4").style.show;
            console.log("state4");

            break;
        case "5":
            document.getElementById("state5").style.show;
            console.log("state5");

            break;
        case "6":
            document.getElementById("state6").style.show;
            console.log("state6");

            break;
        case "7":
            document.getElementById("state7").style.show;
            console.log("state7");

            break;

        default:
            document.getElementById("stateDefault").style.show;
            console.log("stateDefault");
            break;
    }
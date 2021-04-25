function action(event) {
    var res = document.getElementById("res");
    var btn = event.target || event.srcElement;

    switch (btn.id) {
        case "btn0":
        case "btn1":
        case "btn2":
        case "btn3":
        case "btn4":
        case "btn5":
        case "btn6":
        case "btn7":
        case "btn8":
        case "btn9":
        case "btnSum":
        case "btnSub":
        case "btnMul":
        case "btnDiv":
            if (res.innerHTML == "0" || res.innerHTML == "+") res.innerHTML = "";
            res.innerHTML = res.innerHTML + document.getElementById(btn.id).innerHTML;
            break;
        
        case "btnDec":
            if (res.innerHTML == "" || res.innerHTML == "+") res.innerHTML = "0";
            else if (res.innerHTML == "-") res.innerHTML += "0";
            res.innerHTML = res.innerHTML + document.getElementById(btn.id).innerHTML;
            break;

        case "btnEql":
            let result = eval(res.innerHTML);
            res.innerHTML = result;
            break;

        case "btnClr":
            res.innerHTML = "";
            break;

        case "btnBsp":
            let res_str = res.innerHTML;
            res.innerHTML = res_str.slice(0, -1);
            break;
    
        default:
            break;
    }
}

document.getElementById('btn0').onclick = action;
document.getElementById('btn1').onclick = action;
document.getElementById('btn2').onclick = action;
document.getElementById('btn3').onclick = action;
document.getElementById('btn4').onclick = action;
document.getElementById('btn5').onclick = action;
document.getElementById('btn6').onclick = action;
document.getElementById('btn7').onclick = action;
document.getElementById('btn8').onclick = action;
document.getElementById('btn9').onclick = action;
document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action;
document.getElementById('btnDec').onclick = action;
document.getElementById('btnEql').onclick = action;
document.getElementById('btnClr').onclick = action;
document.getElementById('btnBsp').onclick = action;
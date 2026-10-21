const elementA = document.getElementById("A");
const elementR = document.getElementById("R");
const elementH = document.getElementById("H");
const elementM = document.getElementById("M");
const elementResult = document.getElementById("result");

let check = false;

function calc() {
    console.log("A, H, R, M")
    let A = parseInt(elementA.value);
    let R = parseInt(elementR.value);
    let H = parseInt(elementH.value);
    let M = parseInt(elementM.value);

    if ([A, R, H].some(v => isNaN(v) || v <= 0)) {
        elementResult.value = "Введите корректные положительные числа";
        check = false;
        return;
    }

    if (isNaN(M) || M < 0) {
        elementResult.value = "Введите корректные положительные числа";
        check = false;
        return;
    }

    const V1 = A * A * A;                    
    const V2 = Math.PI * R * R * H;          
    const Vsum = V1 + V2;                   

    // переменные для кусочков текста результата
    let text1 = "";   
    let text2 = "";   
    let text3 = "";   

    
    if (M >= V1) {
        text1 = "1-я ёмкость: можно (V=" + V1.toFixed(2) + ")";
    } 
    
    else {
        text1 = "1-я ёмкость: нельзя (V=" + V1.toFixed(2) + ")";
    }

    
    if (M >= V2) {
        text2 = "2-я ёмкость: можно (V=" + V2.toFixed(2) + ")";
    } 
    
    else {
        text2 = "2-я ёмкость: нельзя (V=" + V2.toFixed(2) + ")";
    }

    
    if (M >= Vsum) {
        text3 = "обе ёмкости: можно (V=" + Vsum.toFixed(2) + ")";
    } 
    
    else {
        text3 = "обе ёмкости: нельзя (V=" + Vsum.toFixed(2) + ")";
    }

    
    const result = text1 + "; " + text2 + "; " + text3;

   
    elementResult.value = result;

    //можно отправить форму, если хотя бы одна ёмкость заполняется
    if (M >= V1 || M >= V2 || M >= Vsum) {
        check = true;
    } 
    
    else {
        check = false;
    }
    
    console.log("V1 =", V1, "V2 =", V2, "Vsum =", Vsum, "M =", M);
}


function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } 
    
    else {
        alert("Ни одну ёмкость заполнить нельзя. Проверьте данные.");
    }
}


const elementCalc = document.getElementById("calc");
elementCalc.addEventListener('click',calc);                                            
                                                    
const elementSend= document.getElementById("send"); 
elementSend.addEventListener('click',send)          
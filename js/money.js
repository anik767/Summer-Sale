
    var Tpp ;
    var DD ;
    var TT ;
    Tpp = document.getElementById('Tpp');
    Tpp=Tpp.innerText;
    Tpp=parseFloat(Tpp);
    DD=document.getElementById('DD');
    DD=DD.innerText;
    DD=parseFloat(DD);
document.getElementById('acc1').addEventListener('click', function () {
    Tpp = document.getElementById('Tpp');
    Tpp=Tpp.innerText;
    Tpp=parseFloat(Tpp);
    DD=document.getElementById('DD');
    DD=DD.innerText;
    DD=parseFloat(DD);
    moneyTra(1);
    additem(1);
    amountCount(1);
    discount();
})
document.getElementById('acc2').addEventListener('click', function () {
    Tpp = document.getElementById('Tpp');
    Tpp=Tpp.innerText;
    Tpp=parseFloat(Tpp);
    DD=document.getElementById('DD');
    DD=DD.innerText;
    DD=parseFloat(DD);
    moneyTra(2);
    additem(2);
    amountCount(2);
    discount();
})
document.getElementById('Cook').addEventListener('click', function () {
    Tpp = document.getElementById('Tpp');
    Tpp=Tpp.innerText;
    Tpp=parseFloat(Tpp);
    DD=document.getElementById('DD');
    DD=DD.innerText;
    DD=parseFloat(DD);
    moneyTra(3);
    additem(3);
    amountCount(3);
    discount();
})
document.getElementById('Capp').addEventListener('click', function () {
    Tpp = document.getElementById('Tpp');
    Tpp=Tpp.innerText;
    Tpp=parseFloat(Tpp);
    DD=document.getElementById('DD');
    DD=DD.innerText;
    DD=parseFloat(DD);
    moneyTra(4);
    additem(4);
    amountCount(4);
    discount();
})
document.getElementById('Jer').addEventListener('click', function () {
    Tpp = document.getElementById('Tpp');
    Tpp=Tpp.innerText;
    Tpp=parseFloat(Tpp);
    DD=document.getElementById('DD');
    DD=DD.innerText;
    DD=parseFloat(DD);
    moneyTra(5);
    additem(5);
    amountCount(5);
    discount();
})
document.getElementById('cat').addEventListener('click', function () {
    Tpp = document.getElementById('Tpp');
    Tpp=Tpp.innerText;
    Tpp=parseFloat(Tpp);
    DD=document.getElementById('DD');
    DD=DD.innerText;
    DD=parseFloat(DD);
    moneyTra(6);
    additem(6);
    amountCount(6);
    discount();
})
document.getElementById('Purchase').addEventListener('click', function () {
    Tpp = document.getElementById('Tpp');
    Tpp.innerText=0.00;
    DD = document.getElementById('DD');
    DD.innerText=0.00;
    TT = document.getElementById('TT');
    TT.innerText=0.00;
     var del=document.getElementById("add-items");
     del.innerHTML = "";
     
})
function additem(value) {

    if (value == 1) {
        const para = document.createElement("p");
        para.innerHTML = 'K. Accessories';
        document.getElementById("add-items").appendChild(para);
    }
    else if (value == 2) {
        const para = document.createElement("p");
        para.innerHTML = 'K. Accessories';
        document.getElementById("add-items").appendChild(para);
    }
    else if (value == 3) {
        const para = document.createElement("p");
        para.innerHTML = 'Home Cooker';
        document.getElementById("add-items").appendChild(para);
    }
    else if (value == 4) {
        const para = document.createElement("p");
        para.innerHTML = 'Sports Back Cap';
        document.getElementById("add-items").appendChild(para);
    }
    else if (value == 5) {
        const para = document.createElement("p");
        para.innerHTML = 'Full Jersey Set';
        document.getElementById("add-items").appendChild(para);
    }
    else if (value == 6) {
        const para = document.createElement("p");
        para.innerHTML = 'Sports cates';
        document.getElementById("add-items").appendChild(para);

    }
}
function discount(){
   const code= document.getElementById('cupon-in').value;
   
    if(Tpp>200.00 && code==='SELL200' ){
      DD=(Tpp/100)*20;
      const t = document.getElementById("DD");
    const m = t.innerText = DD ;
    TT=Tpp-DD;
    const f = document.getElementById("TT");
    const H = f.innerText = TT;
    }

    
}

function amountCount(value) {

     if (value == 1) {
        Tpp =Tpp+39.00;
        TT=Tpp;
    }
    else if (value == 2) {
        Tpp =Tpp+ 25.00;
        TT=Tpp;
    }
    else if (value == 3) {
        Tpp =Tpp+ 49.00;
        TT=Tpp;
    }
    else if (value == 4) {
        Tpp =Tpp+ 49.00;
        TT=Tpp;
    }
    else if (value == 5) {
        Tpp =Tpp+ 69.00;
        TT=Tpp;
    }
    else if (value == 6) {
        Tpp =Tpp+ 159.00;
        TT=Tpp;
    }
    
    
    const ttp = document.getElementById("Tpp");
    const money = ttp.innerText = Tpp ;

    // const t = document.getElementById("DD");
    // const m = t.innerText = DD ;

    const f = document.getElementById("TT");
    const H = f.innerText = TT;
return Tpp;

}
function moneyTra(value) {

    if (value == 1) {
        const money = document.getElementById('Accessories1');
        const moneyText = money.innerText;
        const moneyacc1 = parseFloat(moneyText);
        console.log(moneyacc1);
    }
    else if (value == 2) {
        const money = document.getElementById('Accessories2');
        const moneyText = money.innerText;
        const moneyV = parseFloat(moneyText);
        console.log(moneyV);
    }
    else if (value == 3) {
        const money = document.getElementById('Cooker');
        const moneyText = money.innerText;
        const moneyV = parseFloat(moneyText);
        console.log(moneyV);
    }
    else if (value == 4) {
        const money = document.getElementById('Cap');
        const moneyText = money.innerText;
        const moneyV = parseFloat(moneyText);
        console.log(moneyV);
    }
    else if (value == 5) {
        const money = document.getElementById('Jersey');
        const moneyText = money.innerText;
        const moneyV = parseFloat(moneyText);
        console.log(moneyV);
    }
    else if (value == 6) {
        const money = document.getElementById('cates');
        const moneyText = money.innerText;
        const moneyV = parseFloat(moneyText);
        console.log(moneyV);
    }

}







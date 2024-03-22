console.group("Hello World");

let B = false,
 I = false,
 N = false,
 G = false,
 O = false;

    let Bnum, Inumber, Nnumber, Gnumber, Onumber = [1, 16, 31, 46, 61];
    let Bnum2, Inumber2, Nnumber2, Gnumber2, Onumber2 = [4, 34, 27, 64, 55];
    let Bnum3, Inumber3, Nnumber3, Gnumber3, Onumber3 = [7, 37, 33, 69, 52];
    let Bnum4, Inumber4, Nnumber4, Gnumber4, Onumber4 = [2, 39, 23, 66, 74];
    let Bnum5, Inumber5, Nnumber5, Gnumber5, Onumber5 = [3, 38, 24, 68, 59];
    
  
 //let Bnum, INumber, Nnumber,  GNumber, ONumber;
 
 
 function newNumber(maxNumber){

    let x = Math.floor(Math.random() * maxNumber) + 1;
    let x2 = Math.floor(Math.random() * maxNumber) + 2;
    let x3 = Math.floor(Math.random() * maxNumber) + 3;
    let x4 = Math.floor(Math.random() * maxNumber) + 4;
    let x5 = Math.floor(Math.random() * maxNumber) + 5;
    let x6 = Math.floor(Math.random() * maxNumber) + 6;
    let x7 = Math.floor(Math.random() * maxNumber) + 8;
    let x8 = Math.floor(Math.random() * maxNumber) + 9;
    let x9 = Math.floor(Math.random() * maxNumber) + 10;
    let x10 = Math.floor(Math.random() * maxNumber) + 11;
    let x11 = Math.floor(Math.random() * maxNumber) + 12;
    let x12 = Math.floor(Math.random() * maxNumber) + 13;
    let x13 = Math.floor(Math.random() * maxNumber) + 14;
    let x14 = Math.floor(Math.random() * maxNumber) + 15;
    let x15 = Math.floor(Math.random() * maxNumber) + 16;
    let x16 = Math.floor(Math.random() * maxNumber) + 17;
    let x17 = Math.floor(Math.random() * maxNumber) + 18;
    let x18 = Math.floor(Math.random() * maxNumber) + 19;
    let x19 = Math.floor(Math.random() * maxNumber) + 11;
    let x20 = Math.floor(Math.random() * maxNumber) + 11;
    let x21 = Math.floor(Math.random() * maxNumber) + 11;
    let x22 = Math.floor(Math.random() * maxNumber) + 11;
    let x23 = Math.floor(Math.random() * maxNumber) + 11;
    let x24 = Math.floor(Math.random() * maxNumber) + 11;
    let x25 = Math.floor(Math.random() * maxNumber) + 11;

    // if ...else if.. else statement
    // Conditional operator:
    // GTE > =, LTE < =, EC ==, NEQ ! =,AND &&, OR ||
    if (x <= 15) {
        console.log(`New number ${x} belongs to "B"`);
        B = true;
        //Bnum = x1;
        Bnum = x;
        document.querySelector("#td1").textContent = x;
    }else if (x2 >= 16 && x2 <= 30) {
        console.log(`New number ${x2} belongs to "I"`);
        I = true;
       // INumber = x2;
        Inumber = x2;
        document.querySelector("#td2").textContent = x2;
        
    }
    else if (x3 >= 31 && x3 <= 45) {
        console.log(`New number ${x3} belongs to "N"`);
        N = true;
        //NNumber = x3;
        Nnumber = x3;
        document.querySelector("#td3").textContent = x3;
    }
    else if (x4 >= 46 && x4 <= 60) {
        console.log(`New number ${x4} belongs to "G"`);
        G = true;
       // GNumber = x4;
        Gnumber = x4;
        document.querySelector("#td4").textContent = x4;
    }
    else if (x5 >= 61 && x5 <= 75) {
        console.log(`New number ${x5} belongs to "O"`);
        O = true;
       // ONumber = x5;
        Onumber = x5;
        document.querySelector("#td5").textContent = x5;
    }
    
    
    if (B == true && I == true && N == true && G == true && O == true){
    console.log(`BINGOO!!!`)
    console.table({
        B: Bnum,
        I: Inumber,
        N: Nnumber,
        G: Gnumber,
        O: Gnumber,
    });
   console.log(Bnum, Inumber, Nnumber, Gnumber, Onumber);
   console.log(Bnum, Inumber, Nnumber, Gnumber, Onumber.length);
//    console.log({
//     B: Bnum[0],
//     I: INumber[1],
//     N: NNumber[2],
//     G: GNumber[3],
//     O: GNumber[4],
//    })
}

//-----------------------------------ROW2---------------------------------

    if (x6 <= 15) {
        console.log(`New number ${x6} belongs to "B"`);
        B = true;
        Bnum2 = x6;
        document.querySelector("#td6").textContent = x6;
    }else if (x7 >= 16 && x7 <= 30) {
        console.log(`New number ${x7} belongs to "I"`);
        I = true;
        Inumber2 = x7;
        document.querySelector("#td7").textContent = x7;
    }
    else if (x8 >= 31 && x8 <= 45) {
        console.log(`New number ${x8} belongs to "N"`);
        N = true;
        Nnumber2 = x8;
        document.querySelector("#td8").textContent = x8;
    }
    else if (x9 >= 46 && x9 <= 60) {
        console.log(`New number ${x9} belongs to "G"`);
        G = true;
        Gnumber2 = x9;
        document.querySelector("#td9").textContent = x9;
    }
    else if (x10 >= 61 && x10 <= 75) {
        console.log(`New number ${x10} belongs to "O"`);
        O = true;
        Onumber2 = x10;
        document.querySelector("#td10").textContent = x10;
    }
    
    
    if (B == true && I == true && N == true && G == true && O == true){
    console.log(`BINGOO!!!`)
    console.table({
        B: Bnum2,
        I: Inumber2,
        N: Nnumber2,
        G: Gnumber2,
        O: Gnumber2,
    });
    console.log(Bnum2, Inumber2, Nnumber2, Gnumber2, Onumber2);
   console.log(Bnum2, Inumber2, Nnumber2, Gnumber2, Onumber2.length);
}//--------------------------------ROW3--------------------
    if (x11 <= 15) {
        console.log(`New number ${x11} belongs to "B"`);
        B = true;
        Bnum = x11;
        document.querySelector("#td11").textContent = x11;
    }else if (x12 >= 16 && x12 <= 30) {
        console.log(`New number ${x12} belongs to "I"`);
        I = true;
        Inumber = x12;
        document.querySelector("#td12").textContent = x12;
    }
    else if (x13 >= 31 && x13 <= 45) {
        console.log(`New number ${x13} belongs to "N"`);
        N = true;
        Nnumber = x13;
        document.querySelector("#td13").textContent = x13;
    }
    else if (x14 >= 46 && x14 <= 60) {
        console.log(`New number ${x14} belongs to "G"`);
        G = true;
        Gnumber = x14;
        document.querySelector("#td14").textContent = x14;
    }
    else if (x15 >= 61 && x15 <= 75) {
        console.log(`New number ${x15} belongs to "O"`);
        O = true;
        Onumber = x15;
        document.querySelector("#td15").textContent = x15;
    }
    
    
    if (B == true && I == true && N == true && G == true && O == true){
    console.log(`BINGOO!!!`)
    console.table({
        B: Bnum3,
        I: Inumber3,
        N: Nnumber3,
        G: Gnumber3,
        O: Gnumber3,
    });
    console.log(Bnum3, Inumber3, Nnumber3, Gnumber3, Onumber3);
       console.log(Bnum3, Inumber3, Nnumber3, Gnumber3, Onumber3.length);
}

//--------------------------------------ROW4--------------------------------
    if (x16 <= 15) {
        console.log(`New number ${x16} belongs to "B"`);
        B = true;
        Bnum4 = x16;
        document.querySelector("#td16").textContent = x16;
    }else if (x17 >= 16 && x17 <= 30) {
        console.log(`New number ${x17} belongs to "I"`);
        I = true;
        Inumber4 = x17;
        document.querySelector("#td17").textContent = x17;
    }
    else if (x18 >= 31 && x18 <= 45) {
        console.log(`New number ${x18} belongs to "N"`);
        N = true;
        Nnumber4 = x18;
        document.querySelector("#td18").textContent = x18;
    }
    else if (x19 >= 46 && x19 <= 60) {
        console.log(`New number ${x19} belongs to "G"`);
        G = true;
        Gnumber4 = x19;
        document.querySelector("#td19").textContent = x19;
    }
    else if (x20 >= 61 && x20 <= 75) {
        console.log(`New number ${x20} belongs to "O"`);
        O = true;
        Onumber4 = x20;
        document.querySelector("#td20").textContent = x20;
    }
    
    
    if (B == true && I == true && N == true && G == true && O == true){
    console.log(`BINGOO!!!`)
    console.table({
        B: Bnum4,
        I: Inumber4,
        N: Nnumber4,
        G: Gnumber4,
        O: Gnumber4,
    });
    console.log(Bnum4, Inumber4, Nnumber4, Gnumber4, Onumber4);
       console.log(Bnum4, Inumber4, Nnumber4, Gnumber4, Onumber4.length);
}
//--------------------------------------ROW5--------------------------------
    if (x21 <= 15) {
        console.log(`New number ${x21} belongs to "B"`);
        B = true;
        Bnum5 = x21;
        document.querySelector("#td21").textContent = x21;
    }else if (x22 >= 16 && x22 <= 30) {
        console.log(`New number ${x22} belongs to "I"`);
        I = true;
        Inumber5 = x22;
        document.querySelector("#td22").textContent = x22;
    }
    else if (x23 >= 31 && x23 <= 45) {
        console.log(`New number ${x23} belongs to "N"`);
        N = true;
        Nnumber5 = x23;
        document.querySelector("#td23").textContent = x23;
    }
    else if (x24 >= 46 && x24 <= 60) {
        console.log(`New number ${x24} belongs to "G"`);
        G = true;
        Gnumber5 = x24;
        document.querySelector("#td24").textContent = x24;
    }
    else if (x25 >= 61 && x25 <= 75) {
        console.log(`New number ${x25} belongs to "O"`);
        O = true;
        Onumber5 = x25;
        document.querySelector("#td25").textContent = x25;
    }
    
    
    if (B == true && I == true && N == true && G == true && O == true){
    console.log(`BINGOO!!!`)
    console.table({
        B: Bnum5,
        I: Inumber5,
        N: Nnumber5,
        G: Gnumber5,
        O: Gnumber5,
    });
    console.log(Bnum5, Inumber5, Nnumber5, Gnumber5, Onumber5);
       console.log(Bnum5, Inumber5, Nnumber5, Gnumber5, Onumber5.length);
}
 }

// newNumber(75);

//LOOPS
// let counter = 5;


    while (B == false || I == false || N == false || G == false || O == false){
        newNumber(75);
    }
    
    
//}
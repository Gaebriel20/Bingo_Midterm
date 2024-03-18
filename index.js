console.group("Hello World");

let B = false,
 I = false,
 N = false,
 G = false,
 O = false;

    let BNum, INumber, NNumber,  GNumber, ONumber;

function newNumber(maxNumber){

    let x = Math.floor(Math.random() * maxNumber) + 1;

    // if ...else if.. else statement
    // Conditional operator:
    // GTE > =, LTE < =, EC ==, NEQ ! =,AND &&, OR ||
    if (x <= 15) {
        console.log(`New number ${x} belongs to "B"`);
        B = true;
        BNum = x;
    }else if (x >= 16 && x <= 30) {
        console.log(`New number ${x} belongs to "I"`);
        I = true;
        INumber = x;
    }
    else if (x >= 31 && x <= 45) {
        console.log(`New number ${x} belongs to "N"`);
        N = true;
        NNumber = x;
    }
    else if (x >= 46 && x <= 60) {
        console.log(`New number ${x} belongs to "G"`);
        G = true;
        GNumber = x;
    }
    else if (x >= 61 && x <= 75) {
        console.log(`New number ${x} belongs to "O"`);
        O = true;
        ONumber = x;
    }
    
    
    if (B == true && I == true && N == true && G == true && O == true){
    console.log(`BINGOO!!!`)
    console.table({
        B: BNum,
        I: INumber,
        N: NNumber,
        G: GNumber,
        O: GNumber,
    });
}
}

newNumber(75);

//LOOPS
let counter = 5;
//for (let counter = 10; counter > 0; counter +=1){
 //   console.log(`Current counter is${counter}`);
  //  if(counter ==2)break;

//newNumber(35);
//}



//while (counter > 0) {
  //  console.log(`current counter is ${counter}`);

//newNumber(75);
  //  counter--;

    while (B == false || I == false || N == false || G == false || O == false){
        newNumber(75);
    }
    
//}


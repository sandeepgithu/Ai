

let Diamond_Pattern = (n) => {
    
    // Upper part
    for(let i = 1; i <= n; i++){
        let row = "";

        for(let j = 1; j <= n - i; j++ ) row += " ";
        for(let k = 1; k <= 2*i-1; k++) row += "*";
        console.log(row);
    }
    // Lower part
    for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "*";
    console.log(row);
}
    
}

Diamond_Pattern(5);


/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


*/
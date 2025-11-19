
let Square = (n) => {

    for(let i = 1; i <= n; i++){
        let row = "";

        for(let j = 1; j <= n; j++){
            row += "*";
        }
        console.log(row);
    }
}
Square(5);


/* 

*****
*****
*****
*****
*****

*/
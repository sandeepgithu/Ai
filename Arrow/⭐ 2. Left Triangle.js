 

let Left_Triangle = (n) =>{
    
    for(let i = 1; i <= n; i++){
        let row = "";
        
        for(let j = 1; j <= i - 1; j++){
            row += "*";
    }
    console.log(row);
    }
}
Left_Triangle(6);

/*

*
**
***
****
*****

*/
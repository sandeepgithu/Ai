

let  Inverted_Left_Triangle = (n) => {

    for(let i = n;i >= 1; i--){
        let row = "";
        for(let j = 1; j <= i; j++)row += "*"   
        console.log(row);
    }
}
Inverted_Left_Triangle(5);

/*

*****
****
***
**
*

*/
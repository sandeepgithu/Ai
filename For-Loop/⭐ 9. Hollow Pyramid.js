

let Hollow_Pyramid = (n) => {
    
    for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";

    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n) row += "*";
        else row += " ";
    }
    console.log(row);
}
}
Hollow_Pyramid(5);


/*


    *
   * *
  *   *
 *     *
*********


*/


let Number_Star_Mix = (n) => {

    for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + (j % 2 === 1 ? "*" : "");
    }
        console.log(row);
    }
}
Number_Star_Mix(5);


/*

1
1*
1*2
1*2*
1*2*3



*/
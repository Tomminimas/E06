const readline = require('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}

function kiemtraSNT(a) {
    if (a[i] < 2) {
        return false;
    }
    for (i = 2; i <= Math.sqrt(a[i]); i++) {
        if ( a[i] % i == 0) 
          return false;
        }
       return true;
}


function lietKeSNT(a) {
    for (i = 0; i < a[i]; i++) {
        if (kiemtraSNT(a) == true) {
            console.log('So nguyen to la', a[i]);
        }
    }
}

function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    kiemtraSNT(a) 
    lietKeSNT(a)
}

main()
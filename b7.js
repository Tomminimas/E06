const readline = require('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}

function kiemtraSNT(a) {
    if (a < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if ( a % i === 0) 
          return false;
        }
       return true;
}

function tichSNT(a) {
    let s = 1
    for (let i = 0; i < a.length; i++) {
        if (kiemtraSNT(a) > 0)
            s = s * a[i]
    }
    return s
}

function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    kiemtraSNT(a) 
    console.log(tichSNT(a))
}

main()
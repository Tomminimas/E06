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

function SNTdautien(a) {
    for (let i = 0; i < a.length; i++) {
        if (kiemtraSNT(a[i]) == true) {
            return a[i]  
        }
        }   
    return 0
    }

function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    let b = SNTdautien(a) 
    console.log('So nguyen to dau tien la: ',b)
}

main()
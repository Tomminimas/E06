const readline = require('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}

function kiemtraSNT(a) {
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a < 2) {
            return false;
        }
        if ( a % i === 0) 
          return false;
        }
       return true;
}


function demSNT(a) {
    count = 0
    for (let i = 0; i < a[i]; i++) {
        if (kiemtraSNT(a) == true) {
            count++;
        }
    }
    return count;
}

function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    kiemtraSNT(a) 
    let dem = demSNT(a);
    console.log('So luong SNT trong mang: ', dem);
}

main()
const readline = require('readline-sync')

function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}
function kiemtraSNT(a) {
    for (let i = 0; i < a.length; i++) {
        if (a < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if ( a % i === 0) 
            return false;
            }
        return true;
    }
}
function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    kiemtraSNT(a)
    if (kiemtraSNT(a) == true)
        console.log('Mang chua deu SNT')
    else 
        console.log('Mang khong chua deu SNT') 
}
main()
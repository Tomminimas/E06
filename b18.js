const readline = require('readline-sync')

function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}
function toanAm(a) {
    for (let i = 0; i < a.length; i++) {
        if ( a < 0) {
            return 1
        }
    }
    return 0
}
function main() { 
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    const kqua = toanAm(a)
    if (kqua ==1)
        console.log('Day so toan am')
    else
        console.log('Day so khong toan am')
}
main()
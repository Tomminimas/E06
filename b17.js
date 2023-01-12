const readline = require('readline-sync')

function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}
function tonTaiDuong(a) {
    for (let i = 0; i < a.length; i++) {
        if ( a[i] > 0) {
            return 1
        }
    }
    return 0
}
function main() { 
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    const kqua = tonTaiDuong(a)
    if (kqua ==1)
        console.log('Co ton tai so duong')
    else
        console.log('Khong ton tai duong')
}
main()
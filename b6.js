const readline = require('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}
function tinhTongAm(a) {
    let s = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0)
            s = s + a[i]
    }
    return s
}
function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    console.log(tinhTongAm(a))
}

main()
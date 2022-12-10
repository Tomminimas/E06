const readline = require('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}
function demLe(a) {
    let dem = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 1)
            dem++
    }
    return dem
}
function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    console.log(demLe(a))
}

main()
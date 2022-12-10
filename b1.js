const readline = require('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}
function main() {
    const a = [0, 0, 0, 0, 0] // Literal array
    nhapMang(a)
    console.log(a[a.length - 1]) // Phan tu cuoi cung
}

function main2() {
    const a = new Array(5) // Tao mot mang co 5 phan tu
    console.log(a[0])
    nhapMang(a)
    console.log(a[a.length - 1]) // Phan tu cuoi cung
}

main2()
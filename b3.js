const readline = require('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}

function lietKeChan(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0)
            console.log(a[i])
    }
}

function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    lietKeChan(a)
}

main()
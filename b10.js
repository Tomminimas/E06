const readline = require('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}

function soAmDauTien(a) {
    for (let i = 0; i < a.length; i++) {
        if(a[i] < 0) {
            console.log('So am dau tien la: ');
        }
        }   
    return a[i]  
    }

function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    soAmDauTien(a)
}

main()
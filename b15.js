const readline = require ('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}
function soAmDauTien(a) {
    for (let i = 0; i < a.length; i++) {
        if(a[i] < 0) {
            return a[i]  
        }
        }   
    return 0
    }

function timMaxAm(a) {
    let max = soAmDauTien(a)
    if (max != 0) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] > max && a[i] < 0)
                max = a[i]
        }
    }
    return max
}
function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    const kqua = timMaxAm(a)
    if (kqua == 0)
        console.log('Khong co so am')
    else
        console.log('So am lon nhat trong mang la: ',kqua)
}

main()

const readline = require ('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}
function kiemtraSNT(a) {
    if (a < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if ( a % i === 0) 
          return false;
        }
    return true;
}

function timMaxSNT(a) {
    let max = kiemtraSNT(a)
    if (max != 0) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] > max)
                max = a[i]
        }
    }
    return max
}
function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    const kqua = timMaxSNT(a)
    if (kqua == 0)
        console.log('Khong co SNT lon nhat')
    else
        console.log('SNT lon nhat trong mang la: ',kqua)
}

main()

const readline = require ('readline-sync')
function nhapMang(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap so: '))
    }
}
function timMax(a) {
    let max = a[0] 
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max)
            max = a[i]
    }
    return max
}
function main() {
    const n = Number(readline.question("Nhap so luong phan tu: "))
    const a = new Array(n)
    nhapMang(a)
    const kqua = timMax(a)
    console.log('So lon nhat trong mang la: ',kqua)
}

main()


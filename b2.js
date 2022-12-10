const readline = require('readline-sync')
function nhapMang(a) {
        a[0] = Number(readline.question('Nhap diem Toan: '))
        a[1] = Number(readline.question('Nhap diem Ly: '))
        a[2] = Number(readline.question('Nhap diem Sinh: '))
        a[3] = Number(readline.question('Nhap diem Anh: '))
}
function tinhDiemTrungBinh(a) {
    diemTrungBinh = (a[0] + a [1] + a[2]
+ a[3]) / 4; 
    return diemTrungBinh
    }
function main() {
    const a = new Array(4) 
    console.log(a[0])
    nhapMang(a)
    let k = tinhDiemTrungBinh(a) 
    console.log(k)
}
main ()


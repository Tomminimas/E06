function countPerson(persons) {
    let dem = 0
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].yearOfBirth >= 2000 )
            dem++
    }
    return dem
}
function searchByName(persons, keyword) {
    let kq = new Array()
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].name == keyword)
            kq.push(persons[i])
    }
    return kq
}

function main() {
    const persons = [
        {
            name: 'Loc',
            yearOfBirth: 1999
        },
        {
            name: 'Nhat',
            yearOfBirth: 2003
        },
        {
            name: 'Hien',
            yearOfBirth: 2001
        }
    ]

    // Ten cua nguoi dau tien
    console.log(persons[0].name)

    // Nam sinh cua nguoi cuoi cung
    console.log(persons[persons.length - 1].yearOfBirth)

    const kqua = countPerson(persons)
    console.log('So luong nguoi sinh nam tu 2000 tro di', kqua)

    const kq = searchByName(persons, 'Hien')
    console.log(kq)
}

main()
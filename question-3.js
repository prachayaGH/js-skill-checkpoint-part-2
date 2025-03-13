// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
    try {
        const Jsonplaceholder = await fetch("https://jsonplaceholder.typicode.com/users");
        const getData = await Jsonplaceholder.json();
        // console.log(getData)
        const dataFilter = getData.map(n => n.name).filter(n => n.length > 17)
        console.log(dataFilter)
    } catch (error) {
        console.log(error)
    }
}

getUsers()

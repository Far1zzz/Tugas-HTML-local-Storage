

let txtNik = document.getElementById("nik")
let txtNama = document.getElementById("nama")
let txtAlamat = document.getElementById("alamat")
let listPend = document.getElementById("listPenduduk")
let tblPend = document.getElementById("tblPenduduk")

let data = []
tampil()

function save(){
    console.log("tombol di pencet")

    console.log(txtNik.value)
    console.log(txtNama.value)
    console.log(txtAlamat.value)

    if (localStorage.getItem("lsPenduduk")=== null){
        data.push({"nik" : txtNik.value, "nama": txtNama.value, "alamat": txtAlamat.value})

        localStorage.setItem("lsPenduduk", JSON.stringify(data))
    }else{
        let dataLs = JSON.parse(localStorage.getItem("lsPenduduk"))
        console.log(dataLs)

        dataLs.push({"nik" : txtNik.value, "nama": txtNama.value, "alamat": txtAlamat.value})

        localStorage.setItem("lsPenduduk", JSON.stringify(dataLs))
    }
    tampil()
}

function tampil(){
    listPend.innerHTML = ""
    data.forEach(listData)

    tblPend.innerHTML = ""
    
    let dataTampil = JSON.parse(localStorage.getItem("lsPenduduk"))
    dataTampil.forEach(listData)
}

function listData(item, index){
    listPend.innerHTML += "<li class='list-group-item'>" + item.nik +"-"+ item.nama +"-"+ item.alamat +"</li>"

    tblPend.innerHTML += `<tr><td>${item.nik}</td><td>${item.nama}</td><td>${item.alamat}</td></tr>`
    
}
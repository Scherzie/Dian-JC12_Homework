//PRODUK
class Produk{
    constructor(nama,harga,kondisi,kategori){
        this.nama=nama
        this.harga=harga
        this.kondisi=kondisi
        this.kategori=kategori
    }
}
var dataProduk=[]
const printProduk=()=>{
    var namaProduk=document.getElementById("namaProduk").value
    var hargaProduk=document.getElementById("hargaProduk").value
    var kondisiProduk=''
    if(document.getElementsByName('kondisi')[0].checked){
        kondisiProduk='Baru'
    }else{
        kondisiProduk='Second'
    }
    var kategoriProduk=document.getElementById("kategori").value
    var outputP=''
        dataProduk.push(new Produk(namaProduk,hargaProduk,kondisiProduk,kategoriProduk))
        dataProduk.forEach((val)=>{
            outputP+=`  <tr>
                            <td>${val.nama}</td>
                            <td>${val.harga}</td>
                            <td>${val.kondisi}</td>
                            <td>${val.kategori}</td>
                        </tr>`
        })
    document.getElementById("tambahProduk").innerHTML=outputP
}
//HEWAN
class Hewan{
    constructor(nama,umur,kelamin,status){
        this.nama=nama
        this.umur=umur
        this.kelamin=kelamin
        this.status=status
    }
}
var dataHewan=[]
const printHewan=()=>{
    var namaHewan=document.getElementById("namaHewan").value
    var umurHewan=document.getElementById("umurHewan").value
    var kelaminHewan=''
    if(document.getElementsByName('kelamin')[0].checked){
        kelaminHewan='Jantan'
    }else{
        kelaminHewan='Betina'
    }
    var statusHewan=''
    if(document.getElementsByName('kelamin')[0].checked){
        statusHewan='Liar'
    }else{
        statusHewan='Peliharaan'
    }
    var outputH=''
        dataHewan.push(new Hewan(namaHewan,umurHewan,kelaminHewan,statusHewan))
        dataHewan.forEach((val)=>{
            outputH+=`  <tr>
                            <td>${val.nama}</td>
                            <td>${val.umur}</td>
                            <td>${val.kelamin}</td>
                            <td>${val.status}</td>
                        </tr>`
        })
    document.getElementById("tambahHewan").innerHTML=outputH
}
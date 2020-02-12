//Define
class DataP{
    constructor(id,kategori,nama,harga,stock){
        this.id=id
        this.kategori=kategori
        this.nama=nama
        this.harga=harga
        this.stock=stock
    }
}
var idP=new Date().getTime()
var tabelData=[
    new DataP(idP,'Cepat Saji','Indomie',2500,20),
    new DataP(idP,'Pakaian','Jeans',80000,10),
    new DataP(idP,'Elektronik','Smart TV 32"',2480000,5),
    new DataP(idP,'Buah','Pisang',15000,15)
]
var indexdelete=-1
var indexedit=-1

//Print
const printData=(normal)=>{
    var output=''
    normal.forEach((val,index)=>{
        if(index==indexdelete){
            output+=`<tr>
                        <td>${val.id}</td>
                        <td>${val.kategori}</td>
                        <td>${val.nama}</td>
                        <td>${val.harga}</td>
                        <td>${val.stock}</td>
                        <td>
                            <button onclick="acceptDelete(${index})">Yes</button>
                            <button onclick="canceldelete()">No</button>
                        </td>
                    </tr>`
        }
        else if(index==indexedit){
            output+=`<tr>
                        <td>${val.id}</td>
                        <select id="editKategori">
                            <option hidden value="">All</option>
                            <option value="cepatSaji">Cepat Saji</option>
                            <option value="pakaian">Pakaian</option>
                            <option value="elektronik">Elektronik</option>
                            <option value="buah">Buah</option>
                        </select>
                        <td>
                        <input type="text" id="editNama" placeholder="Nama">
                        </td>
                        <td>
                            <input type="number" id="editHarga" placeholder="Harga">
                        </td>
                        <td>
                            <input type="number" id="editStock" placeholder="Stock">
                        </td>
                        <td>
                            <button onclick="updatedata(${index})">Save</button>
                            <button onclick="cancelupdatedata()">Cancel</button>
                        </td>
                    </tr>`
        }
        else{
            output+=`<tr>
                        <td>${val.id}</td>
                        <td>${val.kategori}</td>
                        <td>${val.nama}</td>
                        <td>${val.harga}</td>
                        <td>${val.stock}</td>
                        <td>
                            <button onclick="editData(${index})">edit</button>
                            <button onclick="deleteData(${index})">delete</button>
                        </td>
                    </tr>`
        }
    })
    document.getElementById('tabelData').innerHTML=output
}
printData(tabelData)

//Edit/Delete
const editData=(indexed)=>{
    indexedit=indexed
    printData()
}

const updatedata=(indexed)=>{
    var newKategori=document.getElementById('editKategori').value
    if(newKategori===''){
        newKategori=data[indexed].kategori
    }
    if(newNama===''){
        newNama=data[indexed].nama
    }
    if(newHarga===''){
        newHarga=data[indexed].harga
    }
    if(newStock===''){
        newStock=data[indexed].stock
    }
    var newNama=document.getElementById('editData').value
    var newHarga=document.getElementById('editHarga').value
    var newStock=document.getElementById('editStock').value
    data.splice(indexed,1,new DataP(idP,newKategori,newNama,newHarga,newStock))
    indexedit=-1
    printData()
}

const cancelupdatedata=()=>{
    indexedit=-1
    printData()
}

const deleteData=(indexdel)=>{
    indexdelete=indexdel
    printData()
}
const acceptDelete=(indexdel)=>{
    data.splice(indexdel,1)
    indexdelete=-1
    printData()

}
const canceldelete=()=>{
    indexdelete=-1
    printData()
}

//Input
const inputData=()=>{
    var idInput=new Date().getTime()
    var namaInput=document.getElementById('namaInput').value
    var hargaInput=document.getElementById('hargaInput').value
    var kategoriInput=document.getElementById('kategoriInput').value
    var stockInput=document.getElementById('stockInput').value
    tabelData.push(new DataP(idInput,namaInput,hargaInput,kategoriInput,stockInput))
    printData(tabelData)
}
//Filter
function filterNama(){
    var namaFilter=document.getElementById("namaFilter").value.toLowerCase()
    var hasilFilterNama=[]
    tabelData.forEach((val)=>{
        var namaF=val.nama.toLowerCase()
        if(namaF.includes(namaFilter)){
            hasilFilterNama.push(val)
        }
    })
    printData(hasilFilterNama)
}
function filterKategori(){
    var kategoriFilter=document.getElementById("kategoriFilter").value
    var hasilFilterKategori=[]
    tabelData.forEach((val)=>{
        var kategoriF=val.kategori
        if(kategoriFilter==kategoriF){
         hasilFilterKategori.push(val)
        }
    })
    printData(hasilFilterKategori)
}
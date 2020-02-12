//Define
class Data{
    constructor(products,price,image){
        this.products=products
        this.price=price
        this.image=image
    }
}
var listData=[
    new Data('Bloomy Days',350000,'https://cdn.shopify.com/s/files/1/1789/5809/products/Bloomy_Days_1_401_2000x.jpg?v=1571034032'),
    new Data('Pink Moment',400000,'https://cdn.shopify.com/s/files/1/1789/5809/products/Pink_Moment_2000x.jpg?v=1574315810'),
    new Data('Sweet Desire',750000,'https://cdn.shopify.com/s/files/1/1789/5809/products/FC_Sweet-Desire_LR_2000x.jpg?v=1580716055'),
    new Data('Lemon Breeze',750000,'https://cdn.shopify.com/s/files/1/1789/5809/products/DSC0385-800x800_440_2000x.jpg?v=1547187396')
]
var listCart=[]

//Print Data
const printData=(x)=>{
    var outputX=''
    x.forEach((val,index)=>{
        outputX+= `<tr>
                    <td>${val.products}</td>
                    <td>IDR ${val.price}</td>
                    <td><img src=${val.image} height='100 px'/></td>
                    <td><button class="addCart" onclick="onAddCartClick(${index})">Add to Cart</button>              
                </tr>`
    })
    document.getElementById("listData").innerHTML=outputX
}
printData(listData)

//Print Cart
const printCart=(y)=>{
    var outputY=''
    var total=0
    var totalinCart=0
    y.forEach((val,index)=>{
        outputY+=`<tr>
                    <td>${val.products}</td>
                    <td>IDR ${val.price}</td>
                    <td><img src=${val.image} height='100px'/></td>
                    <td><button class="delete" onclick="onDeleteClick(${index})">Delete</button>              
                </tr>`
        total++
        totalinCart+=val.price
    })
    document.getElementById("bill").innerHTML=outputY
    if(total!==0){
        document.getElementsByTagName('h2')[0].innerHTML=`Items in Cart... ${total}`
        document.getElementById('cart').innerHTML=`Total : IDR ${totalinCart}`
        document.getElementById('pay').innerHTML=`<button onclick="checkout(),waktu()">Check out</button>`
    }else{
        document.getElementsByTagName('h2')[0].innerHTML=`Your cart is still empty ╥﹏╥`
        document.getElementById('cart').innerHTML = ``
    }
}
printCart(listCart)

//on-Click
const onAddCartClick=(index)=>{
    var addCheck=confirm("Are u sure, u want to buy this "+listData[index].products+"?")
    var head=''
    if(addCheck){
        head=`<tr>
                <td><b>Products</b></td>
                <td><b>Price</b></td>
                <td><b>Image</b></td>
                <td><b>Action</b></td>
            </tr>`
        document.getElementById("listCart").innerHTML=head
        listCart.push(listData[index])            
    }
    printCart(listCart)
}

const onDeleteClick=(index)=>{
    var deleteCheck=confirm('Are u sure, u want to delete this item?')
    var head=''
    if(deleteCheck){
        if(listCart.length==1){
            document.getElementById("listCart").innerHTML=head
            document.getElementById('pay').innerHTML=''
        }
        listCart.splice(index,1) 
    }
    printCart(listCart)
}

function sumArray(){
    var output=0
    for(i=0;i<listCart.length;i++){
        output+=listCart[i].price
    }
    return output

}

function waktu(){
    var time=30
    var timer=setInterval(function(){
        document.getElementById("timer").innerHTML=`Time left : ${time}`
        time--
        if(time<=0){
            clearInterval(timer)
            alert("Check out time ends")
            listCart=[]
            document.getElementsByTagName('h2')[0].innerHTML=`Your cart is still empty ╥﹏╥`
            document.getElementById('cart').innerHTML=``
            document.getElementById('listCart').innerHTML=''
            document.getElementById('bill').innerHTML=''
            document.getElementById('pay').innerHTML=''
            document.getElementById('timer').innerHTML=''
            time=30
        }
    },1000)
}

const checkout=()=>{
    document.getElementById('pay').innerHTML=`<input type="number" id="inputPay" placeholder="You need to pay..."><button onclick="pay()">Pay</button>`
}

const pay=()=>{
    if(document.getElementById("inputPay").value<sumArray()){
        alert("Your money is not enough")
    }else if(document.getElementById("inputPay").value>sumArray()){
        clearInterval(timer)
        alert("Thanks for shopping in here 🎕 Here's the change : IDR "+(document.getElementById("inputPay").value-sumArray(listCart)))
        listCart=[]
        document.getElementsByTagName('h2')[0].innerHTML=`Your cart is still empty ╥﹏╥`
        document.getElementById('cart').innerHTML=``
        document.getElementById('listCart').innerHTML=''
        document.getElementById('bill').innerHTML=''
        document.getElementById('pay').innerHTML=''
        document.getElementById('timer').innerHTML=''
        time=30
    }else{
        alert("Thanks for shopping in here 🎕 Please visit us again soon 乁(✿ ͡° ͜ʖ ͡°)و")
    }
}
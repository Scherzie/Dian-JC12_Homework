var huruf='abcdefghijklmnopqrstuvwxyz'.split('')
const cesarchiper=(input,langkah)=>{
  var arr=[]
  // for(var i=0;i<input.length;i++){
  //   arr.push(huruf.indexOf(input[i]))
  // }

  for(var i=0;i<input.length;i++){
    for(var j=0;j<huruf.length;j++){
      if(input[i]==huruf[j]){
        arr.push(j)
      }
    }
  }
  var arrnew=arr.map((val)=>{
    return val+langkah
  })
  var arrfinale=arrnew.map((val)=>{
    return val%26
  })
  var kataakhir=arrfinale.map((val)=>{
    return huruf[val]
  })
  return kataakhir.join('')
}
console.log(cesarchiper('aza',3))
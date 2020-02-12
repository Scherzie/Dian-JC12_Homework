// function CheckPass(str){
// var pass=str.split('')
// var number=`1234567890`.split('')
// var alphabet=`qwertyuiopasdfghjklzxcvbnm`.split('')
// var containNumber=false
// var containAlphabet=false
// var space=str.split(' ')
// var output=''
// if(pass.length<6||space.length>1){
//     output+='Password harus lebih dari 6 char'
// }
// for(var i=0;i<pass.length;i++){
//     for(var j=0;j<number.length;j++){
//         if(pass[i]==number[j]){
//             containNumber=true
//         }
//     }
//     for(var k=0;k<alphabet.length;k++){
//         if(pass[i]==alphabet[k]){
//             containAlphabet=true
//         }
//     }
// }
// if(containNumber==false||containAlphabet==false){
//     output+='Password harus kombinasi angka dan huruf'
// }
// if(output==''){
//     output+='Password benar'
// }
// return output
// }
// console.log(CheckPass('12s12'))//Password harus lebih dari 6 char
// console.log(CheckPass('abcabc'))//Password harus kombinasi angka dan huruf
// console.log(CheckPass('abc123'))//Password benar
// console.log(CheckPass('ab 123'))// Password harus lebih dari 6 char

const checkpass1=(str)=>{
    var hilangstring=str.replace(' ','')
    if(hilangstring.length>=6){
        var huruf=false
        var angka=false
        for(var i=0;i<hilangstring.length;i++){
            if(hilangstring[i]>=0){
                angka=true
            }else{
                huruf=true
            }
        }
        if(angka&&huruf){
            return 'pass berhasil'
        }else if(huruf){
            return 'harus ada angka'
        }else{
            return 'harus ada huruf'
        }
    }else{
        return 'karakter kurang dari 6'
    }
}
console.log(checkpass1('12s12'))//Password harus lebih dari 6 char
console.log(checkpass1('abcabc'))//Password harus kombinasi angka dan huruf
console.log(checkpass1('abc123'))//Password benar
console.log(checkpass1('ab 123'))// Password harus lebih dari 6 char
console.log(checkpass1('1234567'))// Password harus kombinasi angka dan huruf
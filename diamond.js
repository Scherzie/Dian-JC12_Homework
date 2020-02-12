//CARA ke-1
// var rows=4
// var output1=''
//         for(var b=0;b<=rows;b++){
//             for(var c=rows;c>b;c--){
//                 output1+=' '
//             }
//             for(var d=0;d<=b;d++){
//                 output1+='*'
//             }
//             for(var e=1;e<(b+1);e++){
//                 output1+='*'
//             }
//             if(b<rows){
//                 output1+='\n'
//             }
//         }
//         console.log(output1)
// var output2 =''
//         for(var r=0;r<=rows;r++){
//             for(var x=0;x<r;x++){
//                 output2+=' '
//             }
//             for(var y=rows+1;y>r;y--){
//                 output2+='*'
//             }
//             for(var z=r;z<rows;z++){
//                 output2+='*'
//             }
//             if(r<rows){
//                 output2+='\n'
//             }
//         }
//         console.log(output2)

//CARA ke-2
var output=''
for(var i=0;i<5;i++){
    for(var j=i;j<5;j++){
        output+=' '
    }
    for(var k=0;k<i+1;k++){
        output+='*'
    }
    for(var k=0;k<i+1;k++){
        if(k!=0){
            output+='*'
        }
    }
    if(i<5-1){
        output+='\n'
    }
}
var output1=''
for(var i=1;i<5;i++){
    for(var k=0;k<i+1;k++){
        output1+=' '
    }
    for(var j=i;j<5;j++){
        output1+='*'
    }
    for(var l=i;l<(5-1);l++){
        output1+='*'
    }
    if(i<5-1){
        output1+='\n'
    }
}console.log(output+'\n'+output1)
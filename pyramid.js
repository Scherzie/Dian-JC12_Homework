//CARA ke-1
// var rows=4
// var output=''
        // for(var r=0;r<=rows;r++){
        //     for(var c=rows;c>r;c--){
        //         output+=' '
        //     }
        //     for(var d=0;d<=r;d++){
        //         output+='*'
        //     }
        //     for(var e=1;e<(r+1);e++){
        //         output+='*'
        //     }
        //     if(r<rows){
        //         output+='\n'
        //     }
        // }
        // console.log(output)

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
            output+='\n'
        }
        console.log(output)
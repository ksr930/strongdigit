var express = require('express')
var bodyparser= require('body-parser')      // i make a strongdigit function which handle the login and one api for post and one for submit
var ejs = require('ejs')
var app= express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine','ejs')

// api for which user submit input
app.get('/',(req,res)=>{
    res.render('index')
})

// api for strongest digit -:'strongdigit' function declare below in a file
app.post('/strongest_digit',(req,res)=>{
    var temp= req.body.val;
    res.json(strongdigit(temp))
})

app.listen(3000,(err)=>{
if(err)
{
    console.log(err)
}
else{
    console.log('server connected')
}
})

// code for strong function 
function strongdigit(val){
var exactans={
    strongest:parseInt(val),
    steps:[]

}
var n=parseInt(val)
var arr=[]
var len=0;console.log(n)
while(n>0)
{
    arr.push(n%10);1
n=parseInt(n/10); 

len++;   
}


var brr=arr.reverse();

console.log(brr)

    var crr=[];
    
while(len>1)
{
    var start=0;
    var end=len-1;
    var crr=[];
    var count=0;
    var num=0;
    while(start<=end)
    {
        if(brr[start]<brr[end])
        {
           
            num=num*10;
            num=num+brr[end];
            crr.push(brr[end]);
            count++;

        }
        else if(brr[start]==brr[end])
        {
            
        }
        else{
         
            num = num * 10;
            num = num + brr[start];
            crr.push(brr[start]);
            count++;
        }

        if(start==end)
        {   
            num=num*10;
            num=num+brr[start];
            exactans.strongest=brr[start]
            crr.push(brr[start]);
           
            count++;
        }
        if(start==end-1)
        {
            if(brr[start]>brr[end])
             exactans.strongest=brr[start]
            else{
                exactans.strongest=brr[end]
            }
        }
        start++;
        end--;

    }
    brr=[]
    len=0;
    for(var i=0;i<count;i++)
    {
         brr.push(crr[i])  
         len++;
    }
    exactans.steps.push(num)
    
    
    console.log(brr)
}

exactans.steps.pop()

return exactans;

}
const myNums =[1,2,3]

//  const myTotal =myNums.reduce(function(acc,curr){
//     return acc+curr
//  },3// accumulator value given here
//  )


const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
 console.log(myTotal);

 const shoppingCart =[
        {
            item :"js coures",
            prince:12
        },
        {
            item :"mobile dev coures",
            prince:124
        },
        {
            item :"datascience coures",
            prince:1256
        }
 ]
 const priceTopay = shoppingCart.reduce((acc,item) => acc +item.prince,0)
 console.log(priceTopay);
 
 
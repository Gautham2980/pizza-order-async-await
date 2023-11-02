let stocks={
    choose:["Veg","Non-veg"],
    variety:["mushroom","chicken"],
    cheese:["need-more","minimum-level"],
    toppings:["mushroom","chicken"]
}

let shopOpen=true;


function opening(ms){

    return new Promise((resolve,reject)=>{

        if(shopOpen){
            setTimeout(resolve,ms)
        }

        else{
            reject("error")
        }
    })
}

async function prepare(){

    try{
        await opening(2000);
        console.log("shop open");
        console.log(`${stocks.choose[1]} Pizza was selected`);
        await opening(); 
        console.log("cooking is started");
        await opening(2000);
        console.log(`${stocks.variety[1]} was selected`);
        console.log(`${stocks.variety[1]} has been chopped`);
        
        await opening();
        console.log(`Start the machine`);
        await opening(2000);
        console.log(`${stocks.cheese[1]} cheese  was selected`);
        await opening(2000);
        console.log(`pizza topping is ${stocks.toppings[1]}`);
        await opening(3000);
        console.log("Serve the Pizza");

    }

    catch(err){
        console.log("customer left");
    }

}

prepare()
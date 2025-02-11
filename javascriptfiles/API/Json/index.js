url = "https://catfact.ninja/fact";
fetch(url)
async function getFacts(){
    try{
        let res =  await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res1 =  await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);

        let res2 =  await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);

        let res3 =  await fetch(url);
        let data3 = await res3.json();
        console.log(data3.fact);

        let res4 =  await fetch(url);
        let data4 = await res4.json();
        console.log(data4.fact);
    }
    catch(e){
        console.log("Error:", e)
    }
}
getFacts();
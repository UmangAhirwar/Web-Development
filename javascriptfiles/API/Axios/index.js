let url = "https://catfact.ninja/fact"

async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;

    } catch (error) {
        console.log("Error", error);
        return "No fact found"
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{

    let facts = await getFact();
    console.log(facts);

    let p = document.querySelector("#facts");
    p.innerText = facts;
})

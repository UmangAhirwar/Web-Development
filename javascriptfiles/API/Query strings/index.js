let url = "http://universities.hipolabs.com/search?name=";
let country = "nepal";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let collegeArr = await getCollege(country);
    show(collegeArr);
})
function show(collegeArr){
    let list = document.querySelector("#result");
    list.innerText = "";
    for(col of collegeArr){
        console.log(`country:${col.country}, name:${col.name}`);
        
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {try {
    let res = await axios.get(url+country);
    return res.data;
} catch (error) {
    console.log('error:', error)
}
}
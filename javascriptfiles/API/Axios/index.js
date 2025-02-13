//Add the url:
let url = "https://dog.ceo/api/breeds/image/random"

//Access the html elements
let btn = document.querySelector("button");
let img = document.querySelector("#Img");

//Add the event listener to the button to function the click
btn.addEventListener("click",async()=>{

    //Set the image's src attribute link by calling the function
    let link =  await getImage();
    img.setAttribute("src", link)
})

//Define the function
async function getImage(){
//fetch the url and return the value to the btn.
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (error) {
        return "No images found", error;
    }
}
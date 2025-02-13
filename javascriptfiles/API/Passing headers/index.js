let url = "https://icanhazdadjoke.com/"

async function getJokes() {
    try {
        //method to pass headers in api
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data.joke);
    } catch (error) {
        console.log("No more jokes");
    }
}
getJokes();
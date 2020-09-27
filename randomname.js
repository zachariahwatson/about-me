async function getRandomName() {
    const response = await fetch("https://randomuser.me/api/?inc=name");
    const data = await response.json();
    console.log(data.results);
    const html = data.results.map( data => {
        return data.name.first + " " + data.name.last;
    });
    document.getElementById("names").innerHTML = html; 
}

const info = document.getElementById("info");
const searchname = document.getElementById("search");
const searchbtn = document.getElementById("searchbtn");

async function search(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  try {
    if (res.status != 200) {
      throw new Error("Pokemon not found");
    }
    const data = await res.json();
    let types = [];
    data.types.forEach((element) => {
      types.push(element.type.name);
    });
    info.innerHTML = `
        <img src='${data.sprites.front_default}' height=200 width=200>
        <p>Name: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
        <p>Type : ${types.join(",")}</p>
        <p> Height : ${data.height}</p>
        <p> Weight : ${data.weight}</p>
        `;
  } catch (error) {
    info.innerHTML = `
            <h2>${error}</h2>
        `;
  }
}

searchbtn.onclick = () => search(searchname.value.trim().toLowerCase());


const baseURL = "https://swapi.dev/api/"

const residentsBtn = document.querySelector('button')
const namesList = document.querySelector('h1')

const getResidents = async () => {
    const getAllResidents = await axios.get(`${baseURL}planets/?search=Alderaan`)
    const Alderaan = getAllResidents.data.results
    let residentsList = []
    for(const property in Alderaan[0]) {
        if(property === 'residents') {
            residentsList.push(Alderaan[0][property])
        }
    }
    const nameObject1 = axios.get(residentsList[0][0])
    const nameObject2 = axios.get(residentsList[0][1])
    const nameObject3 = axios.get(residentsList[0][2])
    
    console.log(nameObject1)
    
    let names = document.createElement('div')
    names.innerHTML = `<h2>${name1}, ${name2}, ${name3}</h2>`
    namesList.appendChild(names)
}

residentsBtn.addEventListener('click', getResidents)
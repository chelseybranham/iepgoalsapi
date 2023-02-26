document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const studentName = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:8000/api/${studentName}`)
        const data = await response.json()
        const goalsList = document.createElement('ul')
        for (let goal in data) {
            const goalItem = document.createElement('li')
            goalItem.innerText = `${goal}: ${data[goal]}`
            goalsList.appendChild(goalItem)
        }
        document.querySelector('h2').innerText = `Goals for ${studentName}:`
        document.querySelector('h2').appendChild(goalsList)
    } catch(error){
        console.log(error)
    }
}

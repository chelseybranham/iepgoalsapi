document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const studentName = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:8000/api/${studentName}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('h2').innerText = data.studentGoals
    }catch(error){
        console.log(error)
    }
}
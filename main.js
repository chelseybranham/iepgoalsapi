document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const studentName = document.querySelector('input').value
    try{
        const response = await fetch(`https://.herokuapp.com/api/${studentName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.goals
    }catch(error){
        console.log(error)
    }
}
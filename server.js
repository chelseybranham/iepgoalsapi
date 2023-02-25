const express= require('express')
const app=express()
const PORT= 8000

const studentGoals={
'studentone' :{
    'studentone goalone':'When given X student will X in X trials by X date',
    'studentone goaltwo':'When given X student will X in X trials by X date',
    'studentone goalthree':'When given X student will X in X trials by X date'
},
'studenttwo':{
    'studenttwo goalone':'When given X student will X in X trials by X date',
    'studenttwo goaltwo':'When given X student will X in X trials by X date',
    'studenttwo goalthree':'When given X student will X in X trials by X date'
},
'studentThree':{
    'studentthree goalone':'When given X student will X in X trials by X date',
    'studentthree goaltwo':'When given X student will X in X trials by X date',
    'studentthree goalthree':'When given X student will X in X trials by X date'
},
'studentfour':{
    'studentfour goalone':'When given X student will X in X trials by X date',
    'studentfour goaltwo':'When given X student will X in X trials by X date',
    'studentfour goalthree':'When given X student will X in X trials by X date'
}}
app.get('/', (request, response)=>{
    response.sendFile(__dirname+'/index.html')
    })

app.get('/api/:studentName', (request,response)=>{
    let studentName= request.params.studentName.toLowerCase()
    if(studentGoals[studentName]){
    response.json(studentGoals[studentName])}
    else {
        response.json('Unknown Student')
    }
})

    
app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})
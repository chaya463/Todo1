import React, { Component } from 'react'

 class NewTodo extends Component {
    constructor(){
        super()
        this.stat={
            text:"",
            todo:"",
            edit:""
        }
    }

  render() {
    return (
      <div>NewTodo</div>
    )
  }
}


function Todo() {
   let [text,setText]= useState('')
   let [todo,setTodo]=useState([])
   let [edit,setEdit]=useState('')
   textHandler(e)
   {
    setText(e.target.value)
   }
    submitHandler()
   {
     if(text.length===0)
     {
        alert('not possible')
     }
     else{
        let obj={
            id:new Date().getMilliseconds(),
            msg:text
          }
          if(edit)
          {
           setTodo((pre)=>{
            return pre.map((data)=>{
                 if(data.id===edit.id)
                 {
                     data.msg=text;
                 }
                 return data
            })
           })
           setEdit('')
          }
          else{
            setTodo((pre)=>{
                return [...pre,obj]
               })
          }
           
           setText('')
     }



    
   }
//deletion

function deleteHandler(id)
{
    console.log(id)
    setTodo((pre)=>{
        return pre.filter((data)=>{
            return data.id !==id
        })

    })
}
//edit logic
function editHandler(id)
{
   let x=   todo.find((data)=>{
        return data.id ==id
     })
     setEdit(x)
     setText(x.msg)
}
  return (
      
    <div className="container bg-light">
        <h1 className='text-center text-dark'>Todo</h1>
        <div className="row">
            <div className="col">
                <input type='text'  placeholder='Enter your text' onChange={textHandler} value={text}/>
                <button className='btn btn-primary' onClick={submitHandler}>Add</button>
            </div>
        </div>

         {/* this much is for card */}
         <div className="row m-2">
           { todo.length===0?<h1>no data</h1>:todo.map((data)=>{
            return <div className="col">
                <div className="card">
                <div className="body">
                      {data.msg}
                    <button className='btn btn-primary' onClick={()=>{
                        deleteHandler(data.id)
                    }}>del</button>
                    <button className='btn btn-info'
                    onClick={()=>{
                        editHandler(data.id)
                    }}>edit</button>
                </div>
            </div>
        </div> 
           })}   
         </div>

     
        
    </div>


  )
}

export default NewTodo
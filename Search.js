import React, { useState } from 'react'

function SearchAssignment() {
    let  arr=[
        {id:1,text:"banglore"},  {id:2,text:"delhi"},  {id:3,text:"Tamilnadu"},  {id:4,text:"Andra"},  {id:5,text:"Bhihar"},{id:6,text:"kolkota"},{id:7,text:"kerala"},{id:8,text:"West-bengal"}
    ]
    function Ascending() {
      const sortedData = [...filterData].sort((a, b) => a.text.localeCompare(b.text));
      setFilterData(sortedData);
  }

  function Descending() {
      const sortedData = [...filterData].sort((a, b) => b.text.localeCompare(a.text));
      setFilterData(sortedData);
  }
    let [filterData,setFilterData]=useState(arr);
    function serachHandler(e)
    {
        let serchText=e.target.value
          console.log(serchText)
        let curData=  arr.filter((data)=>{
            return data.text.includes(serchText)
          })
       
        setFilterData(curData)

    }
  

  return (
    <div className="container"style={{backgroundColor:"red"}}>
    <div className="row">
        <div className="col">
            search  <input type='text' onChange={serachHandler} />
        </div>
    </div>
    <div className="row mt-2">
        <div className="col">
            <button onClick={Ascending} >Ascending</button><hr/>
            <button onClick={Descending}>Descending</button><hr/>
        

       <div className="container">
        <div className="row">
            <div className="col"> search  <input type='text'    onChange={serachHandler}/>
            </div>
        </div>
        <hr/>
        <div className="row">
            {
               filterData.length===0 ? <h1>no match</h1>:
                filterData.map((data)=>{
                    return     <div className="col m-2 " key={data.id}>
                             <div className="card">
                                <div className="card-body">
                                    <p>id:{data.id}</p>
                                    <p>text:{data.text}</p>
                                </div>
                             </div>
                    </div>
                })
            }
       </div>
    </div>   
</div>
        </div>
       </div>
  )
          }
       
export default SearchAssignment;

import { useState } from "react";

function Assigment() {
    const [inputValue, setInputValue] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [timing, setTiming] = useState(0);
    let[toggle,setToggle]=useState(true);
    let[color,setColor]=useState("black");
    let[bgColor,setBgColor]=useState("white");
  
    let handleChange = (event) => {
      let startTime = performance.now();
      let { value } = event.target;
      setInputValue(value);
      setCharacterCount(value.length);
      let endTime = performance.now();
      setTiming(endTime - startTime);
     }
    return (
        <div>
             <div style={{ width: "100vw", height: "100vh",backgroundColor: bgColor, color: color}}>
     
        <div style={{ textAlign: "center",margin:"20px" }}></div>
            <button style={{ backgroundColor:"white" }} onClick={() => {
                setToggle(!toggle);
                if (toggle) {
                    setBgColor("black");
                    setColor("white");
                } else {
                    setBgColor("white");
                    setColor("black");
                }
            }}>Dark</button>
            <div style={{ display: "flex", justifyContent: "center", gap: "0 1rem" }}>
               
            <div>
      <textarea
        rows="4"
        cols="50"
        value={inputValue}
        onChange={handleChange}
        placeholder="type here"
      />
      <div>
        <p>Character Count: {characterCount}</p>
        <p>Time Taken: {timing} getseconds</p>
      </div>
    </div>

            </div>
        </div>
        </div>

    )
}


export default Assigment;

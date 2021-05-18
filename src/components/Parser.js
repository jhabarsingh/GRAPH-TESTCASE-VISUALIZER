import React, {useState} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Card } from '@material-ui/core';




export default function Parser() {
  const [inputs, setInputs] = useState();
 
  const handleInputChange = (event) => {
    // event.persist();
    console.log(event.target.value)
    setInputs(event.target.value);
    
    localStorage.setItem("text", event.target.value)
  }

  return (
    <Card
        elevation={6}
    >
        <TextareaAutosize
        rowsMax={4}
        style={{
            width: "100%",
            height: "67vh",
            border: "none",
            outline: "none",
            fontWeight: "normal",
            letterSpacing: "5px",
            padding: "5px"
        }}
        onChange={handleInputChange} value={inputs}
        aria-label="maximum height"
        placeholder="Paste Testcase"
        />
    </Card>
  );
}
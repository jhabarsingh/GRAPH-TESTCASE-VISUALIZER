import React, {useState} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Card } from '@material-ui/core';




export default function Parser() {
  const [inputs, setInputs] = useState();
 
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => event.target.value);
    
    localStorage.setItem("text", inputs)
  }

  return (
    <Card
        elevation={6}
    >
        <TextareaAutosize
        rowsMax={4}
        style={{
            width: "100%",
            height: "70vh",
            border: "none",
            outline: "none",
            fontWeight: "normal",
            letterSpacing: "5px"
        }}
        onChange={handleInputChange} value={inputs}
        aria-label="maximum height"
        placeholder="Paste Testcase"
        />
    </Card>
  );
}
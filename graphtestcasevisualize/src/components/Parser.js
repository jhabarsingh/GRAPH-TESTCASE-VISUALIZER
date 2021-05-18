import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Card } from '@material-ui/core';

export default function Parser() {
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
            outline: "none"
        }}
        aria-label="maximum height"
        placeholder="Paste Testcase"
        />
    </Card>
  );
}
import {  useState } from 'react';

const ProcessNode = ({ data }:any) => {
    const [label1, setLabel1] = useState(data.label1 || 'Label 1');
    const [label2, setLabel2] = useState(data.label2 || 'Label 2');
  
    return (
      <div style={nodeStyle}>
        <input value={label1} onChange={(e) => setLabel1(e.target.value)} />
        <input value={label2} onChange={(e) => setLabel2(e.target.value)} />
      </div>
    );
  };


  const nodeStyle = {
    padding: '10px',
    border: '1px solid #000',
    borderRadius: '4px',
    backgroundColor: '#fff',
  };
  

  export default ProcessNode
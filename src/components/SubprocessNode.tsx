import {  useState } from 'react';

const SubprocessNode = ({ data }:any) => {
    const [label1, setLabel1] = useState(data.label1 || 'Subprocess Label 1');
    const [label2, setLabel2] = useState(data.label2 || 'Subprocess Label 2');
    const [label3, setLabel3] = useState(data.label3 || 'Subprocess Label 3');
  
    return (
      <div style={nodeStyle}>
        <input value={label1} onChange={(e) => setLabel1(e.target.value)} />
        <input value={label2} onChange={(e) => setLabel2(e.target.value)} />
        <input value={label3} onChange={(e) => setLabel3(e.target.value)} />
      </div>
    );
  };

  const nodeStyle = {
    padding: '10px',
    border: '1px solid #000',
    borderRadius: '4px',
    backgroundColor: '#fff',
  };
  

  export default SubprocessNode
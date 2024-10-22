import { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  MiniMap,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import ProcessNode from './components/ProcessNode';
import SubprocessNode from './components/SubprocessNode';

const nodeTypes = {
  process: ProcessNode,
  subprocess: SubprocessNode,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect: OnConnect = useCallback(
    (connection: any) => setEdges((edges:any) => addEdge(connection, edges)),
    [setEdges]
  );

  const addProcessNode = () => {
    const newNode = {
      id: `process-${nodes.length + 1}`,
      type: 'process',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label1: 'Process Label 1', label2: 'Process Label 2' },
    };
    setNodes((nds: any) => nds.concat(newNode));
  };

  const addSubprocessNode = () => {
    const newNode = {
      id: `subprocess-${nodes.length + 1}`,
      type: 'subprocess',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label1: 'Subprocess Label 1', label2: 'Subprocess Label 2', label3: 'Subprocess Label 3' },
    };
    setNodes((nds: any) => nds.concat(newNode));
  };

  const sendRequest = (nodes:any) => {
    const nodeData = nodes.map((node: any) => ({
      id: node.id,
      type: node.type,
      position: node.position,
      data: node.data,
    }));

    fetch('https://example.com/api/data', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nodeData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        alert('Данные успешно отправлены!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Ошибка при отправке данных.');
      });
  };


  return (
    <div style={rootStyle}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        panOnScroll
        zoomOnScroll
      >
        <MiniMap nodeColor={() => '#00ff00'} />
        <Controls />
      </ReactFlow>
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <button onClick={addProcessNode} style={buttonStyle}>Добавить Процесс</button>
        <button onClick={addSubprocessNode} style={buttonStyle}>Добавить Подпроцесс 1</button>
        <button onClick={addSubprocessNode} style={buttonStyle}>Добавить Подпроцесс 2</button>
      </div>
      <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <button onClick={()=>sendRequest(nodes)} style={buttonStyle}>Отправить запрос</button>
      </div>
    </div>
  );
}


const rootStyle = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#0d6efd' 
}

const buttonStyle = {
  margin: '5px',
  padding: '10px 15px',
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

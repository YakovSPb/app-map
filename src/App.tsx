import { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  MiniMap,
  Edge,
  Node,
  Connection,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import ProcessNode from './components/ProcessNode/ProcessNode';
import SubprocessNode from './components/SubprocessNode/SubprocessNode';
import Button from './components/_ui/Button/Button';
import sendRequest from './api/sendRequest';

interface ProcessNodeData {
  label1: string;
  label2: string;
}

interface SubprocessNodeData extends ProcessNodeData {
  label3: string;
}

interface ProcessNodeData extends Record<string, unknown> {
  label1: string;
  label2: string;
}

interface SubprocessNodeData extends ProcessNodeData {
  label3: string;
}

type CustomNode = Node<ProcessNodeData | SubprocessNodeData>;

type CustomEdge = Edge;

const nodeTypes = {
  process: ProcessNode,
  subprocess: SubprocessNode,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>([]);  
  const [edges, setEdges, onEdgesChange] = useEdgesState<CustomEdge>([]);

  const onConnect: OnConnect = useCallback(
    (connection: Connection) =>
      setEdges((edges: CustomEdge[]) => addEdge(connection, edges)),
    [setEdges]
  );

  const addProcessNode = () => {
    const newNode: CustomNode = {
      id: `process-${nodes.length + 1}`,
      type: 'process',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label1: 'Process Label 1', label2: 'Process Label 2' },
    };
    setNodes((nds: CustomNode[]) => nds.concat(newNode));
  };

  const addSubprocessNode = () => {
    const newNode: CustomNode = {
      id: `subprocess-${nodes.length + 1}`,
      type: 'subprocess',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {
        label1: 'Subprocess Label 1',
        label2: 'Subprocess Label 2',
        label3: 'Subprocess Label 3',
      },
    };
    setNodes((nds: CustomNode[]) => nds.concat(newNode));
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
        <Button addProcess={addProcessNode} text="Добавить Процесс" />
        <Button addProcess={addSubprocessNode} text="Добавить Подпроцесс 1" />
        <Button addProcess={addSubprocessNode} text="Добавить Подпроцесс 2" />
      </div>
      <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <Button addProcess={() => sendRequest(nodes)} text="Отправить запрос" />
      </div>
    </div>
  );
}

const rootStyle = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#0d6efd',
};

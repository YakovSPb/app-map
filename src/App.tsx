import { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  MiniMap,
  Connection,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import ProcessNode from './components/ProcessNode/ProcessNode';
import SubprocessNode from './components/SubprocessNode/SubprocessNode';
import Button from './components/_ui/Button/Button';
import sendRequest from './api/sendRequest';
import { CustomEdge, CustomNode } from './components/types/types';
import { PROCESS, SUBPROCESS } from './constants/constants';
import RootWrapper from './components/_ui/RootWrapper/RootWrapper';

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

  const addNode = useCallback((type: 'process' | 'subprocess', data: any) => {
    const newNode: CustomNode = {
      id: `${type}-${nodes.length + 1}`,
      type,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data,
    };
    setNodes((nds: CustomNode[]) => nds.concat(newNode));
  }, [nodes]);

  return (
    <RootWrapper>
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
      <Button addProcess={() => addNode('process', PROCESS)} text="Добавить Процесс" />
      <Button addProcess={() => addNode('subprocess', SUBPROCESS)} text="Добавить Подпроцесс 1" />
      <Button addProcess={() => addNode('subprocess', SUBPROCESS)} text="Добавить Подпроцесс 2" />
      </div>
      <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <Button addProcess={() => sendRequest(nodes)} text="Отправить запрос" />
      </div>
    </RootWrapper>
  );
}


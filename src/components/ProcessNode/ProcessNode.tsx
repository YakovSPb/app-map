import { useState, memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import NodeWrapper from '../_ui/NodeWrapper/NodeWrapper';
import Input from '../_ui/Input/Input';

interface ProcessNodeData {
  label1: string;
  label2: string;
}

interface ProcessNodeProps {
  data: ProcessNodeData;
}

const ProcessNode = ({ data }: ProcessNodeProps) => {
  const [label1, setLabel1] = useState(data.label1 || 'Label 1');
  const [label2, setLabel2] = useState(data.label2 || 'Label 2');

  return (
    <NodeWrapper>
      <Input value={label1} onChange={setLabel1} />
      <Input value={label2} onChange={setLabel2} />

      <Handle
        type="target"
        position={Position.Top}
        className='bg-gray-600'
      />

      <Handle
        type="source"
        position={Position.Bottom}
        className='bg-gray-600'
      />
    </NodeWrapper>
  );
};

export default memo(ProcessNode);
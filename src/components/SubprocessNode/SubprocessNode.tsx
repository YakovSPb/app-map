import { useState, memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import Input from '../_ui/Input/Input';
import NodeWrapper from '../_ui/NodeWrapper/NodeWrapper';

interface SubprocessNodeData {
  label1: string;
  label2: string;
  label3: string;
}

interface SubprocessNodeProps {
  data: SubprocessNodeData;
}

const SubprocessNode = ({ data }: SubprocessNodeProps) => {
  const [label1, setLabel1] = useState(data.label1 || 'Subprocess Label 1');
  const [label2, setLabel2] = useState(data.label2 || 'Subprocess Label 2');
  const [label3, setLabel3] = useState(data.label3 || 'Subprocess Label 3');

  return (
    <NodeWrapper>
      <Input value={label1} onChange={setLabel1} />
      <Input value={label2} onChange={setLabel2} />
      <Input value={label3} onChange={setLabel3} />
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#555' }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#555' }}
      />
    </NodeWrapper>
  );
};

export default memo(SubprocessNode);

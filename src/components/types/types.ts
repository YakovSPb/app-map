import {
    Edge,
    Node,
} from '@xyflow/react';

export interface ProcessNodeData extends Record<string, unknown> {
    label1: string;
    label2: string;
}

export interface SubprocessNodeData extends ProcessNodeData {
    label3: string;
}

export type CustomNode = Node<ProcessNodeData | SubprocessNodeData>;

export type CustomEdge = Edge;

export interface NodeData {
    id: string;
    type: string; 
    position: { x: number; y: number };
    data: Record<string, unknown>;
}

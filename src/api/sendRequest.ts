import { NodeData } from "../components/types/types";

const sendRequest = (nodes: NodeData[]) => {
    const nodeData = nodes.map((node) => ({
        id: node.id,
        type: node.type || 'unknown',
        position: node.position,
        data: node.data,
    }));

    return fetch('https://example.com/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nodeData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Сетевая ошибка: ответ не корректный');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Успех:', data);
            alert('Данные успешно отправлены!');
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке данных.');
        });
};


export default sendRequest;

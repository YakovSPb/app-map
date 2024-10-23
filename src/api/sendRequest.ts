interface NodeData {
    id: string;
    type: string;
    position: { x: number; y: number };
    data: Record<string, unknown>;
  }
  
  const sendRequest = (nodes: NodeData[]) => {
    const nodeData = nodes.map((node) => ({
      id: node.id,
      type: node.type,
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
  
  export default sendRequest;
  
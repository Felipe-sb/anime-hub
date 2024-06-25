export const jsonRead = async () => {
    try {
        const response = await fetch('/output.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
};

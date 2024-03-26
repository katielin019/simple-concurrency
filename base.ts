import axios from 'axios';

export async function makeOneGetRequest(requestNumber: number) {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const response = await axios.get('https://rest-example.covey.town');
    console.log(`Request ${requestNumber} completed, server replied: `, response.data);
}
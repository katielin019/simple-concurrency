import axios from 'axios';

async function makeOneGetRequest(requestNumber: number) {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const response = await axios.get('https://rest-example.covey.town');
    console.log(`Request ${requestNumber} completed, server replied: `, response.data);
}

async function makeThreeSimpleRequests() {
    makeOneGetRequest(1);
    makeOneGetRequest(2);
    makeOneGetRequest(3);
    console.log('Three requests made');
}

makeThreeSimpleRequests();

// $ npx ts-node example1.ts
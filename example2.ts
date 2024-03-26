import axios from 'axios';

async function makeOneGetRequest(requestNumber: number) {
    const response = await axios.get('https://rest-example.covey.town');
    console.log(`Request ${requestNumber} completed, server replied: `, response.data);
}

async function makeThreeSerialRequests(): Promise<void> {
    await makeOneGetRequest(1);
    await makeOneGetRequest(2);
    await makeOneGetRequest(3);
    console.log('All requests completed');
}

makeThreeSerialRequests();

// $ npx ts-node example2.ts
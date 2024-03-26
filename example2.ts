import { makeOneGetRequest } from "./base";

async function makeThreeSerialRequests(): Promise<void> {
    await makeOneGetRequest(1);
    await makeOneGetRequest(2);
    await makeOneGetRequest(3);
    console.log('Heard back from all requests');
}

makeThreeSerialRequests();

// $ npx ts-node example2.ts
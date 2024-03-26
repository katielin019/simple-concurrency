import { makeOneGetRequest } from "./base";

async function makeThreeConcurrentRequests(): Promise<void> {
    await Promise.all([
        makeOneGetRequest(1),
        makeOneGetRequest(2),
        makeOneGetRequest(3),
    ]);
    console.log('Heard back from all requests');
}

makeThreeConcurrentRequests();

// $ npx ts-node example3.ts
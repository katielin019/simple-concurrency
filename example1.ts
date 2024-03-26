import { makeOneGetRequest } from "./base";

async function makeThreeSimpleRequests() {
    makeOneGetRequest(1);
    makeOneGetRequest(2);
    makeOneGetRequest(3);
    console.log('Three requests made');
}

makeThreeSimpleRequests();

// $ npx ts-node example1.ts
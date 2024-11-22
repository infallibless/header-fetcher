const axios = require('axios');
const readline = require('readline-sync');

const B = '\x1b[1;97m';
const K = '\x1b[1;31m';
const Y = '\x1b[2;32m';
const S = '\x1b[1;33m';

async function fetchHeaders() {
    try {
        const site = readline.question(`${S}enter the url of the site to fetch headers -> ${B}`);
        const response = await axios.get(`https://api.hackertarget.com/httpheaders/?q=${site}`);
        console.log(`\n\n${Y} headers fetched successfully!\n\n`);
        console.log(`${Y} api respone -> ${B}\n\n${response.data}`);
    } catch (error) {
        console.log(`\n${K} unfortunately, the api seems to be down!`);
    }
}


fetchHeaders();

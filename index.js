const axios = require('axios')
const { exec } = require('child_process')
const url = 'https://canteenday-2024.vercel.app/gallery'

axios.get(url).then((response) => {
    const data = response.data;
    const images = data.filter((item) => item.url.includes('imgur.com'))
    images.forEach(element => {
        exec(`curl -o ./images/${element.url.split('/')[3]} -L ${element.url}`, (err, stdout, stderr) => {
            if (err) {
                console.error(`exec error: ${err}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        })
    });

})
const fs = require('fs');
const files = fs.readdirSync('./torename');
const uniqueStr = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 12; // adjust the length of the unique code as needed

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

files.filter(r=>r.endsWith(".png")).forEach((file) => {
    const newFileName = uniqueStr() + '.png';
    fs.rename(`./torename/${file}`, `./torename/${newFileName}`, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Renamed ${file} to ${newFileName}`);
    })
})
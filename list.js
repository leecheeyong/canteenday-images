const fs = require('fs')
const gm = require('image-size')
const files = fs.readdirSync('./torename')

files.filter(m => m.endsWith('webp')).forEach(file =>{
    gm(`./torename/${file}`, (err, size) => {
    const orientation = size.width > size.height ? 'Landscape' : 'Portrait'
    console.log(`https://joe.js.org/canteenday-images/images/${file}    IMAGES  乐队  ${orientation}`)
    })
})
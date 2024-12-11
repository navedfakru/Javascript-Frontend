const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

for (let i = 0; i < 100; i++){
    console.log(randomColor())
console.log(Math.floor(Math.random() * 16))
}
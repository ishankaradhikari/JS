const clock = document.querySelector('#clock')

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    clock.innerHTML = `${hour}:${min}:${sec}`
},1000);
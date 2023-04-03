var motorStatus = parseInt(decodeURIComponent(window.location.search.substr(1)).split('=')[1] || 0);
window.onload = function(){
    if(motorStatus == 0){
        document.querySelector('form[name="controlador"] input[type="submit"]').value = 'Dark';
        document.querySelector('form[name="controlador"] input[type="hidden"]').value = '1';
    } 
    if(motorStatus == 1){
        document.querySelector('form[name="controlador"] input[type="submit"]').value = 'Light';
        document.querySelector('form[name="controlador"] input[type="hidden"]').value = '0';
        document.body.style.background = 'rgb(43, 42, 42)'
        document.getElementById('main').style.background = 'rgb(20, 20, 18)';
        document.getElementById('main').style.boxShadow = '7px 7px 3px rgba(68, 68, 68, 0.425)';
        document.body.style.color = 'white'
        document.getElementById('nome').style.color = 'white';
    }
}

const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
}
  
setInterval(() => {
    getHours()
}, 1000)
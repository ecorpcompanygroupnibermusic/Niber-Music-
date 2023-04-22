if('serviceWorker'in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(res=>{
        console.log('serviceworker registered successfully')
        console.log(res)
    })
    .catch(error=>{
        console.log(error)
    })
}
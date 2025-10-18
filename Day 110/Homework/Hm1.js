const AsyncFunc=async ()=>{
    const respone=await fetch("https://jsonplaceholder.typicode.com/users")
    const info=await respone.json()
    console.log(info)
    
}

AsyncFunc()
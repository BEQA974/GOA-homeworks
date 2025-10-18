const AsyncFunc=async()=>{
    try{
        const response=await fetch("htps://jsonplaceholder.typicode")
        const info=await response.json()
        console.log(info)
    }catch(error){
        console.log("The API link is incorrect")
        console.log("Error",error)
    }
    
}


AsyncFunc()
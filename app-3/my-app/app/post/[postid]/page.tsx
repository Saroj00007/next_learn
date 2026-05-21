


export default async function({params} : {
    params : {
        postid : string
    }
}){

    const id = await params.postid
    
  
    return <div>
        {params.postid}
    </div>
}
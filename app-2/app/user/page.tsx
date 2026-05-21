import { prisma } from "@/lib/db"

const fetchdata = async ()=>{
    const user  = await prisma.user.findMany({})
    console.log(user)
    return user

}

const Page = async ()=>{
     const users =await   fetchdata()
    return <div className="h-screen w-screen flex flex-col items-center  p-6 border-2 border-slate-300 text-2xl">
       <div>USER PAGE</div>
       
       {users.map((user)=>{
        return <div className="text-center" key={user.id}>
            id: {user.id}<br/>
            name : {user.name} <br />
            password : {user.password}<br/><br/>
        </div>
       })}
    
    </div>
}

export default Page
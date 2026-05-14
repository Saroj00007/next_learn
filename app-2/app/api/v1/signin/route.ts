import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req  :NextRequest)=>{
    
    console.log("hello")
    const data =await  req.json();
    const user = await prisma.user.create({
        data: {
            name : data.name , 
            password  : data.password
        }
    })

    console.log(user)

    //store that data in database 

    return NextResponse.json({
        message : "signed in success"
    })
}
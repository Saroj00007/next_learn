import { NextResponse } from "next/server";



export function GET(){
     return NextResponse.json({
     name : "saroj" , 
     email  :"saroj.kandel@gmail.com"
     })
}


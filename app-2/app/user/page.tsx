import axios from 'axios'
import React from 'react'

const page = async () => {

 const response = await axios.get("http://localhost:3000/api/v1/user/detail");

 const data = response.data

  return (<div>
    <div>{data.name}</div>
    <div>{data.email}</div></div>
  )
}


export default page
import React from 'react';
import { createClient } from 'contentful';

const UseContentful = () => {
   const client= createClient({
        space:"k9ww1vb9o8gx",
        accessToken:"L0qdsWTaBK3j6ZgLORXA_mSn5haUR06IR07rQFoqfvw",
        host:"cdn.contentful.com"
    });

  const jsobject= async()=>{
    try{
        const entries= await client.getEntries({
            content_type:"cms",
            select:"fields"
        });
        return entries;
    }catch(error){
        console.log(`Error fetching cms: ${error}`);
    }
  };

  return {jsobject};
}

export default UseContentful
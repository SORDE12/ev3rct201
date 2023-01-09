import React from 'react'

const projects = ({data}) => {
    console.log(data);
  return (
    <div>
        {
            // data.map((e)=>(
            //     <p>Name:{e.name}</p>
            // ))
        }
    </div>
  )
}

export default projects

export async function getStaticProps() {
 
    let res = await fetch(`https://api.github.com/users/SORDE12/repos`);
  
    let d = await res.json();
  
    return {
      props: {
        data: d,
      },
    };
  }
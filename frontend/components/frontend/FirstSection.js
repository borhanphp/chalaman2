import React from 'react'
import Link from 'next/link';
import renderHTML from 'react-render-html';
import styled from 'styled-components';



const Secblog = styled.div`
    float: left;
    width: 33%;

`;


const FirstSection = ({blog}) => {
  return (
      <>
     
            
              <div className='col-4 float-start p-3'>
                
                <img src='img1.jpg' className='w-100 mt-3' />
              
              
                <Link href={`/blogs/${blog.slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
                    </a>
                </Link>
              
                <p className=''>{renderHTML(blog.excerpt)}</p>
              </div>
            
            
      
      </>
    
  )
}

export default FirstSection;
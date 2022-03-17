import Frontpage from '../components/frontend/Frontpage'
import Link from 'next/link';
import styled from "styled-components";
import styles from '/styles/Frontpage.module.css'
import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags, listBlogs } from '../actions/blog';
import Card from '../components/blog/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import Layout2 from '../components/Layout2';
import FirstSection from '../components/frontend/FirstSection';




const FirstBlog = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {



const [limit, setLimit] = useState(blogsLimit);
const [skip, setSkip] = useState(0);
const [size, setSize] = useState(totalBlogs);
const [loadedBlogs, setLoadedBlogs] = useState([]);


const showAllBlogs = () => {
  return blogs?.map((blog, i) => {
      // ()
      return (
          <article key={i}>
              <FirstSection blog={blog} />
              {/* <Frontpage blog={blog} /> */}
          </article>
      );
  });
};




  return (
    
    <>
          {showAllBlogs()} 
    </>
  )

};



FirstBlog.getInitialProps = () => {
  let skip = 0;
  let limit = 3;
  return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
      if (data?.error) {
          console.log(data.error);
      } else {
          return {
              blogs: data?.blogs,
              categories: data?.categories,
              tags: data?.tags,
              totalBlogs: data?.size,
              blogsLimit: limit,
              blogSkip: skip
          };
      }
  });
};

export default withRouter(FirstBlog);
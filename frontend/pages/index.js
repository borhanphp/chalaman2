import Frontpage from '../components/frontend/Frontpage'
import FirstSection from '../components/frontend/FirstSection';
import Link from 'next/link';
import styled from "styled-components";
import renderHTML from 'react-render-html';
import styles from '/styles/Frontpage.module.css'
import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags, listBlogs } from '../actions/blog';
import Card from '../components/blog/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import Layout2 from '../components/Layout2';
import firstsection from './firstsection';





const Blogs = ({ sports, technology, education, health, lifestyle, artlit, religion, travel, reciepe, entertainment, gallery, video, worldnews,  economy,  politics,  bangladesh,  specialnews,  america,  last, blogs,  muktomot,  categories,  tags,  totalBlogs,  blogsLimit,  blogSkip,  router }) => {

  const head = () => (
    <Head>
        <title>NewYork News | {APP_NAME}</title>
        <meta
            name="description"
            content="Daily newyork news news"
        />
        <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
        <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
        <meta
            property="og:description"
            content="Newyork News"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />

        <meta property="og:image" content={`${DOMAIN}/public/chalaman.png`} />
        <meta property="og:image:secure_url" content={`${DOMAIN}/public/chalaman.png`} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
);



// const [limit, setLimit] = useState(blogsLimit);
// const [skip, setSkip] = useState(0);
// const [size, setSize] = useState(totalBlogs);
// const [loadedBlogs, setLoadedBlogs] = useState([]);

// const loadMore = () => {
//     let toSkip = skip + limit;
//     listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             setLoadedBlogs([...loadedBlogs, ...data.blogs]);
//             setSize(data.size);
//             setSkip(toSkip);
//         }
//     });
// };

// const loadMoreButton = () => {
//     return (
//         size > 0 &&
//         size >= limit && (
//             <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
//                 Load more
//             </button>
//         )
//     );
// };

// const showAllBlogs = () => {
//     return blogs?.map((blog, i) => {
//         // ()
//         return (
//             <article key={i}>
//                 <Card blog={blog} />
//                 <hr />
//             </article>
//         );
//     });
// };

// const showAllCategories = () => {
//     return categories?.map((c, i) => (
//         <Link href={`/categories/${c.slug}`} key={i}>
//             <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
//         </Link>
//     ));
// };

// const showAllTags = () => {
//     return tags?.map((t, i) => (
//         <Link href={`/tags/${t.slug}`} key={i}>
//             <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
//         </Link>
//     ));
// };

// const showLoadedBlogs = () => {
//     return loadedBlogs?.map((blog, i) => (
//         <article key={i}>
//             <Frontpage blog={blog} />
//         </article>
//     ));
// };



const showAllBlogs = () => {
  return blogs?.map((blog, i) => {
      // ()
      return (
          <article key={i}>
              <Frontpage blog={blog} />
              {/* <FirstSection blog={blog} /> */}
          </article>
      );
  });
};



  return (
    
    <>
    {head()}
   
    
    
         {/* {showAllCategories()} */}
        {/* {showAllTags()} */}
          {/* {showAllBlogs()} */}
          {/* <Frontpage/> */}
          {/* <FirstSection/> */}
          {/* <firstsection/> */}
          {/* <div className="container-fluid">{showLoadedBlogs()}</div> */}
          {/* <div className="text-center pt-5 pb-5">{loadMoreButton()}</div> */}


          <div className='container-fluid px-0'>
          <div className='row d-flex justify-content-evenly'>
            <div className='col-md-4 row'>
              <div className='col-12'>
                
                <img src='img1.jpg' className='w-100 mt-3' />
              </div>
              <div className='col-12'>
                <Link href={`/blogs/${last[0].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{last[0].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
                <p className=''>{renderHTML(last[0].excerpt)}</p>
              </div>
            </div>
            

            <div className='col-md-4 row'>
              <div className='col-12'>
              <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12 mb-2'>
              <Link href={`/blogs/${last[1].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{last[1].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
                  <p className=''>{renderHTML(last[1].excerpt)}</p>  
              </div>
            </div>

            <div className='col-md-4 row'>
              <div className='col-12'>
                <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12 mb-2'>
              <Link href={`/blogs/${last[2].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{last[2].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
              <p className=''>{renderHTML(last[2].excerpt)}</p>    
               </div>
            </div>
          </div>
           
           
           
           
           
           
           
           {/* america section start here */}
          <div className='row d-flex justify-content-evenly'>
            <div className='col-md-12'>
              <Link href="/categories/america">
              <a>
              <p className={styles.america}>
                আমেরিকা
              </p>
              </a>
              </Link>
              <div className={styles.hr}></div>
            </div>
          </div>

          <div className='row d-flex justify-content-evenly'>
            <div className='col-md-3 row'>
              <div className='col-12'>
                <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12'>
              <Link href={`/blogs/${america[0].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{america[0].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
              <p className=''>{renderHTML(america[0].excerpt)}</p>  
              </div>
            </div>




            <div className='col-md-3 row'>
              <div className='col-12'>
                <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12'>
              <Link href={`/blogs/${america[1].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{america[1].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
              <p className=''>{renderHTML(america[1].excerpt)}</p>  
              </div>
            </div>


            <div className='col-md-3 row'>
              <div className='col-12'>
                <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12'>
              <Link href={`/blogs/${america[2].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{america[2].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
              <p className=''>{renderHTML(america[2].excerpt)}</p>  
              </div>
            </div>



            <div className='col-md-3 row'>
              <div className='col-12'>
                <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12'>
              <Link href={`/blogs/${america[3].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{america[3].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
              <p className=''>{renderHTML(america[3].excerpt)}</p>  
              </div>
            </div>



            <div className='col-md-3 row'>
              <div className='col-12'>
                <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12'>
              <Link href={`/blogs/${america[4].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{america[4].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
              <p className=''>{renderHTML(america[4].excerpt)}</p>  
              </div>
            </div>


            <div className='col-md-3 row'>
              <div className='col-12'>
                <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12'>
              <Link href={`/blogs/${america[5].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{america[5].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
              <p className=''>{renderHTML(america[5].excerpt)}</p>  
              </div>
            </div>



            <div className='col-md-3 row'>
              <div className='col-12'>
                <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12'>
              <Link href={`/blogs/${america[6].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{america[6].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
              <p className=''>{renderHTML(america[6].excerpt)}</p>  
              </div>
            </div>


            <div className='col-md-3 row'>
              <div className='col-12'>
                <img src='img1.jpg' className='w-100 my-3' />
              </div>
              <div className='col-12'>
              <Link href={`/blogs/${america[7].slug}`}>
                    <a className='text-start'>
                        <h2 className="pt-3 pb-3 font-weight-bold">{america[7].title}</h2>
                    </a>
                </Link>
              </div>
              <div className='col-12'>
              <p className=''>{renderHTML(america[7].excerpt)}</p>  
              </div>
            </div>
          </div>




          {/************************ Muktomot section start here muktomot *************************/}
          <div className='row'>
            <div className='col-md-12'>
              <p className={styles.america}>মুক্তমত </p>
              <div className={styles.hr}></div>
            </div>
          </div>

          <div className='row d-flex justify-content-evenly'>
            <div className='col-md-3 row p-4'>
              <img src='img1.jpg' className={styles.borderimg} />
              <Link href={`/blogs/${muktomot[0].slug}`}>
                <a>
                  <h4 className={styles.borderst}>{muktomot[0].title}</h4>
                </a>
              </Link>
            </div>


            <div className='col-md-3 row p-3'>
              <img src='img1.jpg' className={styles.borderimg} />
              <Link href={`/blogs/${muktomot[1].slug}`}>
                <a>
                  <h4 className={styles.borderst}>{muktomot[1].title}</h4>
                </a>
              </Link>
            </div>


            <div className='col-md-3 row p-3'>
              <img src='img1.jpg' className={styles.borderimg} />
              <Link href={`/blogs/${muktomot[2].slug}`}>
                <a>
                  <h4 className={styles.borderst}>{muktomot[2].title}</h4>
                </a>
              </Link>
            </div>


            <div className='col-md-3 row p-3'>
              <img src='img1.jpg' className={styles.borderimg} />
              <Link href={`/blogs/${muktomot[3].slug}`}>
                <a>
                  <h4 className={styles.borderst}>{muktomot[3].title}</h4>
                </a>
              </Link>
            </div>
          </div>
          
          
          
          {/* special news section start here */}

          <div className='row'>
            <div className='col-md-12'>
              <p className={styles.america}>স্পেশাল নিউজ </p>
              <div className={styles.hr}></div>
            </div>
          </div>

          <div className='row d-flex justify-content-evenly'>
            <div className='col-md-3 row '>
              <div className={styles.specialsec}>
                <img src='img1.jpg' className='w-100 h-100' />
                <Link href={`/blogs/${specialnews[0].slug}`}>
                  <a>
                    <h4 className={styles.bottomleft}>{specialnews[0].title}</h4>
                  </a>
                </Link>
              </div>
            </div>

            <div className='col-md-3 row'>
              <div className={styles.specialsec}>
                <img src='img1.jpg' className='w-100 h-100' />
                <Link href={`/blogs/${specialnews[1].slug}`}>
                  <a>
                    <h4 className={styles.bottomleft}>{specialnews[1].title}</h4>
                  </a>
                </Link>
              </div>
            </div>

            <div className='col-md-3 row'>
              <div className={styles.specialsec}>
                <img src='img1.jpg' className='w-100 h-100' />
                <Link href={`/blogs/${specialnews[2].slug}`}>
                  <a>
                    <h4 className={styles.bottomleft}>{specialnews[2].title}</h4>
                  </a>
                </Link>
              </div>
            </div>

            <div className='col-md-3 row'>
              <div className={styles.specialsec}>
                <img src='img1.jpg' className='w-100 h-100' />
                <Link href={`/blogs/${specialnews[3].slug}`}>
                  <a>
                    <h4 className={styles.bottomleft}>{specialnews[3].title}</h4>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/******************************** * bangladesh section start here *********************************/}

          <div className='row mt-4'>
            <div className='col-md-12'>
              <p className={styles.america}>বাংলাদেশ</p>
              <div className={styles.hr}></div>
            </div>
          </div>

            <div className='row d-flex justify-content-evenly'>
              <div className='col-md-8 row mt-2'>
                <div className='col-4'>
                  <div className={styles.banglasec}>
                    <img src='img1.jpg' className='w-100'/>
                    <Link href={`/blogs/${bangladesh[0].slug}`}>
                      <a>
                        <h4 className='p-2'>{bangladesh[0].title}</h4>
                      </a>
                    </Link>
                    <p className='p-2'>{bangladesh[0].excerpt}</p>
                  </div>
                </div>




                <div className='col-4'>
                  <div className={styles.banglasec}>
                    <img src='img1.jpg' className='w-100'/>
                    <Link href={`/blogs/${bangladesh[1].slug}`}>
                      <a>
                        <h4 className='p-2'>{bangladesh[1].title}</h4>
                      </a>
                    </Link>
                    <p className='p-2'>{bangladesh[1].excerpt}</p>
                    </div>
                </div>



                <div className='col-4'>
                  <div className={styles.banglasec}>
                    <img src='img1.jpg' className='w-100'/>
                    <Link href={`/blogs/${bangladesh[2].slug}`}>
                      <a>
                        <h4 className='p-2'>{bangladesh[2].title}</h4>
                      </a>
                    </Link>
                    <p className='p-2'>{bangladesh[2].excerpt}</p>
                  </div>
                </div>


                <div className='col-4 mt-2'>
                  <div className={styles.banglasec}>
                    <img src='img1.jpg' className='w-100'/>
                    <Link href={`/blogs/${bangladesh[3].slug}`}>
                      <a>
                        <h4 className='p-2'>{bangladesh[3].title}</h4>
                      </a>
                    </Link>
                    <p className='p-2'>{bangladesh[3].excerpt}</p>
                  </div>
                </div>


                <div className='col-4 mt-2'>
                  <div className={styles.banglasec}>
                    <img src='img1.jpg' className='w-100'/>
                    <Link href={`/blogs/${bangladesh[4].slug}`}>
                      <a>
                        <h4 className='p-2'>{bangladesh[4].title}</h4>
                      </a>
                    </Link>
                    <p className='p-2'>{bangladesh[4].excerpt}</p>
                  </div>
                </div>


                <div className='col-4 mt-2'>
                  <div className={styles.banglasec}>
                    <img src='img1.jpg' className='w-100'/>
                    <Link href={`/blogs/${bangladesh[5].slug}`}>
                      <a>
                        <h4 className='p-2'>{bangladesh[5].title}</h4>
                      </a>
                    </Link>
                    <p className='p-2'>{bangladesh[5].excerpt}</p>
                  </div>
                </div>
              </div>


              <div className='col-md-4 row'>
                <div className='col-lg-12'>
                  <div className={styles.shark-3}>
                  <img 
                    src='ads3.gif' 
                    className='mt-2 w-100' 
                    style={{
                      height: '300px', 
                      weight: '300px',
                    }}
                  />

                  <img 
                    src='ads3.gif' 
                    className='mt-2 w-100' 
                    style={{
                      height: '300px', 
                      weight: '300px',
                    }}
                  />
                  
                  
                </div>
                </div>
                
              </div>
            </div>

            {/*************************** * politics section start here *************************/}

            <div className='row d-flex justify-content-around'>
              <div className='col-md-4 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                   <Link href="/categories/politics"><a><p className={styles.america2}>রাজনীতি</p></a></Link>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${politics[0].slug}`}>
                      <a>
                        <h3 className='mt-3 p-2'>{politics[0].title}</h3>
                      </a>
                    </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            <img src='img1.jpg' className='w-100'/>
                          </div>
                          <div className='col-8'>
                          <Link href={`/blogs/${politics[1].slug}`}>
                            <a>
                              <p>{politics[1].title}</p>
                            </a>
                          </Link>
                          </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            <img src='img1.jpg' className='w-100'/>
                          </div>
                        <div className='col-8'>
                          <Link href={`/blogs/${politics[2].slug}`}>
                            <a>
                              <p>{politics[2].title}</p>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            <img src='img1.jpg' className='w-100'/>
                          </div>
                        <div className='col-8'>
                        <Link href={`/blogs/${politics[3].slug}`}>
                            <a>
                              <p>{politics[3].title}</p>
                            </a>
                        </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>









              {/* *******************************Economy section******************************* */}
              <div className='col-md-4 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>অর্থনীতি</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${economy[0].slug}`}>
                      <a>
                        <h3 className='mt-3 p-2'>{economy[0].title}</h3>
                      </a>
                    </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            <img src='img1.jpg' className='w-100'/>
                          </div>
                          <div className='col-8'>
                          <Link href={`/blogs/${economy[1].slug}`}>
                            <a>
                              <p>{economy[1].title}</p>
                            </a>
                          </Link>
                          </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            <img src='img1.jpg' className='w-100'/>
                          </div>
                        <div className='col-8'>
                          <Link href={`/blogs/${economy[2].slug}`}>
                            <a>
                              <p>{economy[2].title}</p>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            <img src='img1.jpg' className='w-100'/>
                          </div>
                        <div className='col-8'>
                        <Link href={`/blogs/${economy[3].slug}`}>
                            <a>
                              <p>{economy[3].title}</p>
                            </a>
                        </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>


              {/* *****************************world news******************************* */}


              <div className='col-md-4 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>বিশ্বজুড়ে</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${worldnews[0].slug}`}>
                      <a>
                        <h3 className='mt-3 p-2'>{worldnews[0].title}</h3>
                      </a>
                    </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            <img src='img1.jpg' className='w-100'/>
                          </div>
                          <div className='col-8'>
                          <Link href={`/blogs/${worldnews[1].slug}`}>
                            <a>
                              <p>{worldnews[1].title}</p>
                            </a>
                          </Link>
                          </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            <img src='img1.jpg' className='w-100'/>
                          </div>
                        <div className='col-8'>
                          <Link href={`/blogs/${worldnews[2].slug}`}>
                            <a>
                              <p>{worldnews[2].title}</p>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-4'>
                            <img src='img1.jpg' className='w-100'/>
                          </div>
                        <div className='col-8'>
                        <Link href={`/blogs/${worldnews[3].slug}`}>
                            <a>
                              <p>{worldnews[3].title}</p>
                            </a>
                        </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
            </div>

            {/* mini thumb section end here */}

        {/* middle advertisement start here */}
        
            <div className='row mt-2 d-flex justify-content-center p-2'>
              <div className='col-12 mb-2'>
                <img src='banner-2.jpg' className='w-100' style={{height: '100px'}}/>
              </div>
              <div className='col-6'>
                <img src='ad1.jpg' className='w-100'/>
              </div>
              <div className='col-6'>
                <img src='ad2.jpg' className='w-100'/>
              </div>
            </div>


            {/**************************** * projukti start here ***********************************/}


            <div className='row d-flex justify-content-evenly'>
            <div className='col-md-3 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>শিক্ষা</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${education[0].slug}`}>
                        <a>
                          <p className='fw-bold p-2 font-weight-bold'>{education[0].title}</p>
                        </a>
                      </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${education[1].slug}`}>
                          <a>
                            <p>{education[1].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${education[2].slug}`}>
                          <a>
                            <p>{education[2].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${education[3].slug}`}>
                          <a>
                            <p>{education[3].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
              
              
              
              
              {/* ************************health section start here************************ */}


              <div className='col-md-3 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>স্বাস্থ্য</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${health[0].slug}`}>
                        <a>
                          <p className='fw-bold mt-3 p-2'>{health[0].title}</p>
                        </a>
                        </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${health[1].slug}`}>
                          <a>
                            <p>{health[1].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${health[2].slug}`}>
                          <a>
                            <p>{health[2].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${health[3].slug}`}>
                          <a>
                            <p>{health[3].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>






              {/* ******************************lifestyle start here******************************** */}
              <div className='col-md-3 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>লাইফস্টাইল</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${lifestyle[1].slug}`}>
                        <a>
                          <p className='fw-bold mt-3 p-2'>{lifestyle[0].title}</p>
                        </a>
                      </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${lifestyle[1].slug}`}>
                          <a>
                            <p>{lifestyle[1].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${lifestyle[2].slug}`}>
                          <a>
                            <p>{lifestyle[2].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${lifestyle[3].slug}`}>
                          <a>
                            <p>{lifestyle[3].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>

              {/* **************************Art and liturature section start here*************************** */}

              <div className='col-md-3 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>শিল্প ও সাহিত্য </p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${artlit[1].slug}`}>
                      <a>
                        <p className='fw-bold mt-3 p-2'>{artlit[0].title}</p>
                      </a>
                      </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${artlit[1].slug}`}>
                          <a>
                            <p>{artlit[1].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${artlit[2].slug}`}>
                          <a>
                            <p>{artlit[2].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${artlit[3].slug}`}>
                          <a>
                            <p>{artlit[3].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
              {/* ************************Technology section start here************************** */}

              <div className='col-md-3 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>প্রযুক্তি</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${technology[0].slug}`}>
                        <a>
                          <p className='fw-bold mt-3 p-2'>{technology[0].title}</p>
                        </a>
                      </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${technology[1].slug}`}>
                          <a>
                            <p>{technology[1].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${technology[2].slug}`}>
                          <a>
                            <p>{technology[2].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${technology[3].slug}`}>
                          <a>
                            <p>{technology[3].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>

{/* ********************************relidion section start here********************************** */}

<div className='col-md-3 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>ধর্ম</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${religion[0].slug}`}>
                        <a>
                          <p className='fw-bold mt-3 p-2'>{religion[0].title}</p>
                        </a>
                      </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${religion[1].slug}`}>
                          <a>
                            <p>{religion[1].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${religion[2].slug}`}>
                          <a>
                            <p>{religion[2].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${religion[3].slug}`}>
                          <a>
                            <p>{religion[3].title}</p>
                          </a>
                        </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>

              {/* ********************************************************** */}

              <div className='col-md-3 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>ভ্রমণ</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                    <Link href={`/blogs/${travel[0].slug}`}>
                      <a>
                        <p className='fw-bold mt-3 p-2'>{travel[0].title}</p>
                      </a>
                    </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${travel[1].slug}`}>
                            <a>
                              <p>{travel[1].title}</p>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${travel[2].slug}`}>
                            <a>
                              <p>{travel[2].title}</p>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                          <Link href={`/blogs/${travel[3].slug}`}>
                            <a>
                              <p>{travel[3].title}</p>
                            </a>
                          </Link>
                          
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>

              
              
              {/* ****************************reciepe section start******************************** */}


              <div className='col-md-3 row'>
                
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america2}>রেসিপি</p>
                    <div className={styles.hr2}></div>
                  </div>
                </div>
                
                
                <div className={styles.rajnitisec}>
                  <div className='col-md-12 mt-2 border'>
                    <img src='img1.jpg' className='w-100'/>
                    <div>
                      <Link href={`/blogs/${reciepe[0].slug}`}>
                        <a>
                          <p className='fw-bold mt-3 p-2'>{reciepe[0].title}</p>
                        </a>
                      </Link>
                    </div>



                    <div className={styles.rajnitisecimg}>
                    <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${reciepe[1].slug}`}>
                        <a>
                          <p>{reciepe[1].title}</p>
                          </a>
                      </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${reciepe[2].slug}`}>
                        <a>
                          <p>{reciepe[2].title}</p>
                          </a>
                      </Link>
                        </div>
                      </div>

                      <div className='col-md-12 row mt-3'>
                        <span className={styles.minithumb}></span>
                          <div className='col-2'>
                          <i class="fas fs-2 fa-share mt-2 text-muted p-2"></i>
                          </div>
                        <div className='col-10'>
                        <Link href={`/blogs/${reciepe[3].slug}`}>
                        <a>
                          <p>{reciepe[3].title}</p>
                          </a>
                      </Link>
                        </div>
                      </div>
                    
                    </div>               
                  </div>
                </div>
              </div>
            </div>


            {/********************** sports section start here **********************/}

                

            <div className='row d-flex justify-content-evenly'>
            
              <div className='col-md-8 row'>
                <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america}>খেলাধুলা </p>
                    <div className={styles.hr}></div>
                  </div>
                </div>


                <div className='col-lg-7 mt-2 border'>
                  <img src='img3.jpg' className='w-100'/>
                  <Link href={`/blogs/${sports[0].slug}`}>
                    <a>
                      <h3 className='p-2'>{sports[0].title}</h3>
                    </a>
                  </Link>
                  <p className='p-2'>{renderHTML(sports[0].excerpt)}</p>
                </div>
                <div className='col-md-5 row'>
                  <div className={styles.kheladula}>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg' /></div>
                      <div className='col-8'><Link href={`/blogs/${sports[1].slug}`}><a>{sports[1].title}</a></Link></div>
                  </div>
                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg' /></div>
                      <div className='col-8'><Link href={`/blogs/${sports[2].slug}`}><a>{sports[2].title}</a></Link></div>
                  </div>
                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg'/></div>
                      <div className='col-8'><Link href={`/blogs/${sports[3].slug}`}><a>{sports[3].title}</a></Link></div>
                  </div>
                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg' /></div>
                      <div className='col-8'><Link href={`/blogs/${sports[4].slug}`}><a>{sports[4].title}</a></Link></div>
                  </div>

                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg' /></div>
                      <div className='col-8'><Link href={`/blogs/${sports[5].slug}`}><a>{sports[5].title}</a></Link></div>
                  </div>
                    
                </div>
                </div>
              </div>
              
              
              
              <div className='col-md-4'>
              <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america}>অনলাইন ভোট </p>
                    <div className={styles.hr}></div>
                  </div>
                </div>


                
                  <div className='row mt-2'>
                  <div className='col-6 row border-start'>
                      <div className='col-12'>
                      <img 
                        src='../ads3.gif' 
                        className='w-100'
                        style={{
                          height: '100px',
                          weight: '100px'
                        }} 
                      />
                      <p>
                        Advantage of using an entity name: An entity name is easy to remember.
                        Disadvantage of using an entity name: Browsers may not support all entity names, but the support for entity numbers is good.
                      </p>
                      <form>
                      
                        <div className='border rounded-3 px-2'>
                            <input type="radio" id="yes" name="vote" value="yes"/>
                            <label for="yes">&nbsp;  হ্যাঁ</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3  mt-2 px-2'>
                          <input type="radio" id="no" name="vote" value="no"/>
                          <label for="no">&nbsp;  না</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3 mt-2 px-2'>
                          <input type="radio" id="nocomments" name="vote" value="nocomments"/>
                          <label for="nocomments"> &nbsp; মন্তব্য নাই</label><span className='float-end'>29%</span>
                        </div>

                        <div className='col-lg-12 '>
                          <button className='btn rounded-pill btn-primary float-end px-4 mt-2' type="submit">Vote</button>  
                        </div>  
                      
                      </form> 
                      </div>
                      <div className='col-12 row bg-light mt-4'>
                        <div className='col-6'>
                          <button className='btn rounded-pill'>Share</button>
                        </div>  
                        <div className='col-6'>
                          <button className='btn rounded-pill'>Embed</button>  
                        </div>
                        </div>
                    </div>  




                    <div className='col-6 row'>
                      <div className='col-12'>
                      <img 
                        src='../ads3.gif' 
                        className='w-100'
                        style={{
                          height: '100px',
                          weight: '100px'
                        }} 
                      />
                      <p>
                        Advantage of using an entity name: An entity name is easy to remember.
                        Disadvantage of using an entity name: Browsers may not support all entity names, but the support for entity numbers is good.
                      </p>
                      <form>
                      
                        <div className='border rounded-3 px-2'>
                            <input type="radio" id="yes" name="vote" value="yes"/>
                            <label for="yes">&nbsp;  হ্যাঁ</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3  mt-2 px-2'>
                          <input type="radio" id="no" name="vote" value="no"/>
                          <label for="no">&nbsp;  না</label><span className='float-end'>29%</span><br/>
                        </div>
                        <div className='border rounded-3 mt-2 px-2'>
                          <input type="radio" id="nocomments" name="vote" value="nocomments"/>
                          <label for="nocomments"> &nbsp; মন্তব্য নাই</label><span className='float-end'>29%</span>
                        </div>

                        <div className='col-lg-12 '>
                          <button className='btn rounded-pill btn-primary float-end px-4 mt-2' type="submit">Vote</button>  
                        </div>  
                      
                      </form> 
                      </div>
                      <div className='col-12 row bg-light mt-4'>
                        <div className='col-6'>
                          <button className='btn rounded-pill'>Share</button>
                        </div>  
                        <div className='col-6'>
                          <button className='btn rounded-pill'>Embed</button>  
                        </div>
                        </div>
                    </div>  
                     
                  </div>
                
              </div>
            </div>
          </div>



          {/* photo gallery section start here */}

          
          <div className='row'>

              <div className='col-lg-8 row'>
                <div className='col-12'>
                <div className='row mt-4'>
                    <div className='col-md-12'>
                      <p className={styles.america}>ছবিঘর </p>
                      <div className={styles.hr}></div>
                    </div>
                  </div>
                <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="false">
                <img 
                    src="../carousal-2.jpg" 
                    className="d-block w-100 p-2" 
                    alt="..."
                    style={{
                      height: '100%',
                    }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <Link href={`/blogs/${gallery[0].slug}`}><a><h5>{gallery[0].title}</h5></a></Link>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="false">
                  <img 
                    src="../carousal-2.jpg" 
                    className="d-block w-100 p-2" 
                    alt="..."
                    style={{
                      height: '100%',
                    }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                  <Link href={`/blogs/${gallery[0].slug}`}><a><h5>{gallery[0].title}</h5></a></Link>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="false">
                <img 
                    src="../carousal-2.jpg" 
                    className="d-block w-100 p-2" 
                    alt="..."
                    style={{
                      height: '100%',
                    }}
                  />
                  
                  <div className="carousel-caption d-none d-md-block">
                  <Link href={`/blogs/${gallery[0].slug}`}><a><h5>{gallery[0].title}</h5></a></Link>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            </div>
            <div className='col-12' style={{marginLeft: '3px'}}>
                    <img 
                      src='../carousal-1.jpeg'
                      className='p-1'
                      style={{
                        height: '80%',
                        width: '14%'
                      }}
                    />

                    <img 
                      src='../carousal-1.jpeg'
                      className='p-1'
                      style={{
                        height: '80%',
                        width: '14%'
                      }}
                    />

                    <img 
                      src='../carousal-1.jpeg'
                      className='p-1'
                      style={{
                        height: '80%',
                        width: '14%'
                      }}
                    />

                    <img 
                      src='../carousal-1.jpeg'
                      className='p-1'
                      style={{
                        height: '80%',
                        width: '14%'
                      }}
                    />

                    <img 
                      src='../carousal-1.jpeg'
                      className='p-1'
                      style={{
                        height: '80%',
                        width: '14%'
                      }}
                    />

                    <img 
                      src='../carousal-1.jpeg'
                      className='p-1'
                      style={{
                        height: '80%',
                        width: '14%'
                      }}
                    />

                    <img 
                      src='../carousal-1.jpeg'
                      className='p-1'
                      style={{
                        height: '80%',
                        width: '15%'
                      }}
                    />
            </div>
              </div>

              <div className='col-lg-4'>
              <div className='row mt-4'>
                  <div className='col-md-12'>
                    <p className={styles.america}>ভিডিও নিউজ </p>
                    <div className={styles.hr}></div>
                  </div>
                </div>
              <div className={styles.kheladula}>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg' /></div>
                      <div className='col-8'><Link href={`/blogs/${video[0].slug}`}><h5>{video[0].title}</h5></Link></div>
                  </div>
                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg' /></div>
                      <div className='col-8'><Link href={`/blogs/${video[1].slug}`}><h5>{video[1].title}</h5></Link></div>
                  </div>
                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg'/></div>
                      <div className='col-8'><Link href={`/blogs/${video[2].slug}`}><h5 className='ml-2'>{video[2].title}</h5></Link></div>
                  </div>
                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg' /></div>
                      <div className='col-8'><Link href={`/blogs/${video[3].slug}`}><h5 className='ml-2'>{video[3].title}</h5></Link></div>
                  </div>

                  <hr/>
                  <div className='col-12 row'>
                      <div className='col-4'><img src='img3.jpg' /></div>
                      <div className='col-8'><Link href={`/blogs/${video[4].slug}`}><h5 className='ml-2'>{video[4].title}</h5></Link></div>
                  </div>
                    
                </div>
              </div>
          </div>
          
          
        
      
    </>
  )

};



// Blogs.getInitialProps = () => {
//   let skip = 0;
//   let limit = 3;
//   return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
//       if (data?.error) {
//           console.log(data.error);
//       } else {
//           return {
//               blogs: data?.blogs,
//               categories: data?.categories,
//               tags: data?.tags,
//               totalBlogs: data?.size,
//               blogsLimit: limit,
//               blogSkip: skip
//           };
//       }
//   });
// };

Blogs.getInitialProps = async () =>{
  
  // api for latest news
  const letestnews = await fetch(`${API}/posts`);
  const latestjson = await letestnews.json();
  const last = latestjson;
  
  // api for america caterories
  const amr = await fetch(`${API}/test?cat=6220fc0a36c00b3d8bf08af5&name=createdAt&sort=-1&limit=8&skip=0`);
  const amrjson = await amr.json();
  const america = amrjson;
  
  // api for politics cateries
  const sec = await fetch(`${API}/test?cat=6220fbda36c00b3d8bf08ae9&name=createdAt&sort=-1&limit=8&skip=0`);
  const json2 = await sec.json();
  const politics = json2;

  // api for sports categories
  const sp = await fetch(`${API}/test?cat=6220fc3f36c00b3d8bf08b11&name=createdAt&sort=-1&limit=8&skip=0`);
  const json3 = await sp.json();
  const sports = json3;
  

  // api for bangladesh categories
  const bd = await fetch(`${API}/test?cat=6220fc2036c00b3d8bf08b05&name=createdAt&sort=-1&limit=8&skip=0`);
  const json4 = await bd.json();
  const bangladesh = json4;

  // api for economy categories
  const ec = await fetch(`${API}/test?cat=6220fc3936c00b3d8bf08b0d&name=createdAt&sort=-1&limit=8&skip=0`);
  const json5 = await ec.json();
  const economy = json5;


  // api for worldnews categories
  const wn = await fetch(`${API}/test?cat=6220fc2836c00b3d8bf08b09&name=createdAt&sort=-1&limit=8&skip=0`);
  const json6 = await wn.json();
  const worldnews = json6;

  // api for Muktomot categories
  const mm = await fetch(`${API}/test?cat=6232b65a66acd2c41a454ae0&name=createdAt&sort=-1&limit=8&skip=0`);
  const json7 = await mm.json();
  const muktomot = json7;


  // api for SpecialNews categories
  const spn = await fetch(`${API}/test?cat=6232c15e66acd2c41a454beb&name=createdAt&sort=-1&limit=8&skip=0`);
  const json8 = await spn.json();
  const specialnews = json8;

  // api for Technology categories
  const tec = await fetch(`${API}/test?cat=6232f00466acd2c41a455087&name=createdAt&sort=-1&limit=8&skip=0`);
  const json9 = await tec.json();
  const technology = json9;

  // api for Education categories
  const edu = await fetch(`${API}/test?cat=6232efc666acd2c41a455077&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsone = await edu.json();
  const education = jsone;

  // api for Health categories
  const hel = await fetch(`${API}/test?cat=6232efd066acd2c41a45507b&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsonh = await hel.json();
  const health = jsonh;

  // api for Lifestyle categories
  const lif = await fetch(`${API}/test?cat=6232efd866acd2c41a45507f&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsonl = await lif.json();
  const lifestyle = jsonl;

  // api for Art & Literature categories
  const art = await fetch(`${API}/test?cat=6232eff766acd2c41a455083&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsona = await art.json();
  const artlit = jsona;

  // api for religion categories
  const rel = await fetch(`${API}/test?cat=6232f01266acd2c41a45508b&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsonre = await rel.json();
  const religion = jsonre;

  // api for travel categories
  const trv = await fetch(`${API}/test?cat=6232f01c66acd2c41a45508f&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsontr = await trv.json();
  const travel = jsontr;

  // api for reciepe categories
  const recp = await fetch(`${API}/test?cat=6232f01266acd2c41a45508b&name=createdAt&sort=-1&limit=8&skip=0`);
  const jsonrec = await recp.json();
  const reciepe = jsonrec;

  // api for entertainment categories
  const entr = await fetch(`${API}/test?cat=6232f05866acd2c41a45509f&name=createdAt&sort=-1&limit=8&skip=0`);
  const json_entr = await entr.json();
  const entertainment = json_entr;

  // api for gallery categories
  const glr = await fetch(`${API}/test?cat=6232f04b66acd2c41a45509b&name=createdAt&sort=-1&limit=8&skip=0`);
  const json_glr = await glr.json();
  const gallery = json_glr;

  // api for videos categories
  const vdo = await fetch(`${API}/test?cat=6232f03e66acd2c41a455097&name=createdAt&sort=-1&limit=8&skip=0`);
  const json_vdo = await vdo.json();
  const video = json_vdo;
  
  return {
    america: america,
    politics: politics,
    last:last,
    sports: sports,
    bangladesh: bangladesh,
    economy: economy,
    worldnews: worldnews,
    muktomot: muktomot,
    specialnews: specialnews,
    technology: technology,
    education: education,
    health: health,
    lifestyle: lifestyle,
    artlit: artlit,
    religion: religion,
    travel: travel,
    reciepe: reciepe,
    entertainment: entertainment,
    gallery: gallery,
    video: video
    

  }
}



  
  export default withRouter(Blogs);
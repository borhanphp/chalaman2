import React from 'react'
import Link from 'next/link';

const Sidebar = () => {
  return (
    <>
      
                        <div className="bg-dark" style={{height:"600px"}}>


                        <h4 className='text-white text-center'>Dashboard</h4>
                        <nav class="nav flex-column text-white h-100">
                            <Link href="/admin/crud/category-tag"><a className="nav-link active text-white">Category</a></Link>
                            <Link href="/admin/crud/category-tag"><a className="nav-link text-white">Tag</a></Link>
                            <Link href="/admin/crud/blogs"><a className="nav-link text-white">Blog</a></Link>
                            <Link href="/user/update"><a className="nav-link text-white">Profile</a></Link>
                            <Link href="#"><a className="nav-link text-white">Setting</a></Link>
                            
                                   
                        </nav>



                            {/* <ul className="list-group bg-dark">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blog">Blog</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Profile</a>
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                    
      </>
    
  );
}

export default Sidebar;

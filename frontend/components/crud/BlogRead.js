import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';
import Sidebar from '../Sidebar';
import moment from 'moment';

const BlogRead = ({ username }) => {
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list(username).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };

    const deleteBlog = slug => {
        removeBlog(slug, token).then(data => {
            if (data) {
                console.log(data.error);
            } else {
                setMessage(message);
                loadBlogs();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your blog?');
        if (answer) {
            deleteBlog(slug);
        }
    };

    const showUpdateButton = blog => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/crud/${blog.slug}`}>
                    <a className="ml-2 btn btn-sm btn-warning">Update</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/${blog.slug}`}>
                    <a className="ml-2 btn btn-sm btn-warning">Update</a>
                </Link>
            );
        }
    };

    const showAllBlogs = () => {
        return blogs?.map((blog, i) => {
            return (
                <div key={i} className="pb-5">
                    <h3>{blog.title}</h3>
                    <p className="mark">
                        Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}
                    </p>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(blog)}
                </div>
            );
        });
    };

    return (
        <>
        <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'>
                        <Sidebar/>
                    </div>
                    <div className='col-10'>
                    <h3 className='text-center'>Manage Your News Here</h3>
                        <hr/>
                        <div className='row'>
                            <div className='col-2'><Link href="/admin/crud/blog"><a className='btn btn-sm btn-primary'>Add New</a></Link></div>
                        </div>
                        <div className="col-md-12">
                            {message && <div className="alert alert-warning">{message}</div>}
                            {showAllBlogs()}
                        </div>
                    </div>
                 
                </div>
                </div>
            
        </>
    );
};

export default BlogRead;

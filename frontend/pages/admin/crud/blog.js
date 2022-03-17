import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <BlogCreate />
            </Admin>
        </Layout>
    );
};

export default Blog;

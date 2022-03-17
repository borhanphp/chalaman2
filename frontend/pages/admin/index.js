import React from 'react'
import Link from 'next/link';
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Sidebar from '../../components/Sidebar';


const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar/>
                </div>

                <div className='col-md-10'>
                    <h1 className='text-center'>Welcome to NewYork news.</h1>
                </div>
            </div>
        </div>
      </Admin>
    </Layout>
    
  )
}
AdminIndex.displayName = 'AdminIndex'
export default AdminIndex;

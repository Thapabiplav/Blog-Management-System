import React from 'react'
import Layout from '../../components/Layout/Layout'
import Form from './components/form/Form'
import axios from 'axios'
import { baseUrl } from '../../../config'

const AddBlog = () => {
  const handleCreateBlog =async (data)=>{
   
      const respone= await axios.post(`${baseUrl}/blog`,data,{
        headers:{
          "Content-Type" : "multipart/form-data",
          "Authorization": localStorage.getItem('token')
        }
      })
     

  }
  return (
    <Layout>
      
		<Form  type='Create' onSubmit={handleCreateBlog}/>

    </Layout>
  )
}

export default AddBlog
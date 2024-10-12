import React from 'react'
import Layout from '../../components/Layout/Layout'
import Card from './components/card/Card'

const Home = () => {
  return (
    <Layout>
      <div className='flex flex-wrap justify-center space-x-4 mt-6'>
      <Card />  
      <Card />  
      <Card />  
      <Card />  
      <Card />  
      <Card />  
      </div>
    </Layout>
  )
}

export default Home
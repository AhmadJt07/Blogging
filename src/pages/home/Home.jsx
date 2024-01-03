import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
// import Louder from '../../components/louder/Louder'

const home = () => {
  return (
    <Layout>
      <HeroSection/>
      <BlogPostCard/>
      {/* <Louder/> */}
    </Layout> 
  )
}

export default home
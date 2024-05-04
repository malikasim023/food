import React from 'react'
import Blog from "./Blog"

const BlogItems = () => {
    const blog = [
        {
          image: "/images/img1.jpg",
          title: "What Is Bombay And Hyderabadi Biryani?",
          year: "2021"
        },
       {
        image:"/images/img2.jpg",
        title:"How Many Types Of Burger Are There?",
        year:"2021"
       },
       {
        image:"/images/img3.jpg",
        title:"Did You Know Some Facts About Pizza?",
        year:"2024"
       }
      ];
  return (
    <>
      <div className='px-10'>
        <h1 className='text-center font-extrabold text-5xl my-5'>Our Blogs</h1>
        <div className='grid grid-cols-12 gap-4'>
          {blog.map((item, index) => (
            <div key={index} className='col-span-12 sm:col-span-6 lg:col-span-4'>
              <Blog image={item.image} title={item.title} year={item.year} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogItems

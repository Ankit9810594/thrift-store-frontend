import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Women",

    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Men",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Brands",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Thrift Bountique",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Re-Sell",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Log In",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Wishlist",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "About",
    },
    
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories

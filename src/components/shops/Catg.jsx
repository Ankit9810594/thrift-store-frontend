import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
    },
    {
      cateImg: "./images/category/cat-2.png",
    },
    {
      cateImg: "./images/category/cat-3.png",
    },
    {
      cateImg: "./images/category/cat-4.png",
    },
    {
      cateImg: "./images/category/cat-5.png",
    },
    {
      cateImg: "./images/category/cat-6.png",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
               
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg

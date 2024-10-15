import React from 'react'
import list from '../list.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from '../components/Cards';

function Freebook() {
    const filterData=list.filter((data)=>data.category==='Free')
    //console.log(filterData)

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='m-[30px] py-3' >
          <h1 className='font-bold text-xl pb-2 text-pink-600'>Free Books</h1>
          <p>fsdgf gfisdgfisgtfs iuysdgfgsdiyfgew vfbidgf sf fgisdgf isdgfiudg </p>
        </div>

        <div>
            <Slider {...settings}>
              {filterData.map((item)=>{
                return <Cards item={item} key={item.id}/>
              })}
            </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook

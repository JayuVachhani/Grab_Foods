import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import avatar01 from '../../assets/images/ava-1.jpg'
import avatar02 from '../../assets/images/ava-2.jpg'
import avatar03 from '../../assets/images/ava-3.jpg'
import avatar04 from '../../assets/images/ava-4.jpg'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showArrows={false}
      swipeable
      width={400}
    >
      <div className="feedback">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget.
        </p>
        <img className="slider_image" src={avatar01} alt="avatar 1" />
        <h6 className="name">John Doe</h6>
      </div>
      <div className="feedback">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </p>

        <img className="slider_image" src={avatar02} alt="avatar 2" />
        <h6 className="name">Carrie Mathison</h6>
      </div>
      <div className="feedback">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget.
        </p>

        <img className="slider_image" src={avatar03} alt="avatar 3" />
        <h6 className="name">Saul Berenson</h6>
      </div>
      <div className="feedback">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
        </p>

        <img className="slider_image" src={avatar04} alt="avatar 4" />
        <h6 className="name">Jessica Brody</h6>
      </div>
    </Carousel>
  )
}

export default Testimonial

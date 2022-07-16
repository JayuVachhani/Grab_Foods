import React from 'react'
import featureImage1 from '../../assets/images/featureImage1.jpg'
import featureImage2 from '../../assets/images/featureImage2.jpg'
import featureImage3 from '../../assets/images/featureImage3.webp'
import './Feature.css'
const Feature = () => {
  const features = [
    {
      title: 'Quick Delivery',
      image: featureImage1,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.`,
    },
    {
      title: 'Super Dine in',
      image: featureImage2,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.`,
    },
    {
      title: 'Easy Pick up',
      image: featureImage3,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna.`,
    },
  ]
  return (
    <div className="features">
      {features.map((feature, index) => {
        return (
          <div key={index} className="feature col-md-4">
            <img src={feature.image} className="feature_image" alt="feature" />
            <h3 className="feature_title">{feature.title}</h3>
            <div className="feature_description">{feature.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Feature

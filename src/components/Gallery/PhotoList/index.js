import React, { useState } from 'react'
import {photoList} from './photo-list'


function PhotoList({category}) {
  const [photos] = useState(photoList)
  return (
    <div>
      <div className="flex-row">
        {photos.filter(p => p.category === category).map((image, i) => (
          <img
            src={require(`../../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  )
}
  

export default PhotoList;
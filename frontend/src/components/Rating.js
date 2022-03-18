import React from 'react'

function Rating({ value, text, color }) {
  const numStars = [1, 2, 3, 4, 5]

  return (
    <div className='rating'>
      {
        numStars.map(rate => (
          <span>
            <i
              style={{ color }}
              className={
                (value >= rate) ?
                  'fas fa-star':
                  (value >= rate - 0.5) ?
                    'fas fa-star-half-alt':
                    'far fa-star'
            }>
            </i>
          </span>
        ))
      }

      <span>{ text && text }</span>
    </div>
  )
}

export default Rating

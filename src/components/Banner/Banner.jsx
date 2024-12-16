import React from 'react'

const Banner = ({
    title,
    subtitle,
    Image,
    btn
    
}) => {

    console.log(subtitle);
    
  return (
  <>
   <div className="powerful" >
        <div   className="powerful-content"  >
          <img src={Image} alt="People Illustration" />
        </div>
        <div className="powerful-content">
          <div className="powerful-heading">
            <h1>{title}</h1>
          </div>
          <div className="powerful-par">
          {subtitle?.map((item) => (
              <p key={item.id}>{item.par}</p>
            ))}
          </div>

          {
           btn ? <>
            <button className='powerful-btn'>{btn}</button></>
            :
            ""
          }
        </div>
      </div> 
  </>
  )
}

export default Banner
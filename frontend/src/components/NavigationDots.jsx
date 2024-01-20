import React from 'react'


const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills','testimonials', 'contact',].map((item, index)=> ( //khi click vao tag, se dc ref toi item can tim
            <a
            href={`#${item}`}
            key={item+index}
            className="app__navigation-dot"
            style={active=== item? {background: '#0E79B2'}: {}}
            />
        ))}
    </div>
  )
}

export default NavigationDots;
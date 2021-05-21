import React, { useRef, useEffect, useState } from 'react'

export const Image = React.forwardRef((props, ref) => {
  const imageRef = ref || useRef(ref)
  const [error, setError] = useState(false)
  const [remove, setRemove] = useState(false)

  const onError = (e) => {
    if (!error) {
      setError(true)
    } else {
      setRemove(true)
    }
  }

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onerror = onError
    }
  }, [imageRef, error])

  return (
    <>
      {
        !error && props.src && <img className={props.className} style={props.style} src={props.src} ref={imageRef} alt='profile-image' width='28px' height='28px' loading='lazy' />
      }
      {
        !error && !props.src && props.fallback && props.fallback
      }
      {
        error && !remove && typeof props.fallback === 'string' && <img className={props.className} style={props.style} src={props.fallback} ref={imageRef} alt='profile-image' loading='lazy' />
      }
      {
        error && remove && typeof props.fallback === 'string' && <div className={props.className} style={props.style} ref={imageRef} />
      }
      {
        error && typeof props.fallback !== 'string' && <div className={props.className} style={props.style} ref={imageRef}>{props.fallback}</div>
      }
    </>
  )
})

export default Image

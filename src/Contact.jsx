import React from 'react'

const Contact = () => {
  return (
    <>

    <div className='contact'>
      <h2 className='contact-head'>contact page</h2>
    <div className='contact-div'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.20206371322!2d78.47495931418709!3d17.354007258336367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb981e4f77ffff%3A0x22739ecd400660e7!2sCharminar%20(Old%20City)%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1678524862925!5m2!1sen!2sin" width="100%" height="450" style={{border:0,paddingTop:'4em'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='form-div'>
     <form method='POST' className='inputs' action='https://formspree.io/f/meqwzabp'>
      <input type='text'placeholder='UserName' name='userName' required autoComplete='off'/>
      <input type='email' placeholder='email' name='email' required autoComplete='off'/>
      <textarea name="Message"  cols="30" rows="7" placeholder='enter data here...' required autoComplete='off'>

      </textarea>
      <input type='submit' value='send'/>
     </form>
    </div>
    </div>
    </>
  )
}

export default Contact
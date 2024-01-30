import './Contact.css'

export default function Contact(){
    return(
        <section id='contact'>
           
            <div className='contact'>
                <form action='https://formspree.io/f/mvojpvpr' method='POST'>
                    <label>Your Name</label>
                    <input type='text'name='username' placeholder='Enter your name....'required/>
                    <br/>
                    <label>Your email</label>
                    <input type='email' name='email' placeholder='Enter your email...' required/><br/>
                    <label>Your message</label>
                    <textarea rows="6" name='mesaage' placeholder='Enter your message.....' required/>
                    <button className='btn btn1'>Send</button>
                </form>
            </div>
        </section>
    )
}
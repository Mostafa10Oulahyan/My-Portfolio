import { memo } from 'react';

const ContactMe = memo(function ContactMe() {
    return (
        <>
            <h1 className="title">Contact Me!</h1>

            <div className="contact-box">
                <form
                    action="https://formsubmit.co/mostaphaoulahyan@gmail.com"
                    method="POST"
                >
                    <input
                        type="hidden"
                        name="_next"
                        value="https://moulahyan.tech"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                        type="text"
                        name="name"
                        className="field"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        className="field"
                        placeholder="Email Address"
                        required
                    />
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        className="field"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <input type="submit" value="Send Message" className="btn" />
                </form>
            </div>
        </>
    );
});

export default ContactMe;


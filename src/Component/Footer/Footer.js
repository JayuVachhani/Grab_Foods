import React from 'react'
import './Footer.css'
import companyLogo from '../../assets/images/company_logo.png'
import SendIcon from '@mui/icons-material/Send'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <div className="col-md-3">
            <div className="companyLogo">
              <img src={companyLogo} alt="Company Logo" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros.
            </p>
          </div>
          <div className="col-md-3">
            <div className="deliverytime">
              <h5>Delivery Time</h5>
            </div>
            <h6>Sunday - Thursday</h6>
            <p>10:30 A.M - 11:30 P.M</p>

            <h6>Friday - Saturday</h6>
            <p>Off Day</p>
          </div>
          <div className="col-md-3">
            <div className="contact_footer">
              <h5>Contact</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros.
              </p>
              <h6>Phone : +91987654321</h6>
              <h6>Email : grabfoodservice@mail.com</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="newsletter">
              <h5>Newsletter</h5>
              <p>
                Subscribe to our newsletter to receive latest update on our
                services
              </p>
              <input
                type={'email'}
                placeholder="Your Email"
                className="newsletter_field"
              />
              <button className="newsletter_btn">
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="socialandterms">
          <div className="terms mt-5">
            <b>&copy;Copyright - 2022</b> made by{' '}
            <span className="author">Jay Vachhani</span>. All Rights Reserved.
          </div>
          <div className="socialmedia">
            <p>Follow us on:</p>
            <span className="instagram">
              <InstagramIcon />
            </span>
            <span className="whatsapp">
              <WhatsAppIcon />
            </span>
            <span className="facebook">
              <FacebookIcon />
            </span>
            <span className="linkedin">
              <LinkedInIcon />
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

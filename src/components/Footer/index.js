import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Button } from '../../globalStyle'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksContainer, FooterLinksWrapper, SocialMedia, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink, SocialMediaWrap } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>Join our exclusive membership to receive the latest news and trends</FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>

        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Aboout Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How itworks</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How itworks</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/sign-up">How itworks</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/sign-up">How itworks</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>

      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon/>
            ULTRA
          </SocialLogo>          
          <WebsiteRights>ULTRA © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" targer="_blank" arial-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" targer="_blank" arial-label="Instagran">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" targer="_blank" arial-label="Youtube" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" targer="_blank" arial-label="twitter">
              <FaTwitter/>
            </SocialIconLink>
            <SocialIconLink href="/" targer="_blank" arial-label="LinkedIn">
              <FaLinkedin/>
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer

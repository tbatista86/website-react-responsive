import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyle'
import { Heading, InfoColumn, InfoRow, InfoSec, TextWrapper, TopLine, SubTitle, ImgWrapper, Img } from './InfoSectionElements'

const InfoSection = ({ ligthBg, imgStart, ligthTopLine, topLine, ligthText, ligthTextDesc, headLine, description, primary, buttonLabel, start, img, alt }) => {
  return (
    <>
      <InfoSec ligthBg={ligthBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine ligthTopLine={ligthTopLine}>{topLine}</TopLine>
                <Heading ligthText={ligthText}>{headLine}</Heading>
                <SubTitle ligthTextDesc={ligthTextDesc}>{description}</SubTitle>
                <Link to='sign-up'>
                  <Button big fontBig primary={primary}>{buttonLabel}</Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec> 
    </>
  )
}

export default InfoSection

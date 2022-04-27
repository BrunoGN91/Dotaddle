import React from 'react'
import styled from 'styled-components'


const Span = styled.span`
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 0 15px;
  perspective: 1000px;
`
const Button = styled.a`
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;
  
&:before,
&:after{
  position: absolute;
  content: "TODAY'S BUILD";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  box-sizing: border-box;
  border-radius: 5px;
}
&:before{
  color: #fff;
  background: #000;
  transform: rotateY(0deg) translateZ(25px);
}
&:after{
  color: #000;
  transform: rotateX(90deg) translateZ(25px);
  background-color: #fff
}
&:hover{
    cursor: pointer;
  transform: translateZ(-25px) rotateX(-90deg);
}
`

const ChallengeButton = ({handleFade, className}) => {
  return (
    <>
    <Span
    className={className}
    >
        <Button
        onClick={() => handleFade()}
        >
            </Button></Span>
    </>
  )
}

export default ChallengeButton
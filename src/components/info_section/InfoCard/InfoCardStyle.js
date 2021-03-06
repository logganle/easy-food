import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';

export const Card = styled.div`
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  background-color: #fff;
  max-height: 350px;
  max-width: 300px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export const CardLink = styled(LinkR)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  background: #c7ecee;
`

export const CardBody = styled.div`
  padding: 15px 20px;
`

export const CardSubtitle = styled.p`
  text-transform: uppercase;
  font-weight: 300;
  color: #f0932b;
  font-size: 10pt;
  letter-spacing: 0.5px;
`
export const CardTitle = styled.h3`
  font-size: 16pt;
  margin-bottom: 20px;
`
// export const CardDescriptionWrapper = styled.div`
//   overflow: scroll;
// `
export const CardDescription = styled.div`
  height: 100px;
  overflow: scroll;
`

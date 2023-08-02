import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture,  } from './styles'
 
const Card  = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://hermes.dio.me/articles/cover/ce3d16f6-d2e3-4bf8-a490-8dca9c0aa539.png'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/62370227?v=4'/>
                <div>
                    <h4>Gustavo Esteban</h4>
                    <p>Há 9 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 18
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }

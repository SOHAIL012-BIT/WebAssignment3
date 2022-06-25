import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import PrimaryButton from './PrimaryButton'
import logo from '../assets/img/logo.svg'

const Navigation = () => {



   return (
      <NavigationStyled>
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <ul>
            <li>
               <Link to="header" spy={true} smooth={true}>Home </Link>
            </li>
            <li>
               <Link to="feathures" spy={true} smooth={true}>About US </Link>
            </li>
            <li>
               <Link to="pricing" spy={true} smooth={true}>Pricing </Link>
            </li>

            <li>
               <Link to="faq" spy={true} smooth={true}>FAQ's </Link>
            </li>
            <li>
               <Link to="register" spy={true} smooth={true}>Register </Link>
            </li>
         </ul>
         {/* <PrimaryButton name='Register' /> */}
      </NavigationStyled>
   )
}

const NavigationStyled = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
   ul{
      display: flex;
      justify-content: space-between;
      width: 40%;
      li{
         cursor: pointer;
      }
   }
`

export default Navigation

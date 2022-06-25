import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { InnerLayout } from '../styles/Layout'
import card from '../assets/img/creditcard.svg';
import active from '../assets/img/active.svg';
import inactive from '../assets/img/inactive.svg';
import check from '../assets/img/check.svg';
import checkDisabled from '../assets/img/check-disabled.svg';



const PaymentSection = () => {
   return (
      <PaymentStyled id='pricing'>
         <InnerLayout>
            <div data-aos='fade-down-right'>
               <h3 className="small-heading">
                  An exectional service, <span>at  the right price</span>
               </h3>
               <p className="c-para">Choose Your Plan according to your demand </p>
            </div>
            <div className='card-con'>
               <Card
                  account={'Silver'}
                  amount={'Bill + Rs: 500'}
                  text={'Get Rid of hectic to Visit store for Medicines'}
                  button={'Get Started'}
                  active={active}
                  inactive={inactive}
                  check={check}
                  checkDis={checkDisabled}
                  text1={'Medicines Home Delivery'}
                  text2={'Unused Medicines Exchange'}
                  text3={'Free access to Medicos Awareness Seminar'}
                  text4={'5% discount on bill of 500+'}
                  text5={'Priority 24/7 support'}
                  text6={'Pay through online or Hand to Hand'}
               />

               <Card
                  account={'Gold'}
                  amount={'Bill + Rs: 800'}
                  text={'No more Store visits + Home Sample collection for Medical testing'}
                  button={'Get Started'}
                  active={active}
                  inactive={inactive}
                  check={check}
                  checkDis={checkDisabled}
                  text1={'Medicines Home Delivery'}
                  text2={'Sample Collection for Medical Testing'}
                  text3={'Unused Medicines Exchange'}
                  text4={'Free access to Medicos Awareness Seminar'}
                  text5={'10% discount on bill of 800+'}
                  text6={'Priority 24/7 support'}
                  text7={'Pay through online or Hand to Hand'}
               />
            </div>
         </InnerLayout>
      </PaymentStyled>
   )
}

const PaymentStyled = styled.section`
 .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 6.4rem;
        
        @media screen and (max-width: 689px){
          grid-template-columns: repeat(1, 1fr);
        }
    }
   p{
      text-align: center;
   }
`

export default PaymentSection

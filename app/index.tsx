import React from 'react';
import {  Container } from './style';
import { NavBarMobile, StylizedInput, StylizedButton } from '../src/components';

const App: React.FC = () => (
  <>
  <div style={{justifyContent: 'center', alignItems: 'center', padding: 50, display: 'flex', flexDirection: 'column', gap: 10}}>
    <StylizedInput
    label='Email'
    placeholder='Digite seu e-mail...'
    leftIcon='email'
    ></StylizedInput>

    <StylizedButton
      rightIcon='edit'
      size='long medium'
      width={312}
    >
    </StylizedButton>
  </div>
    
    <NavBarMobile></NavBarMobile> 
  </>
  
);

export default App;

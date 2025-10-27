import React from 'react';
import {  Container } from './style';
import { NavBarMobile } from '../src/components/NavBar';
import { StylizedInput } from '../src/components/Input/index';

const App: React.FC = () => (
  <>
  <div style={{justifyContent: 'center', alignItems: 'center', padding: 50, display: 'flex'}}>
    <StylizedInput
    label='Email'
    placeholder='Digite seu e-mail...'
    leftIcon='email'
    ></StylizedInput>
  </div>
    
    <NavBarMobile></NavBarMobile> 
  </>
  
);

export default App;

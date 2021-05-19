import React from 'react';

import Main from '../components/Main';

import profilePic from "../data/images/me.jpg";

const Index = () => (
  <Main>
    <p></p>
    <span className="image"><img src={profilePic} alt="" /></span>
  </Main>
);

export default Index;
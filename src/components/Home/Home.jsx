import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import Navbar from '../Navbar/Navbar';
import './home.scss';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import TestResponsive from './TestResponsive';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="px-0 mx-0 my-0">
      <ReactFullpage
        //fullpage options
        licenseKey={"gplv3-license"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section color-primary">
                <div className="h-full">
                  <Navbar />
                  <div>
                    <Section1 />
                  </div>
                </div>
              </div>
              <div className="section color-primary text-5xl">
              <Section2 />
              </div>
              <div className="section color-primary">
                <div className="h-full">
                  <TestResponsive />
                </div>
              </div>
              <div className="section color-primary text-5xl">
                <p>Feature 3</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import Navbar from '../Navbar/Navbar';
import './home.scss';
import Section1 from '../Sections/Section1';
import Section2 from '../Sections/Section2';
import Section3 from '../Sections/Section3';
import LoginModal from "../Navbar/LoginModal.jsx";
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
                <Navbar className="z-1" />
                <img
                  className="z-0"
                  src="https://yogalesson-createor-backend.herokuapp.com/images/hero.jpeg"
                />
              </div>
              <div className="top section color-primary h-full w-full">
                <div className="h-full">
                  <Navbar className="z-1"/>
                  <div className="hero">
                    <h2 className="color-beige-light font-moontime text-xl">yoga class planning</h2>
                    <h3>easy and quick</h3>
                    <p>create well structured yoga classes</p>
                  </div>
                  <LoginModal />
                  <button type="submit" className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-10">
                   try it now
                  </button>
              </div>
              </div>
                  <div className="section color-primary">
                    <Section1 />
                  </div>
                  <div className="section color-primary">
                    <Section2 />
                  </div>
                  <div className="section color-primary">
                    <Section3 />
                  </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

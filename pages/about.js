import React from "react";

import Layout from "./../components/layout/Layout";
import SkillsSlider from './../components/skills-slider/SkillsSlider';

import { connect } from 'react-redux';
import { selectMessages } from './../redux/translation/translation.selectors'

import './about.css';

function About({ messages }){
  return (
      <Layout title="Conóceme | Carlos Hernández">
        <h1 className="text-center mt-3"><b>{messages.MYSELF}</b></h1>
        <div className="row">
          <img src="../static/myself.jpg" alt="Carlos" className="d-block mx-auto my-4 personal-image"/>
       </div>
        <div className="row">
          <p className="px-5 text-center">
                {messages.INTRODUCTION}
          </p>
        </div>
        <h3 className="text-center"><b>{messages.SKILLS}</b></h3>
        <SkillsSlider/>
  </Layout>
  );
};

const mapStateToProps = (state) => ({
  messages: selectMessages('ABOUT')(state),
})

export default connect(mapStateToProps)(About);
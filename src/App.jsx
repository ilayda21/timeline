import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { TimelineFollowerPoint } from './TimelineFollowerPoint';
import ChartScene from './ChartScene';

const experiences = [
  { year: '2018', title: 'Frontend Intern' },
  { year: '2019', title: 'Junior Developer' },
  { year: '2020', title: 'Full Stack Developer' },
  { year: '2021', title: 'Senior Developer' },
];

function TimelineLine({children}) {
  return (
    <div
      style={{
        height: "200vh",
        width: "10px",
        backgroundColor: "#ADCBE3",
        position: "relative",
        margin: "0 auto",
        borderRadius: "100px",

        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
}

export default function Apps() {

  return (
    <div>
      <div style={{ width: "500px", height: "500px", marginTop: "100px" }}>
        <ChartScene />
      </div>
      <div
        style={{
          backgroundColor: "#F9FBFD",
          // paddingTop: "500px",
        }}
      >
        <TimelineLine>
          <TimelineFollowerPoint />
          <div
            style={{
              marginLeft: "100px",
              paddingTop: "50px",
            }}
          >
            Somelskjdg
          </div>
        </TimelineLine>
        {/* <div 
        style={{
          height: "100px"
        }}
      ></div> */}
        <TimelineLine>
          <TimelineFollowerPoint />
        </TimelineLine>
      </div>
    </div>
  );
}



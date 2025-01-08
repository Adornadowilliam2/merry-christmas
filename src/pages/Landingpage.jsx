import { Box, Container, ImageListItemBar, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react';
import mockup from "../assets/bg-mockup.jpg";

export default function Landingpage() {
  return (
    <section style={{ border: '1px solid black', width: '700px', display: 'block', margin: 'auto', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'start' }}>
        <img src="https://www.mfi.edu.ph/wp-content/uploads/2024/09/MFI-Logo_lr-1.png" alt="logo of mfi" style={{ width: '100px' }} />
      </div>
      <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif', marginBottom: '10px', fontSize: '14px' }}>
        ON JOB TRAINING
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div>
          <label htmlFor="name">Name: <input type="text" id="name" /></label>
        </div>
        <div>
          <label htmlFor="department">Department: <input type="text" id="department" /></label>
        </div>
        <div>
          <label htmlFor="course">Course/Section: <input type="text" id="course" /></label>
        </div>
        <div>
          <label htmlFor="reporting">Reporting: <input type="text" id="reporting" /></label>
        </div>
      </div>
      <h2 style={{ fontSize: '14px', marginTop: '12px', fontFamily: 'sans-serif' }}>
        I. Immersion Forecast/Target/Assignment
      </h2>
      <div>
        <textarea name="immersion" id="immersion" cols="30" rows="10" style={{ width: '100%' }}></textarea>
      </div>
      <h2 style={{ fontSize: '14px', marginTop: '12px', fontFamily: 'sans-serif' }}>
        II. Details Exposure
      </h2>
      <div>
        <div>
          {/* dropdown sample */}
        </div>
        <textarea name="detailsExposure" id="detailsExposure" cols="30" rows="10" style={{ width: '100%' }}></textarea>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <input type="text" style={{ display: 'block', width: '100%' }} id="signatureOjt" />
          <label htmlFor="signatureOjt">Signature over printed name (Ojt)</label>
        </div>
        <div>
          <input type="text" style={{ display: 'block', width: '100%' }} id="signatureInCharge" />
          <label htmlFor="signatureInCharge">Signature over printed name (In-charge)</label>
        </div>
      </div>
    </section>
  );
}

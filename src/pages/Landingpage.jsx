import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, Button } from '@mui/material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'; // Import html2canvas

export default function Landingpage() {
  const [files, setFiles] = useState([]);
  const [qrCode, setQrCode] = useState(null);
  const [logoLoaded, setLogoLoaded] = useState(false);

  // This callback is triggered when files are dropped for regular images
  const onDropImages = useCallback((acceptedFiles) => {
    if (files.length + acceptedFiles.length <= 4) {
      const previewFiles = acceptedFiles.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        });
      });
      setFiles(prevFiles => [...prevFiles, ...previewFiles]);
    }
  }, [files]);

  // This callback is triggered when a file is dropped for the QR code
  const onDropQrCode = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const previewQrCode = acceptedFiles[0]; // Only allow one QR code
      const previewFile = Object.assign(previewQrCode, {
        preview: URL.createObjectURL(previewQrCode)
      });
      setQrCode(previewFile); // Set the QR code file in state
    }
  }, []);

  const { getRootProps: getRootPropsImages, getInputProps: getInputPropsImages } = useDropzone({
    onDrop: onDropImages,
    accept: 'image/*',
    multiple: true,
    disabled: files.length >= 4, // Disable Dropzone after 4 files
  });

  const { getRootProps: getRootPropsQrCode, getInputProps: getInputPropsQrCode } = useDropzone({
    onDrop: onDropQrCode,
    accept: 'image/*',
    multiple: false, // Only one QR code allowed
    disabled: qrCode !== null, // Disable Dropzone after QR code is uploaded
  });

  // Load the logo and set the logoLoaded state to true when it's fully loaded
  const loadLogo = () => {
    const img = new Image();
    img.src = 'https://www.mfi.edu.ph/wp-content/uploads/2024/09/MFI-Logo_lr-1.png';
    img.onload = () => {
      setLogoLoaded(true); // Set logoLoaded to true once the image is loaded
    };
  };

  // Generate the PDF
  const generatePDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4'); // Ensure it's A4 size (210mm x 297mm)
    
    // Get the content of the section
    const content = document.getElementById('pdf-content'); 

    // Ensure the logo is loaded before generating PDF
    if (!logoLoaded) {
      alert("Please wait until the logo is loaded.");
      return;
    }

    // Use html2canvas to render HTML content as a canvas
    html2canvas(content, {
      useCORS: true, // Ensure cross-origin images are included
      scrollX: 0,
      scrollY: -window.scrollY, // Adjust for any window scrolling
      width: content.offsetWidth, // Set width to content's width
      height: content.offsetHeight, // Set height to content's height
      x: 0,
      y: 0,
    }).then((canvas) => {
      // Add the canvas image to the PDF
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 10, 10, 190, canvas.height * 190 / canvas.width); // Adjust the image to fit the page

      // Save the PDF
      doc.save('landingpage.pdf');
    });
  };

  // Load the logo when the component is mounted
  useEffect(() => {
    loadLogo();
  }, []);

  return (
    <>
      <section id="pdf-content" style={{ width: '700px', display: 'block', margin: 'auto', padding: '10px', marginTop: "10px" }}>
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
            {files.length < 4 && (
              <div {...getRootPropsImages()} style={{ border: '2px dashed #ccc', padding: '10px', textAlign: 'center', marginBottom: '10px' }}>
                <input {...getInputPropsImages()} />
                <Typography>Drag & drop images here, or click to select images (max 4 images)</Typography>
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {files.map((file, index) => (
                <Box key={index}>
                  <img
                    src={file.preview}
                    alt={`Uploaded image ${index}`}
                    style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                  />
                </Box>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <textarea name="detailsExposure" id="detailsExposure" cols="30" rows="10" style={{ width: '100%' }}></textarea>
            {/* QR Code Upload */}
            {qrCode ? (
              <img src={qrCode.preview} alt="QR code" width="200px" />
            ) : (
              <div {...getRootPropsQrCode()} style={{ border: '2px dashed #ccc', padding: '10px', textAlign: 'center', marginBottom: '10px', marginLeft: '20px' }}>
                <input {...getInputPropsQrCode()} />
                <Typography>Drag & drop QR code image here, or click to select one (max 1)</Typography>
              </div>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:"5vh" }}>
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
      <Button
        variant="contained"
        color="primary"
        onClick={generatePDF}
        style={{ display: "none", margin: "10px auto", }}
      >
        Generate PDF
      </Button>
    </>
  );
}

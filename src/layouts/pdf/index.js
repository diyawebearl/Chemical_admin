/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import titlePhoto from "../../assets/images/saptpdf.png"
import sidePhoto from "../../assets/images/saptaside.png"
import profilePhoto from "../../assets/images/profilePhoto.png"
import wave from "../../assets/images/wave.png"

import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Pdf() {
    const designRef1 = useRef(null); // Reference for the first card
    const designRef2 = useRef(null); // Reference for the second card

    const handleDownloadPDF = () => {
        const input1 = designRef1.current;
        const input2 = designRef2.current;

        html2canvas(input1, { scale: 2 }).then((canvas1) => {
            html2canvas(input2, { scale: 2 }).then((canvas2) => {
                const pdfWidth = canvas1.width * 0.25;
                const pdfHeight = canvas1.height * 0.25;
                const pdf = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
                const imgData1 = canvas1.toDataURL('image/png');
                const imgData2 = canvas2.toDataURL('image/png');

                // Adding first card
                pdf.addImage(imgData1, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.addPage(); // Add a new page for the second card
                // Adding second card
                pdf.addImage(imgData2, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('two_cards.pdf');
            });
        });
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mt={6} mb={3}>
                <button onClick={handleDownloadPDF}>download</button>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} lg={8}>
                        <Card className="pt-3" style={{ height: "1000px", width: "600px" }} ref={designRef1}>
                            <MDBox pl={5}>
                                <MDTypography variant="h5"><img src={titlePhoto} alt="" style={{ height: "50px" }} /></MDTypography>
                            </MDBox>
                            <MDBox pt={2} className="h-100" >
                                <div className="d-flex flex-column h-100">
                                    <div className="row ps-5">
                                        <div className="pt-4 col-9">
                                            <img src={profilePhoto} alt="" />
                                            <div className="mt-2">
                                                <h1 className="fw-1" style={{ color: "#F87690" }}>Alisha Rajvanshi</h1>
                                                <h5 className="mb-0 ">Hindu, Darji | Female | 19-12-2004</h5>
                                                <h5>Ahmedabad, Gujarat</h5>
                                            </div>
                                            <div className="row gy-3 mt-3">
                                                <div className="col-6">
                                                    <div className="px-3 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Age</span>
                                                        <h5 className="" style={{ fontWeight: "600" }}>30</h5>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-3 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Marital Status</span>
                                                        <h5 className="" style={{ fontWeight: "600" }}>Never Married</h5>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-3 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Height</span>
                                                        <h5 className="" style={{ fontWeight: "600" }}>5'10"</h5>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-3 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Weight</span>
                                                        <h5 className="" style={{ fontWeight: "600" }}>56</h5>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-3 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Settle-Down</span>
                                                        <h5 className="" style={{ fontWeight: "600" }}>1+ Years</h5>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-3 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Settling In Abroad</span>
                                                        <h5 className="" style={{ fontWeight: "600" }}>No</h5>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="px-3 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Current Location</span>
                                                        <h5 className="" style={{ fontWeight: "600" }}>Ahmedabad, Gujarat, India</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 d-flex justify-content-end">
                                            <img src={sidePhoto} alt="" className="" style={{ height: "400px" }} />
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <img src={wave} alt="" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </MDBox>
                        </Card>
                        <Card className="pt-3" style={{ height: "1000px", width: "600px" }} ref={designRef2}>
                            <MDBox pl={5}>
                                <MDTypography variant="h5"><img src={titlePhoto} alt="" style={{ height: "50px" }} /></MDTypography>
                            </MDBox>
                            <MDBox pt={2} className="h-100" >
                                <div className="d-flex flex-column h-100">
                                    <div className="row ps-5">
                                        <div className="pt-4 col-9">
                                            <img src={profilePhoto} alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <img src={wave} alt="" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Pdf;

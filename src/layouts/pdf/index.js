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
    const designRef3 = useRef(null); // Reference for the third card
    const designRef4 = useRef(null); // Reference for the fourth card
    const designRef5 = useRef(null); // Reference for the fifth card

    const handleDownloadPDF = () => {
        const input1 = designRef1.current;
        const input2 = designRef2.current;
        const input3 = designRef3.current;
        const input4 = designRef4.current;
        const input5 = designRef5.current;

        html2canvas(input1, { scale: 2 }).then((canvas1) => {
            html2canvas(input2, { scale: 2 }).then((canvas2) => {
                html2canvas(input3, { scale: 2 }).then((canvas3) => {
                    html2canvas(input4, { scale: 2 }).then((canvas4) => {
                        html2canvas(input5, { scale: 2 }).then((canvas5) => {
                            const pdfWidth = canvas1.width * 0.25;
                            const pdfHeight = canvas1.height * 0.25;
                            const pdf = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
                            const imgData1 = canvas1.toDataURL('image/png');
                            const imgData2 = canvas2.toDataURL('image/png');
                            const imgData3 = canvas3.toDataURL('image/png');
                            const imgData4 = canvas4.toDataURL('image/png');
                            const imgData5 = canvas5.toDataURL('image/png');

                            // Adding first card
                            pdf.addImage(imgData1, 'PNG', 0, 0, pdfWidth, pdfHeight);
                            pdf.addPage(); // Add a new page for the second card
                            // Adding second card
                            pdf.addImage(imgData2, 'PNG', 0, 0, pdfWidth, pdfHeight);
                            pdf.addPage(); // Add a new page for the third card
                            // Adding third card
                            pdf.addImage(imgData3, 'PNG', 0, 0, pdfWidth, pdfHeight);
                            pdf.addPage(); // Add a new page for the fourth card
                            // Adding fourth card
                            pdf.addImage(imgData4, 'PNG', 0, 0, pdfWidth, pdfHeight);
                            pdf.addPage(); // Add a new page for the fifth card
                            // Adding fifth card
                            pdf.addImage(imgData5, 'PNG', 0, 0, pdfWidth, pdfHeight);
                            pdf.save('five_cards.pdf');
                        });
                    });
                });
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
                                            <h1 className="fw-1" style={{ color: "#F87690" }}>Contact Details</h1>
                                            <div className="row gy-3 mt-3">
                                                <div className="col-6">
                                                    <div className="px-3 py-2" style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Phone</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>9904********</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Email</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>yuvraj****@gmail.com</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Community</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>scheduled caste</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gy-2 mt-3">
                                                <div className="col-12">
                                                    <h3 className="fw-1" style={{ color: "#874CCC" }}>Living In</h3>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Community</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>scheduled caste</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gy-2 mt-3">
                                                <div className="col-12">
                                                    <h3 className="fw-1" style={{ color: "#874CCC" }}>Life Style</h3>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Diet</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>vegiterian</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Smoke</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Never</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Drink</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Never</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gy-2 mt-3">
                                                <div className="col-12">
                                                    <h3 className="fw-1" style={{ color: "#874CCC" }}>Religious Background</h3>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Religion</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Hindu</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Mother Tongue</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Gujrati</span>
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
                        <Card className="pt-3" style={{ height: "1000px", width: "600px" }} ref={designRef3}>
                            <MDBox pl={5}>
                                <MDTypography variant="h5"><img src={titlePhoto} alt="" style={{ height: "50px" }} /></MDTypography>
                            </MDBox>
                            <MDBox pt={2} className="h-100" >
                                <div className="d-flex flex-column h-100">
                                    <div className="row ps-5">
                                        <div className="pt-4 col-9">
                                            <h1 className="fw-1" style={{ color: "#F87690" }}>Education & Career</h1>
                                            <div className="row gy-3 mt-3">
                                                <div className="col-6">
                                                    <div className="px-3 py-2" style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>School/Collage</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>primary school</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Highest Qualification</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>BE</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Company Name</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>WebEArl Technology</span>
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
                        <Card className="pt-3" style={{ height: "1000px", width: "600px" }} ref={designRef4}>
                            <MDBox pl={5}>
                                <MDTypography variant="h5"><img src={titlePhoto} alt="" style={{ height: "50px" }} /></MDTypography>
                            </MDBox>
                            <MDBox pt={2} className="h-100" >
                                <div className="d-flex flex-column h-100">
                                    <div className="row ps-5">
                                        <div className="pt-4 col-9">
                                            <h1 className="fw-1" style={{ color: "#F87690" }}>Family Details</h1>
                                            <div className="row gy-3 mt-3">
                                                <div className="col-6 h-100">
                                                    <div className="px-3 py-2 h-100" style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Father Occupation</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>retired</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Mother Occupation</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Homekeeper</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Number Of Brother's</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>1</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Number Of Sister's</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>1</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Number Of Married Brother's</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>1</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Number Of Married Sister's</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>1</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Family Status</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Upper Middle Class</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Family Type</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Joint Family</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Family Values</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Moderate</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Family Income</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>5-10 LPA</span>
                                                    </div>
                                                </div>
                                                <div className="col-6 h-100">
                                                    <div className="px-2 py-2 h-100 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Living With Parents</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Yes</span>
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
                        <Card className="pt-3" style={{ height: "1000px", width: "600px" }} ref={designRef5}>
                            <MDBox pl={5}>
                                <MDTypography variant="h5"><img src={titlePhoto} alt="" style={{ height: "50px" }} /></MDTypography>
                            </MDBox>
                            <MDBox pt={2} className="h-100" >
                                <div className="d-flex flex-column h-100">
                                    <div className="row ps-5">
                                        <div className="pt-4 col-9">
                                            <h1 className="fw-1" style={{ color: "#F87690" }}>Partner Preference</h1>
                                            <div className="row gy-3 mt-3">
                                                <div className="col-12">
                                                    <h3 className="fw-1" style={{ color: "#874CCC" }}>Basic Details</h3>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-3 py-2" style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Age</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>30 to 39</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Marital Status</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Never Married</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Height</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>5'1 to 5'6</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gy-2 mt-3">
                                                <div className="col-12">
                                                    <h3 className="fw-1" style={{ color: "#874CCC" }}>Religious Background</h3>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Religion</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Hindu</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Mother Tongue</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Gujrati</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gy-2 mt-3">
                                                <div className="col-12">
                                                    <h3 className="fw-1" style={{ color: "#874CCC" }}>Education & Career</h3>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Highest Qualification</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Doesen't Matter</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Annual Income</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Doesn't Matter</span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="px-2 py-2 " style={{ border: "2px solid #FF6B85", borderRadius: "10px" }}>
                                                        <h5 className="mb-0" style={{ fontWeight: "600" }}>Occupation</h5>
                                                        <span className="mb-0" style={{ fontSize: "16px" }}>Doesn't Matter</span>
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
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Pdf;

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import Card from "@mui/material/Card";
import { NavLink } from "react-router-dom";
import MDAvatar from "components/MDAvatar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDButton from "components/MDButton";

import backgroundImage from "assets/images/bg-profile.jpeg";


import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Audio } from "react-loader-spinner";
import { BASE_URL } from "BASE_URL";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

function Expiry() {

    const { _id } = useParams();

    const [companyDetails, setCompanyDetails] = useState("")
    const [product, setProduct] = useState("")
    const [buyer, setBuyer] = useState("")
    const [seller, setSeller] = useState("")

    const fetchUserList = async () => {
        try {
            const token = `Bearer ${localStorage.getItem("chemToken")}`;
            const response = await axios.get(`${BASE_URL}/api/superadmin/inquiry/${_id}`, {
                headers: {
                    Authorization: token,
                },
            });
            setCompanyDetails(response?.data?.inquiryList?.[0])
            setProduct(response?.data?.inquiryList?.[0]?.product)
            setSeller(response?.data?.inquiryList?.[0]?.seller_company)
            setBuyer(response?.data?.inquiryList?.[0]?.buyer_company)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserList();
    }, []);



    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mb={2}
                display="flex"
                alignItems="center"
                position="relative"
                minHeight="18.75rem"
                borderRadius="xl"
                sx={{
                    backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.info.main, 0.6),
                            rgba(gradients.info.state, 0.6)
                        )}, url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    overflow: "hidden",
                }}
            />
            <Card
                sx={{
                    position: "relative",
                    mt: -8,
                    mx: 3,
                    py: 2,
                    px: 2,
                }}
            >
                <Grid container spacing={3}>

                    <Grid item xs={12} md={12} xl={12} sx={{ display: "flex" }} className="d-flex justify-content-center py-5">
                        <MDBox>
                            <MDBox fullWidth className="d-flex gap-2">
                                <TextField id="outlined-basic" label="Search" className="w-75" variant="outlined" />
                                <MDButton
                                    variant="gradient"
                                    color="dark"
                                    className=""
                                >
                                    Submit
                                </MDButton>
                            </MDBox>
                            <p className="mt-3 fs-3">
                                jaodjja  asjdsn alsndkl
                            </p>
                        </MDBox>
                    </Grid>
                </Grid>
            </Card>
            <Footer />
        </DashboardLayout>

    );
}

export default Expiry;

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

// @mui material components
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

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

import axios from "axios";
import { BASE_URL } from "BASE_URL";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileInfoCard from "examples/Cards/InfoCards/banking";

function Address() {

    const { _id } = useParams();
    const [companyDetails, setCompanyDetails] = useState("")
    const [companyDetails1, setCompanyDetails1] = useState("")
    console.log(companyDetails1);

    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const token = `Bearer ${localStorage.getItem("chemToken")}`;
                const response = await axios.get(`${BASE_URL}/company/companyDetail/${_id}`, {
                    headers: {
                        Authorization: token,
                    },
                });
                setCompanyDetails(response?.data?.company?.bank_details || null);
                setCompanyDetails1(response?.data?.company?.billing_address?.[0] || null);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserList();
    }, [_id]);



    return (

        <MDBox mt={5} mb={3}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                    <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
                    <ProfileInfoCard
                        title="Billing Address"

                        info={{
                            address: companyDetails1?.bill_to_address || "",
                            country: companyDetails?.bill_to_country || "",
                            state: companyDetails?.bill_to_state || "",
                            city: companyDetails?.bill_to_city || "",
                            pincode: companyDetails?.bill_to_pin || "",
                        }}

                        action={{ route: "", tooltip: "Edit Profile" }}
                        shadow={false}
                    />
                </Grid>
                <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                    <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
                    <ProfileInfoCard
                        title="Shipping Address"

                        info={{
                            address: companyDetails1?.ship_to_address || "",
                            country: companyDetails?.ship_to_country || "",
                            state: companyDetails?.bill_to_state || "",
                            city: companyDetails?.ship_to_city || "",
                            pincode: companyDetails?.ship_to_pin || "",
                        }}

                        action={{ route: "", tooltip: "Edit Profile" }}
                        shadow={false}
                    />
                </Grid>
            </Grid>
        </MDBox>
    );
}

export default Address;

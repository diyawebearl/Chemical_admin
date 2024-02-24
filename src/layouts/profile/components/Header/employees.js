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
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
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

function Employees() {

  const { _id } = useParams();
  const [companyDetails, setCompanyDetails] = useState("")

  const fetchUserList = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("chemToken")}`;
      const response = await axios.get(`${BASE_URL}/company/companyDetail/${_id}`, {
        headers: {
          Authorization: token,
        },
      });
      setCompanyDetails(response.data.company)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);


  
  return (

    <MDBox mt={5} mb={3}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
          <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
          <ProfileInfoCard
            title="profile information"
            info={{
              fullName: companyDetails.contact_person_name,
              mobile: companyDetails.mobile_num,
              GST: companyDetails.gst,
              address: companyDetails.address,
              country: companyDetails.country,
              state: companyDetails.state,
              city: companyDetails.city,
              status: companyDetails.status
            }}

            action={{ route: "", tooltip: "Edit Profile" }}
            shadow={false}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
          <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
          <ProfileInfoCard
            title="Other Information"
            info={{
              website: companyDetails?.other_info?.website,
              mobile: companyDetails?.other_info?.other_contactno,
              email: companyDetails?.other_info?.other_emailid
            }}
            social={[
              {
                link: "YOUR_LINKEDIN_LINK_HERE",
                icon: <FacebookIcon />,
                color: "facebook",
              },
              {
                link: "YOUR_LINKEDIN_LINK_HERE",
                icon: <TwitterIcon />,
                color: "twitter",
              },
              {
                link: "YOUR_LINKEDIN_LINK_HERE",
                icon: <InstagramIcon />,
                color: "instagram",
              },
              {
                link: "YOUR_YOUTUBE_LINK_HERE",
                icon: <YouTubeIcon />,
                color: "youtube",
              },
              {
                link: "YOUR_LINKEDIN_LINK_HERE",
                icon: <LinkedInIcon />,
                color: "linkedin",
              },
            ]}
            action={{ route: "", tooltip: "Edit Profile" }}
            shadow={false}
          />
          <Divider orientation="vertical" sx={{ mx: 0 }} />
        </Grid>
        <Grid item xs={12} xl={4}>
          <ProfilesList title="Documents" profiles={profilesListData} shadow={false} />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Employees;

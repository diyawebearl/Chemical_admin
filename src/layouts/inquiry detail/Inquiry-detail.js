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
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/inquiry detail/components/Header";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import backgroundImage from "assets/images/bg-profile.jpeg";


import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Audio } from "react-loader-spinner";
import { BASE_URL } from "BASE_URL";

function Inquiry_detail() {

  const { _id } = useParams();

  const [companyDetails, setCompanyDetails] = useState("")
  const [product, setProduct] = useState("")
  const [buyer, setBuyer] = useState("")
  const [seller, setSeller] = useState("")
  console.log(seller);

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
      setSeller(response?.data?.inquiryList?.[0]?.seller_company_id)
      setBuyer(response?.data?.inquiryList?.[0]?.buyer_company_id)
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

          <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileInfoCard
              title="Product information"
              info={{
                product: product.name_of_chemical,
                CAS: product.CAS_number,
                IUPAC: product.IUPAC_name,
                Molecularformula: product.molecularFormula,
                molweight: product.mol_weight,
                storage: product.storage,
                synonums: product.synonums,
                appearance: product.Appearance,
              }}

              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileInfoCard
              title="Inquiry Details"
              info={{
                quantity: `${companyDetails.inquiry_qty} ${companyDetails.inq_qty_type}`,
                minprice: companyDetails.min_price,
                maxprice: companyDetails.max_price,
                onelotquantity: `${companyDetails.one_lot_qty} ${companyDetails.one_lot_qty_type}`,
                onelotqtyprice: companyDetails.one_lot_qty_price,
                purity: companyDetails.purity,
                supply_capacity: companyDetails.supply_capacity,
                country: companyDetails.country_origin,
                status: companyDetails.status,
              }}

              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileInfoCard
              title="Buyer Company Details"
              info={{
                company_name: buyer.company_name,
                contact_person_name: buyer.contact_person_name,
                emailid: buyer.emailid,
                mobile_num: buyer.mobile_num,
                gst: buyer.gst,
                mode_of_business: buyer?.mode_of_business?.join(", "),
                address: buyer.address,
                country: buyer.country,
                state: buyer.state,
                city: buyer.city,
                pincode: buyer.pincode,
                status: buyer.status,
              }}

              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileInfoCard
              title="Seller Company Details"
              info={{
                company_name: buyer.company_name,
                contact_person_name: buyer.contact_person_name,
                emailid: buyer.emailid,
                mobile_num: buyer.mobile_num,
                gst: buyer.gst,
                mode_of_business: buyer?.mode_of_business?.join(", "),
                address: buyer.address,
                country: buyer.country,
                state: buyer.state,
                city: buyer.city,
                pincode: buyer.pincode,
                status: buyer.status,
              }}

              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
            />
          </Grid>
        </Grid>
      </Card>
      <Footer />
    </DashboardLayout>

  );
}

export default Inquiry_detail;

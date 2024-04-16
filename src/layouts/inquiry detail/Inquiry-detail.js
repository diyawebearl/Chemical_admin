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
import ProfileInfoCard from "examples/Cards/InfoCards/Inquiry-detail";
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

          <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileInfoCard
              title="Product information"
              info={{
                product: product?.name_of_chemical,
                CAS_number: product?.CAS_number,
                IUPAC_name: product?.IUPAC_name,
                Molecular_formula: product?.molecularFormula,
                mol_weight: product?.mol_weight,
                storage: product?.storage,
                synonums: product?.synonums,
                appearance: product?.Appearance,
                purity: companyDetails.purity,
                supply_capacity: companyDetails.supply_capacity,
                country_origin: companyDetails.country_origin,
              }}

              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
              coaLink={companyDetails?.COA}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            {companyDetails.inq_qty_type == "inquiry" ? (
              <>
                <ProfileInfoCard
                  title="Inquiry Details"
                  info={{
                    inquiry_type: companyDetails?.inq_type,
                    inquiry_date: `${companyDetails?.createdAt?.slice(0, 10)}`,
                    inquiry_quantity: `${companyDetails?.inquiry_qty} ${companyDetails?.qty_type}`,
                    price_range: `${companyDetails?.min_price} ₹ - ${companyDetails?.max_price} ₹`,
                    // one_lot_quantity: `${companyDetails.one_lot_qty} ${companyDetails.one_lot_qty_type}`,
                    // one_lot_qty_price: companyDetails.one_lot_qty_price,
                    payment_type: companyDetails.payment_type,
                    payment_terms: companyDetails.payment_terms,
                    delivery_time: companyDetails.delivery_time,

                  }}
                  action={{ route: "", tooltip: "Edit Profile" }}
                  shadow={false}
                  status={companyDetails?.status}
                  pstatus={companyDetails?.payment_status}

                />
              </>
            ) : (
              <ProfileInfoCard
                title="Inquiry Details"
                info={{
                  inquiry_type: companyDetails?.inq_type,
                  inquiry_date: `${companyDetails?.createdAt?.slice(0, 10)}`,
                  inquiry_quantity: `${companyDetails.inquiry_qty} ${companyDetails.qty_type}`,
                  price: `${companyDetails.min_price} ₹`,
                  one_lot_quantity: `${companyDetails.one_lot_qty} ${companyDetails.one_lot_qty_type}`,
                  one_lot_qty_price: companyDetails.one_lot_qty_price,
                  total_lot: companyDetails.total_lot,
                  payment_type: companyDetails.payment_type,
                  payment_terms: companyDetails.payment_terms,
                  delivery_time: companyDetails.delivery_time,
                }}

                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
                status={companyDetails?.status}
                pstatus={companyDetails?.payment_status}

              />
            )}
          </Grid>
          <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileInfoCard
              title="Buyer Company Details"
              info={{
                company_name: buyer?.company_name,
                contact_person_name: buyer?.contact_person_name,
                emailid: buyer?.emailid,
                mobile_num: buyer?.mobile_num,
                gst_number: buyer?.gst,
                mode_of_business: buyer?.mode_of_business?.join(", "),
                address: buyer?.address,
                country: buyer?.country,
                state: buyer?.state,
                city: buyer?.city,
                pincode: buyer?.pincode,
              }}

              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
              bstatus={buyer?.status}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileInfoCard
              title="Seller Company Details"
              info={{
                company_name: seller?.company_name,
                contact_person_name: seller?.contact_person_name,
                emailid: seller?.emailid,
                mobile_number: seller?.mobile_num,
                gst: seller?.gst,
                mode_of_business: seller?.mode_of_business?.join(", "),
                address: seller?.address,
                country: seller?.country,
                state: seller?.state,
                city: seller?.city,
                pincode: seller?.pincode,
              }}

              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
              sstatus={seller?.status}
            />
          </Grid>
        </Grid>
      </Card>
      <Footer />
    </DashboardLayout>

  );
}

export default Inquiry_detail;

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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';

// Data
import authorsTableData from "layouts/suggestedchemicals/data/authorsTableData";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { BASE_URL } from "BASE_URL";

const Suggested = () => {
  const token = localStorage.getItem("chemToken");
  const navigate = useNavigate();

  const [chemicalList, setChemicalList] = useState([])
  console.log(chemicalList);

  const fetchUserList = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("chemToken")}`;
      const response = await axios.get(
        `${BASE_URL}/api/productByCompany/displayList`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setChemicalList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/authentication/sign-in");
    }
  }, []);

  const shouldShowAddButton = () => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    return screenWidth < 850;
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleCompanyChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const { columns, rows } = authorsTableData(chemicalList, searchTerm);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
        <Grid item xs={5}>
          <FormControl fullWidth>
            <TextField id="outlined-basic" onChange={handleCompanyChange} label="Search chemical or cas number" variant="outlined" />
          </FormControl>
        </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Suggested Chemical List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Suggested;

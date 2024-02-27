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
import { Link, useLocation, useNavigate } from "react-router-dom";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import axios from "axios";
import { BASE_URL } from "BASE_URL";
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

//countries , state and city
import countries from "../../CountryStateCity.json"

function Company() {
  const [categoryList, setCategoryList] = useState([])
  const [myData, setMyData] = useState([])
  const [myData2, setMyData2] = useState([])
  const [myData3, setMyData3] = useState([])
  const [myData4, setMyData4] = useState([])
  const [myData5, setMyData5] = useState([])
  const { columns, rows } = authorsTableData(categoryList);

  const india = countries && countries.find((e) => e.name === "India")


  const fetchUserList = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("chemToken")}`;
      const response = await axios.get(
        `${BASE_URL}/company/all`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCategoryList(response.data.companies);
      setMyData(response.data.companies);
      setMyData2(response.data.companies);
      setMyData3(response.data.companies);
      setMyData4(response.data.companies);
      setMyData5(response.data.companies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);




  const handleCompanyChange = (e) => {
    const company = e.target.value.toLowerCase();

    const filteredData = myData.filter((rows) => {
      const name = rows?.company_name?.toLowerCase();
      const nameMatch = name.includes(company);

      return nameMatch;
    })
    setCategoryList(filteredData)
    setMyData2(filteredData)
    setMyData3(filteredData)
  }

  const handleGstChange = (e) => {
    const gst = e.target.value.toLowerCase();

    if (myData.length != categoryList) {
      const filtered = myData2;
      const filteredData = filtered.filter((rows) => {
        const gstSearch = rows?.gst?.toLowerCase();
        const gstMatch = gstSearch.includes(gst);

        return gstMatch;
      })

      setCategoryList(filteredData)
      setMyData3(filteredData)
    } else {
      const filtered = myData;
      const filteredData = filtered.filter((rows) => {
        const gstSearch = rows?.gst?.toLowerCase();
        const gstMatch = gstSearch.includes(gst);

        return gstMatch;
      })

      setCategoryList(filteredData)
      setMyData3(filteredData)
    }
  }

  const handleMobileChange = (e) => {
    const number = e.target.value.toLowerCase();

    if (myData.length != categoryList) {
      const filtered = myData3;
      const filteredData = filtered.filter((rows) => {
        const numberSearch = rows?.mobile_num?.toLowerCase();
        const numberMatch = numberSearch.includes(number);

        return numberMatch;
      })

      setCategoryList(filteredData)
      setMyData4(filteredData)
    } else {
      const filtered = myData;
      const filteredData = filtered.filter((rows) => {
        const numberSearch = rows?.mobile_num?.toLowerCase();
        const numberMatch = numberSearch.includes(number);

        return numberMatch;
      })

      setCategoryList(filteredData)
      setMyData4(filteredData)
    }
  }


  // const [state, setState] = useState([])
  // const [cities, setCities] = useState([])
  // console.log(cities);

  const handleModeChange = (e) => {
    const mode = e.target.value.toLowerCase();
  }

  const handleStateChange = (e) => {
    // setState(e.target.value)
    // const state = e.target.value.toLowerCase();

    // const selectedCityArray = india && india.states.find((e) => e.name === state) 

    // setCities(selectedCityArray)

  }

  const handleCityChange = (e) => {
    // const city = e.target.value.toLowerCase();
  }


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <TextField id="outlined-basic" onChange={handleCompanyChange} label="Company Name" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item xs={1.8}>
                <FormControl fullWidth>
                  <TextField id="outlined-basic" onChange={handleGstChange} label="GST" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item xs={1.8}>
                <FormControl fullWidth>
                  <TextField id="outlined-basic" onChange={handleMobileChange} label="Mobile Number" variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item xs={1.8}>
                <FormControl fullWidth>
                  <InputLabel style={{ paddingBottom: "10px" }} id="demo-simple-select-label">Business Mode</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleModeChange}
                    // value={age}
                    label="Age"
                    style={{ padding: "10px 0px" }}
                  // onChange={handleChange}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Manufecture">Manufecture</MenuItem>
                    <MenuItem value="Trader">Trader</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={1.4}>
                <FormControl fullWidth>
                  <InputLabel style={{ paddingBottom: "10px" }} id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleStateChange}
                    label="state"
                    style={{ padding: "10px 0px" }}
                  >
                    <MenuItem value="dff">All</MenuItem>
                    {india && india.states.map((state) => {

                      <MenuItem value="dfdsd">{state.name}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={1.4}>
                <FormControl fullWidth>
                  <InputLabel style={{ paddingBottom: "10px" }} id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleCityChange}
                    label="city"
                    style={{ padding: "10px 0px" }}
                  >
                    <MenuItem value="why">All</MenuItem>
                    {/* <MenuItem value="why">Ten</MenuItem> */}
                    {/* <MenuItem value="so">Twenty</MenuItem> */}
                    {/* <MenuItem value="ehy">Thirty</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
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
                  {/* Company List ({filteredRows.length}) */}
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
}

export default Company;

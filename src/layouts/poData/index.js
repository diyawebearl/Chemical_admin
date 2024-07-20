

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

// Data
import authorsTableData from "layouts/poData/data/authorsTableData";
import axios from "axios";
import { BASE_URL } from "BASE_URL";
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';

//countries , state and city
import countries from "../../CountryStateCity.json";


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import poImage from "../../assets/images/invoice1.jpg";
import { Button } from "@material-ui/core";

function PoData() {
  const [categoryList, setCategoryList] = useState([]);
  const [productNameFilter, setProductNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [buyerFilter, setBuyerFilter] = useState("");
  const [sellerFilter, setSellerFilter] = useState("");
  const [inquiryTypeFilter, setInquiryTypeFilter] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const [cities, setCities] = useState([]);
  const india = countries && countries.find((e) => e.name === "India")


  const fetchUserList = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("chemToken")}`;
      const response = await axios.get(
        `${BASE_URL}/api/superadmin/inquiry`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCategoryList(response.data.inquiryList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const handleProductNameChange = (event) => {
    setProductNameFilter(event.target.value);
  };

  const handleBuyerChange = (event) => {
    setBuyerFilter(event.target.value);
  };

  const handleSellerChange = (event) => {
    setSellerFilter(event.target.value);
  };

  const handleInquiryTypeChange = (event) => {
    setInquiryTypeFilter(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };


  // const handleDateRangeChange = (dateRange) => {
  //   setSelectedDateRange(dateRange);
  // };



  const handleDateChange = (date) => {
    const selectedDateAsDate = date.toDate(); // Convert to JavaScript Date object
    setSelectedDate(selectedDateAsDate);
  }



  const ModalContent = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
  });


  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true); 
  };

  const handleCloseModal = () => {
    setOpenModal(false); 
  };

  
  const { columns, rows } = authorsTableData({
    categoryList,
    productNameFilter,
    selectedDate,
    statusFilter,
    buyerFilter,
    sellerFilter,
    inquiryTypeFilter,
    handleOpenModal,
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ border: "none", outline: "none", boxShadow: "none" }} 
      >
        <ModalContent>
          <div className="d-flex justify-content-center gap-3 me-5 mb-3">
            <Button color="primary" variant="contained" >
              <DownloadIcon className="me-1" /> Download
            </Button>
            <Button color="primary" variant="contained" >
              <PrintIcon className="me-1" /> Print
            </Button>
          </div>
          <img src={poImage} alt="PO" style={{ height: "80vh", border: "none", outline: "none" }} />
        </ModalContent>
      </Modal>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {/* product name  */}
              <Grid item xs={1.8} className="mt-2">
                <FormControl fullWidth>
                  <TextField id="outlined-basic" label="Product Name" variant="outlined"
                    value={productNameFilter}
                    onChange={handleProductNameChange}
                  />
                </FormControl>
              </Grid>
              {/* buyer name  */}
              <Grid item xs={1.8} className="mt-2">
                <FormControl fullWidth>
                  <TextField id="outlined-basic" label="Buyer Name Search" variant="outlined"
                    value={buyerFilter}
                    onChange={handleBuyerChange}
                  />
                </FormControl>
              </Grid>
              {/* seller name  */}
              <Grid item xs={1.8} className="mt-2">
                <FormControl fullWidth>
                  <TextField id="outlined-basic" label="Seller Name Search" variant="outlined"
                    value={sellerFilter}
                    onChange={handleSellerChange}
                  />
                </FormControl>
              </Grid>
              {/* date  */}
              <Grid item xs={2.6}>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} style={{ paddingTop: "0px" }}>
                      <DatePicker
                        label="Inquiry Date"
                        value={selectedDate}
                        onChange={handleDateChange} // Pass the handleDateChange function as onChange

                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              {/* <Grid item xs={6}>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateRangePicker
                      value={selectedDateRange}
                      onChange={handleDateRangeChange}
                      startText="Check"
                      endText="Check-out"
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid> */}
              {/* status  */}
              <Grid item xs={1.8} className="mt-2">
                <FormControl fullWidth>
                  <InputLabel style={{ paddingBottom: "10px" }} id="demo-simple-select-label">status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleStatusChange}
                    value={statusFilter}
                    label="Age"
                    style={{ padding: "10px 0px" }}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="pending">pending</MenuItem>
                    <MenuItem value="active">active</MenuItem>
                    <MenuItem value="inactive">inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* inquiry type  */}
              <Grid item xs={1.8} className="mt-2">
                <FormControl fullWidth>
                  <InputLabel style={{ paddingBottom: "10px" }} id="demo-simple-select-label">Inquiry Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleInquiryTypeChange}
                    value={inquiryTypeFilter}
                    label="Age"
                    style={{ padding: "10px 0px" }}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="inquiry">Commercial inquiry</MenuItem>
                    <MenuItem value="sample inquiry">Sample inquiry</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* state  */}
              {/* <Grid item xs={1} className="mt-2">
                <FormControl fullWidth>
                  <InputLabel style={{ paddingBottom: "10px" }} id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleStateChange}
                    value={stateFilter}
                    label="state"
                    style={{ padding: "10px 0px" }}
                  >
                    <MenuItem value="">All</MenuItem>
                    {india && india.states.map((state) => (
                      <MenuItem value={state.name}>{state.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid> */}
              {/* city  */}
              {/* <Grid item xs={1} className="mt-2">
                <FormControl fullWidth>
                  <InputLabel style={{ paddingBottom: "10px" }} id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleCityChange}
                    value={cityFilter}
                    label="city"
                    style={{ padding: "10px 0px" }}
                  >
                    <MenuItem value="why">All</MenuItem>
                    {cities && cities.map((e) => (
                      <MenuItem value={e.name}>{e.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid> */}
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
                  PO({rows.length})
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

export default PoData;

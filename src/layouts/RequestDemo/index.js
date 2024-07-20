
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useNavigate } from "react-router-dom";
import authorsTableData from "layouts/RequestDemo/data/authorsTableData";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

function RequestDemo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const token = localStorage.getItem("chemToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/authentication/sign-in");
    } else {
      // Fetch data from your API
      fetch("https://chemical-api-usa2.onrender.com/api/request_demo/getAll", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("Fetched data:", response);
          if (Array.isArray(response.data)) {
            setData(response.data);
          } else {
            console.error("API response data is not an array:", response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token, navigate]);

  const handleClickOpen = (id, status) => {
    console.log("Clicked item ID:", id);
    console.log("Selected status:", status);
    setSelectedId(id);
    setSelectedStatus(status);
    setOpen(true);
  };

  const handleClose = (confirmed) => {
    setOpen(false);
    if (confirmed) {
      console.log("Confirmed status change for ID:", selectedId);
      handleStatusChange(selectedId, selectedStatus);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    console.log("Updating status for ID:", id, "to", newStatus);

    // Update the status in your state
    const updatedData = data.map((item) =>
      item._id === id ? { ...item, status: newStatus } : item
    );
    setData(updatedData);

    // Make an API call to update the status
    fetch(`https://chemical-api-usa2.onrender.com/api/request_demo/update/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Status updated:", response);
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  // if (loading) {
  //   return <div></div>;
  // }

  const { columns, rows } = authorsTableData(data, handleClickOpen, handleStatusChange);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                  Request Demo ({rows.length})
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
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
      >
        <DialogTitle>Confirm Status Change</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to change the status?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            No
          </Button>
          <Button onClick={() => handleClose(true)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default RequestDemo;

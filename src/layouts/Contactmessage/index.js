
// import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";
// import { useNavigate } from "react-router-dom";
// import authorsTableData from "layouts/Contactmessage/data/authorsTableData";

// function ContactMessage() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("chemToken");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/authentication/sign-in");
//     } else {
//       // Fetch data from your API
//       fetch("https://chemical-api-usa2.onrender.com/api/contactMessage/display", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => response.json())
//         .then((response) => {
//           console.log("Fetched data:", response);
//           if (Array.isArray(response.data)) {
//             setData(response.data);
//           } else {
//             console.error("API response data is not an array:", response.data);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   }, [token, navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const { columns, rows } = authorsTableData(data);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={6} pb={3}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                   Contact Message ({rows.length})
//                 </MDTypography>
//               </MDBox>
//               <MDBox pt={3}>
//                 <DataTable
//                   table={{ columns, rows }}
//                   isSorted={false}
//                   entriesPerPage={false}
//                   showTotalEntries={false}
//                   noEndBorder
//                 />
//               </MDBox>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }


// export default ContactMessage;


import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable"; // Adjust the import path based on your project structure
import { useNavigate } from "react-router-dom";
import authorsTableData from "layouts/Contactmessage/data/authorsTableData";

function ContactMessage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("chemToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/authentication/sign-in");
    } else {
      // Fetch data from your API
      fetch("https://chemical-api-usa2.onrender.com/api/contactMessage/display", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Fetched data:", data);
          setMessages(data); // Assuming data is already an array of messages
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { columns, rows } = authorsTableData(messages);

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
                  Contact Message ({rows.length})
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

export default ContactMessage;

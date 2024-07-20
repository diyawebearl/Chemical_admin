// import { useState } from "react";
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import DataTable from "examples/Tables/DataTable";
// import data from "layouts/dashboard/components/Projects/data";

// function Projects() {
//   const { columns, rows } = data();
//   const [menu, setMenu] = useState(null);

//   const openMenu = ({ currentTarget }) => setMenu(currentTarget);
//   const closeMenu = () => setMenu(null);

//   const renderMenu = (
//     <Menu
//       id="simple-menu"
//       anchorEl={menu}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "left",
//       }}
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={Boolean(menu)}
//       onClose={closeMenu}
//     >
//       <MenuItem onClick={closeMenu}>Action</MenuItem>
//       <MenuItem onClick={closeMenu}>Another action</MenuItem>
//       <MenuItem onClick={closeMenu}>Something else</MenuItem>
//     </Menu>
//   );

//   return (
//     <Card>
//       <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
//         <MDBox>
//           <MDTypography variant="h6" gutterBottom>
//             Projects
//           </MDTypography>
//           <MDBox display="flex" alignItems="center" lineHeight={0}>
//             <Icon
//               sx={{
//                 fontWeight: "bold",
//                 color: ({ palette: { info } }) => info.main,
//                 mt: -0.5,
//               }}
//             >
//               done
//             </Icon>
//             <MDTypography variant="button" fontWeight="regular" color="text">
//               &nbsp;<strong>30 done</strong> this month
//             </MDTypography>
//           </MDBox>
//         </MDBox>
//         <MDBox color="text" px={2}>
//           <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
//             more_vert
//           </Icon>
//         </MDBox>
//         {renderMenu}
//       </MDBox>
//       <MDBox>
//         <DataTable
//           table={{ columns, rows }}
//           showTotalEntries={false}
//           isSorted={false}
//           noEndBorder
//           entriesPerPage={false}
//         />
//       </MDBox>
//     </Card>
//   );
// }

// export default Projects;








import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import axios from "axios";

function Projects() {
  const [companies, setCompanies] = useState([]);
  const token = localStorage.getItem("chemToken");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("https://chemical-api-usa2.onrender.com/api/superadmin/deshboard", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCompanies(response.data.top10RegisteredCompanies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCompanies();
  }, []);

  const columns = [
    { Header: "Company Name", accessor: "company_name" },
    { Header: "GST", accessor: "gst" },
    { Header: "Contact Person", accessor: "contact_person_name" },
    { Header: "Mobile Number", accessor: "mobile_num" },
    { Header: "Email", accessor: "emailid" },
    { Header: "City", accessor: "city" },
    { Header: "State", accessor: "state" },
    { Header: "Country", accessor: "country" },
    { Header: "Status", accessor: "status" },
    { Header: "Membership Status", accessor: "membership_status" },
  ];

  const rows = companies.map(company => ({
    company_name: company.company_name,
    gst: company.gst,
    contact_person_name: company.contact_person_name,
    mobile_num: company.mobile_num,
    emailid: company.emailid,
    city: company.city,
    state: company.state,
    country: company.country,
    status: company.status,
    membership_status: company.membership_status,
  }));

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Top 10 Companies Details
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox>
    </Card>
  );
}

export default Projects;

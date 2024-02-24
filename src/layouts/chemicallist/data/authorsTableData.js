/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import chemical from "assets/images/f1.svg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      {/* <MDTypography variant="caption">{description}</MDTypography> */}
    </MDBox>
  );

  return {
    columns: [
      { Header: "chemical", accessor: "company", width: "18%", align: "left" },
      { Header: "cas", accessor: "cas", align: "left" },
      { Header: "hsn code", accessor: "hsn", align: "left" },
      { Header: "mol weight", accessor: "weight", align: "left" },
      { Header: "synonums", accessor: "synonums", align: "left" },
      { Header: "remarks", accessor: "remarks", width: "10%", align: "left" },
      { Header: "uses", accessor: "uses", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        company: <Author name="DFTA " email="C10H7F2N3O" image={chemical} />,
        cas: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            86404-63-9
          </MDTypography>
        ),
        hsn: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            29332990
          </MDTypography>
        ),
        weight: <Job title="187.24" />,
        synonums: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            Trityl Chloride
          </MDTypography>
        ),
        remarks: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
            sx={{ maxWidth: '200px', wordWrap: 'break-word' }} // Adjust maxWidth as needed
          >
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Ullam illo nulla accusantium voluptatem, <br /> tempora aliquam deleniti beatae aliquid repellat <br /> laboriosam enim cumque voluptatum quae debitis fugit itaque id deserunt! Ex.
          </MDTypography>
        ),
        uses: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            Fluconazol
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="/edit-chemical" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),

      },
    ],
  };
}

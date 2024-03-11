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
import { useNavigate } from "react-router-dom";

export default function AuthorsTableData(categoryList) {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );


  const navigate = useNavigate();

  const handleNav = (_id, status) => {
    navigate(`/edit-company/${_id}`, {state : {status: status}});
  };

  const handleNavigate = (_id) => {
    navigate(`/company-full-detail/${_id}`);
  };

  return {
    columns: [
      { Header: "company", accessor: "company", width: "18%", align: "left" },
      { Header: "contact person", accessor: "contact", align: "left" },
      { Header: "gst", accessor: "gst", align: "left" },
      { Header: "business mode", accessor: "mode", align: "left" },
      { Header: "mobile number", accessor: "mobile", align: "left" },
      { Header: "landline number", accessor: "landline", align: "left" },
      { Header: "address", accessor: "address", align: "left" },
      { Header: "pincode", accessor: "pincode", align: "left" },
      { Header: "country", accessor: "country", align: "left" },
      { Header: "state", accessor: "state", align: "left" },
      { Header: "city", accessor: "city", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
      { Header: "view", accessor: "view", align: "center" },
    ],

    rows:
      categoryList &&
      [...categoryList].reverse().map((category) => ({
        company: (
          <Author name={category.company_name} email={category.emailid} />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent={category.status}
              color={category.status === "active" ? "success" : "error"}
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        address: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category.address}
          </MDTypography>
        ),
        mode: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {/* Manufecture */}
          </MDTypography>
        ),
        mobile: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category.mobile_num}
          </MDTypography>
        ),
        landline: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {/* 9033251903 */}
          </MDTypography>
        ),
        pincode: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category.pincode}
          </MDTypography>
        ),
        gst: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category.gst}
          </MDTypography>
        ),
        contact: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category.contact_person_name}
          </MDTypography>
        ),
        country: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category.country}
          </MDTypography>
        ),
        state: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category.state}
          </MDTypography>
        ),
        city: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category.city}
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            onClick={() => handleNav(category._id, category.status)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            EDIT
          </MDTypography>
        ),
        view: (
          <MDTypography
            component="a"
            onClick={() => handleNavigate(category._id)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            VIEW
          </MDTypography>
        ),
      })),
  };
}

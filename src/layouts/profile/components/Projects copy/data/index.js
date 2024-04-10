import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "BASE_URL";
import { useParams } from "react-router-dom";
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function Data(openModal) {
  const { _id } = useParams();
  const [companyDetails, setCompanyDetails] = useState("");

  const arrayMy = [
    {name: "whyso"},
    {name: "whyso"},
    {name: "whyso"},
    {name: "whyso"},
    {name: "whyso"},
  ]

  const fetchUserList = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("chemToken")}`;
      const response = await axios.get(
        `${BASE_URL}/company/companyDetail/${_id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCompanyDetails(response?.data?.company?.employee_details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return {
    columns: [
      { Header: "bank name", accessor: "bank_name", width: "25%", align: "left" },
      { Header: "ifsc code", accessor: "ifsc_code", width: "10%", align: "left" },
      { Header: "account no", accessor: "account_no", align: "center" },
      { Header: "country", accessor: "country", align: "center" },
      { Header: "state", accessor: "state", align: "center" },
      { Header: "city", accessor: "city", align: "center" },
      { Header: "pincode", accessor: "pincode", align: "center" },
      { Header: "branch code", accessor: "branch_code", align: "center" },
      { Header: "view check", accessor: "view_check", align: "center" },
      { Header: "status", accessor: "completion", align: "center" },
    ],

    rows:
      arrayMy && Array.isArray(arrayMy)
        ? arrayMy.map((e) => ({
          bank_name: (
            <MDTypography variant="a">state bank of india</MDTypography>
          ),
          ifsc_code: <MDTypography variant="a">1234567890</MDTypography>,
          country: <MDTypography variant="a">India</MDTypography>,
          state: <MDTypography variant="a">Gujarat</MDTypography>,
          city: <MDTypography variant="a">Ahmedabad</MDTypography>,
          pincode: <MDTypography variant="a">123456</MDTypography>,
          branch_code: <MDTypography variant="a">1234</MDTypography>,
          view_check:
            <MDTypography variant="a" style={{ color: 'blue', textDecoration: 'underline', cursor: "pointer" }} onClick={openModal}>
              View Check
            </MDTypography>,
          account_no: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              1234567890
            </MDTypography>
          ),
          completion: (
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={e.status === "active" ? "active" : "inactive"}
                color={e.status === "active" ? "success" : "danger"}
                variant="gradient"
                size="sm"
              />
            </MDBox>
          ),
        }))
        : [],
  };
}

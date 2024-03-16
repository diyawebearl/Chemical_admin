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

  const arrayn = [
    {
      "inquiry_qty": 100,
      "qty_type": "kg",
      "inq_qty_type": "inquiry",
      "status": "pending",
      "category": "Chemicals",
      "subcategory": "Laboratory Chemicals",
      "grade": "A",
      "COA": "https://chemical-api-tnk6.onrender.com/coa_inquiry/1710234237514.pdf",
      "min_price": 50,
      "max_price": 100,
      "country_origin": "USA",
      "supply_capacity": 500,
      "purity": "98%",
      "one_lot_qty": 10,
      "one_lot_qty_type": "gm",
      "one_lot_qty_price": 5,
      "inquiry_id": "65f01a7d7bfa988ad4571677",
      "buyer_company_id": {
        "_id": "65eed4ab6f1d98ed22478f86",
        "company_name": "J Manufacturing Pvt. Ltd.",
        "gst": "GST123456789",
        "contact_person_name": "John Doe",
        "address": "123 Main Street",
        "mobile_num": "1234567890",
        "emailid": "john12.doe@example.com",
        "mode_of_business": [
          "manufacture",
          "trader"
        ],
        "password": "$2b$10$JJFJd0CQEKBPvBNUSVjtTe.D0B1IDwlDtSv.1sLveYty0.nnc9o4a",
        "country": "United States",
        "state": "California",
        "city": "Los Angeles",
        "pincode": 900011,
        "status": "active",
        "createdAt": "2024-03-11T09:53:47.290Z",
        "updatedAt": "2024-03-11T09:53:47.290Z",
        "__v": 0
      },
      "seller_company": {
        "_id": "65eec707614d84a978174bcd",
        "company_name": "Chemical Pvt. Ltd.",
        "gst": "GST123456789",
        "contact_person_name": "John Doe",
        "address": "123  Street",
        "mobile_num": "1234567890",
        "emailid": "chemical1@example.com",
        "mode_of_business": [
          "manufacture",
          "trader"
        ],
        "password": "$2b$10$YQB2ikB1kz7f.CWUwFgkquacIwPiNxU2LgBZRhW1EYdcf2BVERKIG",
        "country": "United States",
        "state": "California",
        "city": "Los Angeles",
        "pincode": 900011,
        "status": "active",
        "createdAt": "2024-03-11T08:55:35.949Z",
        "updatedAt": "2024-03-11T08:55:35.949Z",
        "__v": 0
      },
      "product": {
        "_id": "65f01876ad00f718b51dbe15",
        "CAS_number": "111-11-1",
        "name_of_chemical": "dummy",
        "structure": "https://chemical-api-tnk6.onrender.com/upload/1710233718308.png",
        "molecularFormula": "dummy",
        "mol_weight": "111",
        "synonums": "dummy",
        "status": true,
        "IUPAC_name": "dummy",
        "Appearance": "dummy",
        "storage": "dummy",
        "createdAt": "2024-03-12T08:55:18.530Z",
        "updatedAt": "2024-03-12T08:55:18.530Z",
        "__v": 0
      }
    },
  ]


  const navigate = useNavigate();

  const handleNav = (_id, status) => {
    navigate(`/edit-company/${_id}`, { state: { status: status } });
  };

  const handleNavigate = (_id) => {
    navigate(`/inquiry-detail/${_id}`);
  };

  return {
    columns: [
      { Header: "product", accessor: "product", width: "18%", align: "left" },
      { Header: "buyer company", accessor: "buyer", align: "left" },
      { Header: "seller company", accessor: "seller", align: "left" },
      { Header: "inquiry quantity", accessor: "quantity", align: "left" },
      { Header: "inquiry date", accessor: "date", align: "left" },
      // { Header: "landline number", accessor: "landline", align: "left" },
      // { Header: "address", accessor: "address", align: "left" },
      // { Header: "pincode", accessor: "pincode", align: "left" },
      // { Header: "country", accessor: "country", align: "left" },
      // { Header: "state", accessor: "state", align: "left" },
      // { Header: "city", accessor: "city", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "view", accessor: "view", align: "center" },
    ],

    rows:
      categoryList &&
      [...categoryList].reverse().map((category) => ({
        product: (
          <Author name={category?.product?.name_of_chemical} email={category?.product?.CAS_number} />
        ),
        buyer: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category?.buyer_company_id?.company_name}
          </MDTypography>
        ),
        seller: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category?.seller_company?.company_name}
          </MDTypography>
        ),
        quantity: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {/* Manufecture */}
            {category?.inquiry_qty}/{category?.qty_type}
          </MDTypography>
        ),
        date: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category?.createdAt?.slice(0, 10)}
          </MDTypography>
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
        view: (
          <MDTypography
            component="a"
            onClick={() => handleNavigate(category.inquiry_id)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            VIEW
          </MDTypography>
        ),
        // address: (
        //   <MDTypography
        //     component="a"
        //     variant="caption"
        //     color="text"
        //     fontWeight="medium"
        //   >
        //     {category.address}
        //   </MDTypography>
        // ),
        // landline: (
        //   <MDTypography
        //     component="a"
        //     variant="caption"
        //     color="text"
        //     fontWeight="medium"
        //   >
        //     {/* 9033251903 */}
        //   </MDTypography>
        // ),
        // pincode: (
        //   <MDTypography
        //     component="a"
        //     variant="caption"
        //     color="text"
        //     fontWeight="medium"
        //   >
        //     {category.pincode}
        //   </MDTypography>
        // ),
        // country: (
        //   <MDTypography
        //     component="a"
        //     variant="caption"
        //     color="text"
        //     fontWeight="medium"
        //   >
        //     {category.country}
        //   </MDTypography>
        // ),
        // state: (
        //   <MDTypography
        //     component="a"
        //     variant="caption"
        //     color="text"
        //     fontWeight="medium"
        //   >
        //     {category.state}
        //   </MDTypography>
        // ),
        // city: (
        //   <MDTypography
        //     component="a"
        //     variant="caption"
        //     color="text"
        //     fontWeight="medium"
        //   >
        //     {category.city}
        //   </MDTypography>
        // ),
        // action: (
        //   <MDTypography
        //     component="a"
        //     onClick={() => handleNav(category._id, category.status)}
        //     variant="caption"
        //     color="text"
        //     fontWeight="medium"
        //   >
        //     EDIT
        //   </MDTypography>
        // ),
      })),
  };
}

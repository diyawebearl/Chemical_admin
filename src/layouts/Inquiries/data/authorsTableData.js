// AuthorsTableData.js
import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { useNavigate } from "react-router-dom";

export default function AuthorsTableData({ categoryList, productNameFilter, selectedDateRange }) {
  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const isInDateRange = (date) => {
    const [startDate, endDate] = selectedDateRange;
    if (!startDate || !endDate) return true; // No range selected, include all
    return date >= startDate && date <= endDate;
  };

  const navigate = useNavigate();

  const handleNavigate = (_id) => {
    navigate(`/inquiry-detail/${_id}`);
  };

  return {
    columns: [
      { Header: "product", accessor: "product", width: "18%", align: "left" },
      { Header: "buyer company", accessor: "buyer", align: "left" },
      { Header: "seller company", accessor: "seller", align: "left" },
      { Header: "inquiry type", accessor: "type", align: "left" },
      { Header: "inquiry quantity", accessor: "quantity", align: "left" },
      { Header: "inquiry date", accessor: "date", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "view", accessor: "view", align: "center" },
    ],

    rows: categoryList
      .filter(
        (item) =>
          item.product.name_of_chemical
            .toLowerCase()
            .includes(productNameFilter.toLowerCase()) &&
          isInDateRange(new Date(item.createdAt))
      )
      .map((category) => ({
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
        type: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {category?.inq_qty_type}
          </MDTypography>
        ),
        quantity: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
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
            variant="caption"
            color="text"
            fontWeight="medium"
            onClick={() => handleNavigate(category.inquiry_id)}
          >
            VIEW
          </MDTypography>
        ),
      })),
  };
}

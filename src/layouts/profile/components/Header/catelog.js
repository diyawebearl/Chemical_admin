// import Grid from "@mui/material/Grid";
// import { BASE_URL } from "BASE_URL";
// import axios from "axios";
// import MDBox from "components/MDBox";
// import CatalogStatisticsCard from "examples/Cards/StatisticsCards/CatalogstatickCard";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function Catelog() {
//   const { _id } = useParams();

//   const [companyDetails, setCompanyDetails] = useState("");
//   console.log(companyDetails);

//   const fetchUserList = async () => {
//     try {
//       const token = `Bearer ${localStorage.getItem("chemToken")}`;
//       const response = await axios.get(
//         `${BASE_URL}/company/companyDetail/${_id}`,
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setCompanyDetails(response?.data?.company?.catalogs);
//       console.log(response?.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchUserList();
//   }, []);

//   return (
//     <Grid container spacing={3}>
//       {companyDetails &&
//         companyDetails.map((e) => {
//           return (
//             <>
//               <Grid item xs={12} md={6} lg={3}>
//                 <MDBox mb={1.5}>
//                   <CatalogStatisticsCard
//                     color="dark"
//                     icon="weekend"
//                     // title="Selling Inquiries"
//                     count={e.product_details?.[0]?.name_of_chemical}
//                     percentage={{
//                       color: "success",
//                       amount: "+55%",
//                       label: "than last week",
//                     }}
//                     bank_name={e.category}
//                     grade={e.grade}
//                     max_lot_q={e.max_lot_qty}
//                     one_lot_qty_price={`${e.one_lot_qty} ${e.one_lot_qty_type}`}
//                     price={`${e.min_price}rs - ${e.max_price}rs`}
//                     purity={`${e.purity}%`}
//                     quantity={`${e.qty} ${e.qty_type}`}
//                     subcat={e.subcategory}
//                     storage={e.storage}
//                     supply_capacity={e.supply_capacity}
//                     country_origin={e.country_origin}
//                     appearance={e.appearance}
//                   />
//                 </MDBox>
//               </Grid>
//             </>
//           );
//         })}
//     </Grid>
//   );
// }

// export default Catelog;












import Grid from "@mui/material/Grid";
import { BASE_URL } from "BASE_URL";
import axios from "axios";
import MDBox from "components/MDBox";
import CatalogStatisticsCard from "examples/Cards/StatisticsCards/CatalogstatickCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MDTypography from "components/MDTypography";

function Catelog() {
  const { _id } = useParams();
  const [companyDetails, setCompanyDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(companyDetails)

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
      setCompanyDetails(response?.data?.company?.catalogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  if (selectedProduct) {
    return (
      <MDBox>
        <MDTypography variant="h4">Product Details</MDTypography>
        <MDBox>
          <MDTypography variant="h6">
            Name: {selectedProduct.product_details[0].name_of_chemical}
          </MDTypography>
          <MDTypography variant="h6">
            Buyer Company: {selectedProduct.buyer_company}
          </MDTypography>
          <MDTypography variant="h6">HSN Code: {selectedProduct.hsn_code}</MDTypography>
          <MDTypography variant="h6">
            Appearance: {selectedProduct.appearance}
          </MDTypography>
          <MDTypography variant="h6">
            Molecular Weight: {selectedProduct.product_details[0].mol_weight}
          </MDTypography>
          <MDTypography variant="h6">
            Subcategory: {selectedProduct.subcategory}
          </MDTypography>
        </MDBox>
        <MDBox>
          <button onClick={() => setSelectedProduct(null)}>Back to List</button>
        </MDBox>
      </MDBox>
    );
  }

  return (
    <Grid container spacing={3}>
      {companyDetails &&
        companyDetails.map((e) => (
          <Grid item xs={12} md={6} lg={3} key={e._id}>
            <MDBox mb={1.5} onClick={() => handleProductClick(e)} style={{ cursor: "pointer" }}>
              <CatalogStatisticsCard
                color="dark"
                icon="weekend"
                count={e.product_details[0].name_of_chemical}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than last week",
                }}
                bank_name={e.category}
                grade={e.grade}
                max_lot_q={e.max_lot_qty}
                one_lot_qty_price={`${e.one_lot_qty} ${e.one_lot_qty_type}`}
                price={`${e.min_price}rs - ${e.max_price}rs`}
                purity={`${e.purity}%`}
                quantity={`${e.qty} ${e.qty_type}`}
                subcat={e.subcategory}
                storage={e.storage}
                supply_capacity={e.supply_capacity}
                country_origin={e.country_origin}
                appearance={e.appearance}
                product_id={e.product_id}
                company_id={e.company_id}
              />
            </MDBox>
          </Grid>
        ))}
    </Grid>
  );
}

export default Catelog;

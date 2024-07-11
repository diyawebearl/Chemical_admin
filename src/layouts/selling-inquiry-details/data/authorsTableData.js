// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// export default function data() {
//   const Author = ({ image, name, email }) => (
//     <MDBox display="flex" alignItems="center" lineHeight={1}>
//       <MDBox ml={2} lineHeight={1}>
//         <MDTypography display="block" variant="button" fontWeight="medium">
//           {name}
//         </MDTypography>
//         <MDTypography variant="caption">{email}</MDTypography>
//       </MDBox>
//     </MDBox>
//   );

//   const Job = ({ title, description }) => (
//     <MDBox lineHeight={1} textAlign="left">
//       <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
//         {title}
//       </MDTypography>
//       <MDTypography variant="caption">{description}</MDTypography>
//     </MDBox>
//   );

//   return {
//     columns: [
//       { accessor: "name", align: "left" },
//       { accessor: "structure", align: "left" },
//       { accessor: "cas", align: "left" },
//       { accessor: "subcat", align: "left" },
//       { accessor: "hsn", align: "left" },
//       { accessor: "appearance", align: "left" },
//       { accessor: "stored", align: "left" },

//     ],

//     rows: [
//       {
//         name: (
//           <>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//             <MDTypography variant="h6" color="text">
//                 DFTA
//               </MDTypography>
              
//               <MDTypography variant="h6" fontSize="12px" color="text">
//                 (C10H7F2N3O)
//               </MDTypography>
//             </MDBox>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 CAS
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 86404-63-9
//               </MDTypography>
//             </MDBox>
//           </>
//         ),
//         structure: (
//           <>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 SELLER COMPANY NAME
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 Webearl Technologies
//               </MDTypography>
//             </MDBox>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 BUYER COMPANY NAME
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 Infotech Technologies
//               </MDTypography>
//             </MDBox>
//           </>
//         ),
//         cas: (
//           <>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 MOL WEIGHT
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 106.8
//               </MDTypography>
//             </MDBox>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 INQ QUANTITY
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 10kg
//               </MDTypography>
//             </MDBox>
//           </>
//         ),
//         weight: (
//           <>


//           </>
//         ),
//         hsn: (
//           <>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 HSN CODE
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 106238923
//               </MDTypography>
//             </MDBox>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 PRICE
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 800 - 850 rs
//               </MDTypography>
//             </MDBox>
//           </>
//         ),
//         uses: (
//           <>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 USES
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 Fluconazol
//               </MDTypography>
//             </MDBox>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 USES
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 Fluconazol
//               </MDTypography>
//             </MDBox>
//           </>
//         ),
//         appearance: (
//           <>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 APPEARANCE
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 White to off white powder 6t6gtg ygub uubuhb uibui
//               </MDTypography>
//             </MDBox>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 STORAGE
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 In Room Temperature ggbu8 hhin unjmi uijiji iujiji
//               </MDTypography>
//             </MDBox>
//           </>
//         ),
//         subcat: (
//           <>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 SUB CATEGORY
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 Intermidiate Chemical
//               </MDTypography>
//             </MDBox>
//             <MDBox display="flex" flexDirection="column" mb={1} >
//               <MDTypography variant="p" fontSize="10px" color="text">
//                 INQUIRY DATE
//               </MDTypography>
//               <MDTypography variant="h6" color="text">
//                 10-12-2024
//               </MDTypography>
//             </MDBox>
//           </>
//         ),
//       },
//     ],
//   };
// 









// import React, { useEffect, useState } from "react";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import { BASE_URL } from "BASE_URL";
// import { useLocation } from "react-router-dom";

// export default function Data() {
//   const [rows, setRows] = useState([]);
//   const location = useLocation();
  
//   // Assuming the URL has the structure: /path/to/page/company_id/product_id
//   const [ , , company_id, product_id ] = location.pathname.split("/");

//   useEffect(() => {
//     const token = `Bearer ${localStorage.getItem("chemToken")}`;

//     fetch(`${BASE_URL}/api/inquiryRoutes/all`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": token,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const filteredData = data.data.filter((inquiry) => 
//           inquiry.product && inquiry.product._id === product_id &&
//           inquiry.seller_company && inquiry.seller_company._id === company_id
//         );

//         const fetchedData = filteredData.map((inquiry) => ({
//           id: inquiry.product._id,
//           companyId: inquiry.seller_company._id,
//           name: (
//             <MDBox display="flex" flexDirection="column" mb={1}>
//               <MDTypography variant="h6" color="text">
//                 {inquiry.product.name_of_chemical}
//               </MDTypography>
//             </MDBox>
//           ),
//           buyerCompany: (
//             <MDBox display="flex" flexDirection="column" mb={1}>
//               <MDTypography variant="h6" color="text">
//                 {inquiry.buyer_company.company_name}
//               </MDTypography>
//             </MDBox>
//           ),
//           hsn: (
//             <MDBox display="flex" flexDirection="column" mb={1}>
//               <MDTypography variant="h6" color="text">
//                 {inquiry.hsn_code}
//               </MDTypography>
//             </MDBox>
//           ),
//           appearance: (
//             <MDBox display="flex" flexDirection="column" mb={1}>
//               <MDTypography variant="h6" color="text">
//                 {inquiry.product.Appearance}
//               </MDTypography>
//             </MDBox>
//           ),
//           molWeight: (
//             <MDBox display="flex" flexDirection="column" mb={1}>
//               <MDTypography variant="h6" color="text">
//                 {inquiry.product.mol_weight}
//               </MDTypography>
//             </MDBox>
//           ),
//           subcategory: (
//             <MDBox display="flex" flexDirection="column" mb={1}>
//               <MDTypography variant="h6" color="text">
//                 {inquiry.subcategory}
//               </MDTypography>
//             </MDBox>
//           ),
//         }));

//         setRows(fetchedData);
//       })
//       .catch((error) => console.error("Error fetching data: ", error));
//   }, [product_id, company_id]);

//   return {
//     columns: [
//       { Header: "Product Name", accessor: "name", align: "left" },
//       { Header: "Buyer Company", accessor: "buyerCompany", align: "left" },
//       { Header: "HSN Code", accessor: "hsn", align: "left" },
//       { Header: "Appearance", accessor: "appearance", align: "left" },
//       { Header: "MOL Weight", accessor: "molWeight", align: "left" },
//       { Header: "Subcategory", accessor: "subcategory", align: "left" },
//     ],
//     rows,
//   };
// }












import React, { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton"; // Assuming MDButton is your custom button component
import { BASE_URL } from "BASE_URL";
import { useLocation, useNavigate } from "react-router-dom";

export default function Data() {
  const [rows, setRows] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Assuming the URL has the structure: /path/to/page/company_id/product_id
  const [ , , company_id, product_id ] = location.pathname.split("/");

  useEffect(() => {
    const token = `Bearer ${localStorage.getItem("chemToken")}`;

    fetch(`${BASE_URL}/api/inquiryRoutes/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const filteredData = data.data.filter((inquiry) => 
          inquiry.product && inquiry.product._id === product_id &&
          inquiry.seller_company && inquiry.seller_company._id === company_id
        );

        const fetchedData = filteredData.map((inquiry) => ({
          id: inquiry.product._id,
          companyId: inquiry.seller_company._id,
          name: (
            <MDBox display="flex" flexDirection="column" mb={1}>
              <MDTypography variant="h6" color="text">
                {inquiry.product.name_of_chemical}
              </MDTypography>
            </MDBox>
          ),
          buyerCompany: (
            <MDBox display="flex" flexDirection="column" mb={1}>
              <MDTypography variant="h6" color="text">
                {inquiry.buyer_company.company_name}
              </MDTypography>
            </MDBox>
          ),
          hsn: (
            <MDBox display="flex" flexDirection="column" mb={1}>
              <MDTypography variant="h6" color="text">
                {inquiry.hsn_code}
              </MDTypography>
            </MDBox>
          ),
          appearance: (
            <MDBox display="flex" flexDirection="column" mb={1}>
              <MDTypography variant="h6" color="text">
                {inquiry.product.Appearance}
              </MDTypography>
            </MDBox>
          ),
          molWeight: (
            <MDBox display="flex" flexDirection="column" mb={1}>
              <MDTypography variant="h6" color="text">
                {inquiry.product.mol_weight}
              </MDTypography>
            </MDBox>
          ),
          subcategory: (
            <MDBox display="flex" flexDirection="column" mb={1}>
              <MDTypography variant="h6" color="text">
                {inquiry.subcategory}
              </MDTypography>
            </MDBox>
          ),
          view: (
            <MDButton 
              // variant="contained" 
              // color="info" 
              onClick={() => handleViewClick(inquiry.product._id, inquiry.seller_company._id)}
              style={{cursor:"pointer"}}
            >
              View
            </MDButton>
          ),
        }));

        setRows(fetchedData);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [product_id, company_id]);

  const handleViewClick = () => {
  
    navigate("/inquiries");
  };

  return {
    columns: [
      { Header: "Product Name", accessor: "name", align: "left" },
      { Header: "Buyer Company", accessor: "buyerCompany", align: "left" },
      { Header: "HSN Code", accessor: "hsn", align: "left" },
      { Header: "Appearance", accessor: "appearance", align: "left" },
      { Header: "MOL Weight", accessor: "molWeight", align: "left" },
      { Header: "Subcategory", accessor: "subcategory", align: "left" },
      { Header: "Actions", accessor: "view", align: "center" }, 
    ],
    rows,
  };
}

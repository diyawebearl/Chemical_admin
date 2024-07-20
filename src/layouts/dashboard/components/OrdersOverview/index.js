// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// // Material Dashboard 2 React example components
// import TimelineItem from "examples/Timeline/TimelineItem";

// function OrdersOverview() {
//   return (
//     <Card sx={{ height: "100%" }}>
//       <MDBox pt={3} px={3}>
//         <MDTypography variant="h6" fontWeight="medium">
//           Orders overview
//         </MDTypography>
//         <MDBox mt={0} mb={2}>
//           <MDTypography variant="button" color="text" fontWeight="regular">
//             <MDTypography display="inline" variant="body2" verticalAlign="middle">
//               <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
//             </MDTypography>
//             &nbsp;
//             <MDTypography variant="button" color="text" fontWeight="medium">
//               24%
//             </MDTypography>{" "}
//             this month
//           </MDTypography>
//         </MDBox>
//       </MDBox>
//       <MDBox p={2}>
//         <TimelineItem
//           color="success"
//           icon="notifications"
//           title="$2400, Design changes"
//           dateTime="22 DEC 7:20 PM"
//         />
//         <TimelineItem
//           color="error"
//           icon="inventory_2"
//           title="New order #1832412"
//           dateTime="21 DEC 11 PM"
//         />
//         <TimelineItem
//           color="info"
//           icon="shopping_cart"
//           title="Server payments for April"
//           dateTime="21 DEC 9:34 PM"
//         />
//         <TimelineItem
//           color="warning"
//           icon="payment"
//           title="New card added for order #4395133"
//           dateTime="20 DEC 2:20 AM"
//         />
//         <TimelineItem
//           color="primary"
//           icon="vpn_key"
//           title="New card added for order #4395133"
//           dateTime="18 DEC 4:54 AM"
//           lastItem
//         />
//       </MDBox>
//     </Card>
//   );
// }

// export default OrdersOverview;











import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TimelineItem from "examples/Timeline/TimelineItem";
import axios from "axios";

function OrdersOverview() {
  const [productInquiries, setProductInquiries] = useState([]);
  const token = localStorage.getItem("chemToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://chemical-api-usa2.onrender.com/api/superadmin/deshboard", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProductInquiries(response.data.top10ProductInquiries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Top 10 Products Details
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        {productInquiries.map((inquiry, index) => {
          const product = inquiry.productDetails[0];
          return (
            <TimelineItem
              key={index}
              color="primary"
              icon={
                <img
                  src={`path_to_image_directory/${product.structure}`} // Replace with the actual path to the image directory
                  alt={product.name_of_chemical}
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                  }}
                />
              }
              title={product.name_of_chemical}
              dateTime={`Inquiries: ${inquiry.count}`}
              lastItem={index === productInquiries.length - 1}
            />
          );
        })}
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;

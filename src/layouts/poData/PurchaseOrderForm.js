// import React from 'react';
// import {
//   Box,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Grid,
// } from '@mui/material';

// const borderStyle = '1px solid #0000FF';
// const headerBgColor = '#ADD8E6';
// const blue = '#0000FF';

// function PurchaseOrderForm() {
//   return (
//     <Paper sx={{ maxWidth: 800, mx: 'auto', p: 2, boxShadow: 'none', border: borderStyle }}>
//       {/* Header */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, borderBottom: borderStyle, pb: 1 }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Box sx={{ bgcolor: '#D3D3D3', p: 2, mr: 2 }}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>DR</Typography>
//           </Box>
//           <Box>
//             <Typography>Maninagar</Typography>
//             <Typography>Ahmedabad, Gujarat - 380008</Typography>
//             <Typography>22AAAAA0000A1Z8</Typography>
//           </Box>
//         </Box>
//         <Box sx={{ textAlign: 'right' }}>
//           <Typography>Name : Rutvi Shah</Typography>
//           <Typography>Phone : 9898989898</Typography>
//         </Box>
//       </Box>

//       {/* Main content */}
//       <Box sx={{ borderBottom: borderStyle, mb: 2 }}>
//         <Typography variant="h6" align="center" sx={{ bgcolor: headerBgColor, py: 1, borderBottom: borderStyle }}>
//           PURCHASE ORDER
//         </Typography>

//         <Grid container>
//           <Grid item xs={4} sx={{ borderRight: borderStyle, p: 1 }}>
//             <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Details of Buyer :</Typography>
//             <Typography>Name : DR</Typography>
//             <Typography>GSTIN : 22AAAAA0000A1Z8</Typography>
//             <Typography>Address : Maninagar</Typography>
//             <Typography>Country : India</Typography>
//             <Typography>State : Gujarat</Typography>
//             <Typography>City : Ahmedabad</Typography>
//             <Typography>Pincode : 380008</Typography>
//             <Typography>Phone : 9898989898</Typography>
//           </Grid>
//           <Grid item xs={4} sx={{ borderRight: borderStyle, p: 1 }}>
//             <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Seller Detail / Shipped to :</Typography>
//             <Typography>Name : Siya Ram Chemicals</Typography>
//             <Typography>GSTIN : 12ABCDE1534F1Z5</Typography>
//             <Typography>Address : 22, Crodile, EDII, Near Bhat Circle</Typography>
//             <Typography>Country : India</Typography>
//             <Typography>State : Gujarat</Typography>
//             <Typography>City : Gandhinagar</Typography>
//             <Typography>Pincode : 380058</Typography>
//             <Typography>Phone : 8804880488</Typography>
//           </Grid>
//           <Grid item xs={4} sx={{ p: 1 }}>
//             <Typography>P.O. No : FYF_2427</Typography>
//             <Typography>P.O. Date : 2024-07-10</Typography>
//             <Typography>Inco Terms : EXW</Typography>
//             <Typography>Payment Terms : Immediate</Typography>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Product table */}
//       <TableContainer component={Paper} sx={{ mb: 2, boxShadow: 'none', border: borderStyle }}>
//         <Table size="small" sx={{ border: borderStyle }}>
//           <TableHead>
//             <TableRow sx={{ bgcolor: headerBgColor }}>
//               <TableCell sx={{ border: borderStyle }}>Sr No</TableCell>
//               <TableCell sx={{ border: borderStyle }}>Name Of Product / Service</TableCell>
//               <TableCell sx={{ border: borderStyle }}>HSN/SAC</TableCell>
//               <TableCell sx={{ border: borderStyle }}>Qty</TableCell>
//               <TableCell sx={{ border: borderStyle }}>Rate</TableCell>
//               <TableCell sx={{ border: borderStyle }}>Taxable Value</TableCell>
//               <TableCell sx={{ border: borderStyle }} colSpan={2}>GST</TableCell>
//               <TableCell sx={{ border: borderStyle }}>Total</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell sx={{ border: borderStyle }}>1</TableCell>
//               <TableCell sx={{ border: borderStyle }}>dichloromethane</TableCell>
//               <TableCell sx={{ border: borderStyle }}>123</TableCell>
//               <TableCell sx={{ border: borderStyle }}>20kg</TableCell>
//               <TableCell sx={{ border: borderStyle }}>15000</TableCell>
//               <TableCell sx={{ border: borderStyle }}>300000</TableCell>
//               <TableCell sx={{ border: borderStyle }}>7500 (2.5%)</TableCell>
//               <TableCell sx={{ border: borderStyle }}>7500 (2.5%)</TableCell>
//               <TableCell sx={{ border: borderStyle }}>315000</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell colSpan={3} sx={{ border: borderStyle }}>Total</TableCell>
//               <TableCell sx={{ border: borderStyle }}>20.00</TableCell>
//               <TableCell sx={{ border: borderStyle }}></TableCell>
//               <TableCell sx={{ border: borderStyle }}>300000</TableCell>
//               <TableCell sx={{ border: borderStyle }}>7500</TableCell>
//               <TableCell sx={{ border: borderStyle }}>7500</TableCell>
//               <TableCell sx={{ border: borderStyle }}>315000</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Footer details */}
//       <Grid container sx={{ border: borderStyle, mt: 2 }}>
//         <Grid item xs={6} sx={{ borderRight: borderStyle, p: 1 }}>
//           <Box sx={{ borderBottom: borderStyle, pb: 1, mb: 1 }}>
//             <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Total in Words</Typography>
//             <Typography>THREE HUNDRED FIFTEEN THOUSAND</Typography>
//           </Box>
//           <Box>
//             <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>TERMS & CONDITIONS</Typography>
//             <Typography variant="caption">standard terms & condition</Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={6} sx={{ p: 1 }}>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, pb: 1, bgcolor: '#D3EAF5' }}>
//             <Typography>Taxable Amount</Typography>
//             <Typography>3,00,000.00</Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
//             <Typography>Add: SGST</Typography>
//             <Typography>7,500.00</Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
//             <Typography>Add: CGST</Typography>
//             <Typography>7,500.00</Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
//             <Typography>Total Tax</Typography>
//             <Typography>15,000.00</Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
//             <Typography>Total Amount After Tax</Typography>
//             <Typography>3,15,000.00</Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
//             <Typography>Taxable Amount After Tax</Typography>
//             <Typography>(E & O.E)</Typography>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
//             <Typography>GST Payable on reverse charge</Typography>
//             <Typography>N.A</Typography>
//           </Box>
//           <Box sx={{ mt: 2, pt: 2, borderTop: borderStyle, textAlign: 'right', minHeight: 60 }}>
//             <Typography>Authority Signatory</Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }

// export default PurchaseOrderForm;











import React, { useState, useEffect } from 'react';
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Box,
} from '@mui/material';

const PurchaseOrderForm = ({ productId, authToken }) => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId || !authToken) return;

    setLoading(true);
    setError(null);

    fetch(`https://chemical-api-usa2.onrender.com/api/salesInvoice/displayDetails/${productId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success && data.data.length > 0) {
          setFormData(data.data[0]); // Assuming data is an array and we take the first item
        } else {
          setError('No data found');
        }
      })
      .catch(error => {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId, authToken]);

  if (loading) {
    return <Typography>Loading...</Typography>; // Show loading indicator until data is fetched
  }

  if (error) {
    return <Typography>Error: {error}</Typography>; // Show error message if fetch fails
  }

  if (!formData) {
    return null; // or return a placeholder message if needed
  }

  return (
    <Paper sx={{ p: 2, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Purchase Order Details
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom>
              Buyer Details:
            </Typography>
            <Typography variant="body2">
              Name: {formData.bill_to_name}<br />
              GSTIN: {formData.bill_to_gst_in}<br />
              Address: {formData.bill_to_address}<br />
              Country: {formData.bill_to_country}<br />
              State: {formData.bill_to_state}<br />
              City: {formData.bill_to_city}<br />
              Pincode: {formData.bill_to_pincode}<br />
              Phone: {formData.bill_to_phone}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom>
              Seller / Shipped To Details:
            </Typography>
            <Typography variant="body2">
              Name: {formData.shipped_to_name}<br />
              GSTIN: {formData.shipped_to_gst_in}<br />
              Address: {formData.shipped_to_address}<br />
              Country: {formData.shipped_to_country}<br />
              State: {formData.shipped_to_state}<br />
              City: {formData.shipped_to_city}<br />
              Pincode: {formData.shipped_to_pincode}<br />
              Phone: {formData.shipped_to_phone}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>CAS No.</TableCell>
              <TableCell>Chemical Formula</TableCell>
              <TableCell>HSN Code</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Taxable Amount</TableCell>
              <TableCell>IGST</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.product_details.map(product => (
              <TableRow key={product._id}>
                <TableCell>{product.chem_name}</TableCell>
                <TableCell>{product.cas_no}</TableCell>
                <TableCell>{product.mol_formula}</TableCell>
                <TableCell>{product.hsn}</TableCell>
                <TableCell>{product.qty} {product.qty_type}</TableCell>
                <TableCell>{product.rate}</TableCell>
                <TableCell>{product.taxable_amount}</TableCell>
                <TableCell>{product.igst}</TableCell>
                <TableCell>{product.taxable_amount * (1 + parseFloat(product.igst) / 100)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PurchaseOrderForm;

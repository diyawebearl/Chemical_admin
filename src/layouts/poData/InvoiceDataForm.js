import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from '@mui/material';
import { useParams } from 'react-router-dom';

const borderStyle = '1px solid #0000FF';
const headerBgColor = '#ADD8E6';

const numberToWords = (num) => {
  const a = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const b = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  const inWords = (num) => {
    if ((num = num.toString()).length > 9) return 'overflow';
    const n = ('000000000' + num).substr(-9).match(/.{1,3}/g);
    let str = '';
    str += (n[0] !== '000') ? (a[Number(n[0])] || b[n[0][0]] + ' ' + a[n[0][1]]) + 'crore ' : '';
    str += (n[1] !== '000') ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'lakh ' : '';
    str += (n[2] !== '000') ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'thousand ' : '';
    str += (n[3] !== '000') ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'hundred ' : '';
    str += (n[4] !== '00') ? ((str !== '') ? 'and ' : '') + (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + '' : '';
    return str.trim();
  };

  return inWords(num);
};

function InvoiceForm() {
  const { _id } = useParams(); 
  // const [po_data, setPo_data] = useState(null);
  const [po_data, setPo_data] = useState({ po_data_0: null, po_data_1: null });
  console.log(_id);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const token = localStorage.getItem('chemToken');
        if (!token) {
          throw new Error('Token not found');
        }

        const url = `https://chemical-api-usa2.onrender.com/api/inquiryRoutes/inquiryDetailsForCompany/${_id}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log(data);
        if (data.success && data.data && data.data.length > 0) {
          // setPo_data(data.data[0].po_data[0]);
          setPo_data({ po_data_0: data.data[0].po_data[0], po_data_1: data.data[0].po_data[1] });
        } else {
          throw new Error('No data found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state or display a message
      }
      
    };

    fetchData();
  }, [_id]);
  useEffect(() => {
    console.log('po_data:', po_data); // Log po_data to check if it contains bill_to_name
  }, [po_data]);

  if (!po_data.po_data_0 || !po_data.po_data_1) {
    return <Typography></Typography>; // Placeholder while data is being fetched
  }

  const { po_data_0, po_data_1 } = po_data;
  const productDetails = po_data_0.product_details || [];
  const sellerDetails = po_data_0.seller_company_details || [];
  return (
    <Paper sx={{ maxWidth: 800, mx: 'auto', p: 2, boxShadow: 'none', border: borderStyle }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, borderBottom: borderStyle, pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ bgcolor: '#D3D3D3', p: 2, mr: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>DR</Typography>
          </Box>
          <Box>
            <Typography>{po_data_0.shipped_to_name}</Typography>
            <Typography>{po_data_0.shipped_to_address}</Typography>
            <Typography>{po_data_0.shipped_to_city}, {po_data_0.shipped_to_state} - {po_data_0.shipped_to_pincode}</Typography>
            <Typography>{po_data_0.shipped_to_gst_in}</Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
  {sellerDetails.map((seller, index) => (
    <div key={index}>
      <Typography>Name: {seller.contact_person_name}</Typography>
      <Typography>Phone: {seller.mobile_num}</Typography>
    </div>
  ))}
</Box>
      </Box>

      {/* Main content */}
      <Box sx={{ borderBottom: borderStyle, mb: 2 }}>
        <Typography variant="h6" align="center" sx={{ bgcolor: headerBgColor, py: 1, borderBottom: borderStyle }}>
          TAX INVOICE
        </Typography>

        <Grid container>
          <Grid item xs={4} sx={{ borderRight: borderStyle, p: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Details of Buyer :</Typography>
            <Typography>Name : {po_data_0.bill_to_name}</Typography>
            <Typography>GSTIN : {po_data_0.bill_to_gst_in}</Typography>
            <Typography>Address : {po_data_0.bill_to_address}</Typography>
            <Typography>Country : {po_data_0.bill_to_country}</Typography>
            <Typography>State : {po_data_0.bill_to_state}</Typography>
            <Typography>City : {po_data_0.bill_to_city}</Typography>
            <Typography>Pincode : {po_data_0.bill_to_pincode}</Typography>
            <Typography>Phone : {po_data_0.bill_to_phone}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ borderRight: borderStyle, p: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Seller Detail / Shipped to :</Typography>
            <Typography>Name : {po_data_0.shipped_to_name}</Typography>
            <Typography>GSTIN : {po_data_0.shipped_to_gst_in}</Typography>
            <Typography>Address : {po_data_0.shipped_to_address}</Typography>
            <Typography>Country : {po_data_0.shipped_to_country}</Typography>
            <Typography>State : {po_data_0.shipped_to_state}</Typography>
            <Typography>City : {po_data_0.shipped_to_city}</Typography>
            <Typography>Pincode : {po_data_0.shipped_to_pincode}</Typography>
            <Typography>Phone : {po_data_0.shipped_to_phone}</Typography>
          </Grid>
          <Grid item xs={4} sx={{ p: 1 }}>
            <Typography>P.O. No : {po_data_0.po_num}</Typography>
            <Typography>P.O. Date : {po_data_0.po_date}</Typography>
            <Typography>Invoice No. : {po_data_1.invoice_no}</Typography>
            <Typography>Invoice Date : {po_data_1.invoice_date}</Typography>
            <Typography>Due Date : {po_data_1.due_date}</Typography>
            <Typography>E-Way No : {po_data_1.eway_no}</Typography>
            <Typography>Inco Terms : {po_data_0.inco_terms}</Typography>
            <Typography>Payment Terms : {po_data_0.payment_terms}</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Product table */}
      <TableContainer component={Paper} sx={{ mb: 2, boxShadow: 'none', border: borderStyle }}>
        <Table size="small" sx={{ border: borderStyle }}>
          <TableHead>
            <TableRow sx={{ bgcolor: headerBgColor }}>
              <TableCell sx={{ border: borderStyle }}>Sr No</TableCell>
              <TableCell sx={{ border: borderStyle }}>Name Of Product / Service</TableCell>
              <TableCell sx={{ border: borderStyle }}>HSN/SAC</TableCell>
              <TableCell sx={{ border: borderStyle }}>Qty</TableCell>
              <TableCell sx={{ border: borderStyle }}>Rate</TableCell>
              <TableCell sx={{ border: borderStyle }}>Taxable Value</TableCell>
              <TableCell sx={{ border: borderStyle }}>Amount(IGST)</TableCell>
              <TableCell sx={{ border: borderStyle }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productDetails.map((product, index) => (
              <TableRow key={product._id}>
                <TableCell sx={{ border: borderStyle }} >{index + 1}</TableCell>
                <TableCell sx={{ border: borderStyle }}>{product.chem_name}</TableCell>
                <TableCell sx={{ border: borderStyle }}>{product.hsn}</TableCell>
                <TableCell sx={{ border: borderStyle }}>{product.qty} {product.qty_type}</TableCell>
                <TableCell sx={{ border: borderStyle }}>{product.rate}</TableCell>
                <TableCell sx={{ border: borderStyle }}>{product.taxable_amount}</TableCell>
                <TableCell sx={{ border: borderStyle }}>{product.igst} ({product.igst}%)</TableCell>
                <TableCell sx={{ border: borderStyle }}>{product.taxable_amount}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell sx={{ border: borderStyle }}>Total</TableCell>
              <TableCell sx={{ border: borderStyle }}>{productDetails.reduce((acc, curr) => acc + curr.qty, 0)}</TableCell>
              <TableCell sx={{ border: borderStyle }}></TableCell>
              <TableCell sx={{ border: borderStyle }}>{productDetails.reduce((acc, curr) => acc + curr.taxable_amount, 0)}</TableCell>
              <TableCell sx={{ border: borderStyle }}>{productDetails.reduce((acc, curr) => acc + curr.igst, 0)}</TableCell>
              <TableCell sx={{ border: borderStyle }}>{po_data_0.grand_total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer details */}
      <Grid container sx={{ border: borderStyle, mt: 2 }}>
        <Grid item xs={6} sx={{ borderRight: borderStyle, p: 1 }}>
          <Box sx={{ borderBottom: borderStyle, pb: 1, mb: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Total in Words</Typography>
            <Typography>THREE HUNDRED FIFTEEN THOUSAND</Typography>
          </Box>
          <Box sx={{ borderBottom: borderStyle, pb: 1, mb: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Bank Details</Typography>
            <Typography>Name</Typography>
            <Typography>Branch</Typography>
            <Typography>Acc. Number</Typography>
            <Typography>IFSC</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>TERMS & CONDITIONS</Typography>
            <Typography variant="caption">standard terms & condition</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ p: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, pb: 1, bgcolor: '#D3EAF5' }}>
            <Typography>Taxable Amount:</Typography>
            <Typography>{productDetails.reduce((acc, curr) => acc + curr.taxable_amount, 0)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
            <Typography>Add: IGST</Typography>
            <Typography>{productDetails.reduce((acc, curr) => acc + curr.igst, 0)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
            <Typography>Total Tax</Typography>
            <Typography>{productDetails.reduce((acc, curr) => acc + curr.igst, 0)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
            <Typography>Total Amount After Tax</Typography>
            <Typography>{po_data_0.grand_total}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
            <Typography>Taxable Amount After Tax</Typography>
            <Typography>(E & O.E)</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
            <Typography>GST Payable on reverse charge</Typography>
            <Typography>N.A</Typography>
          </Box>
          <Box sx={{ mt: 2, pt: 2, borderTop: borderStyle, textAlign: 'right', minHeight: 60 }}>
            <Typography>Authority Signatory</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid container sx={{ border: borderStyle, mt: 2 }}>
        <Grid item xs={6} sx={{ borderRight: borderStyle, p: 1 }}>
          <Box sx={{ borderBottom: borderStyle, pb: 1, mb: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Total in Words</Typography>
            <Typography>THREE HUNDRED FIFTEEN THOUSAND</Typography>
          </Box>
          <Box sx={{ borderBottom: borderStyle, pb: 1, mb: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }} rowspan={4}>Bank Details</Typography>
            <Typography>Name</Typography>
            <Typography>Branch</Typography>
            <Typography>Acc. Number</Typography>
            <Typography>IFSC</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>TERMS & CONDITIONS</Typography>
            <Typography variant="caption">standard terms & condition</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ p: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, pb: 1, bgcolor: '#D3EAF5' }}>
            <Typography>Taxable Amount:</Typography>
            <Typography>{product.taxable_amount}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
            <Typography>Add: IGST</Typography>
            <Typography>{product.igst}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
            <Typography>Total Tax</Typography>
            <Typography>15,000.00</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
            <Typography>Total Amount After Tax</Typography>
            <Typography>3,15,000.00</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: borderStyle, py: 1 }}>
            <Typography>Taxable Amount After Tax</Typography>
            <Typography>(E & O.E)</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
            <Typography>GST Payable on reverse charge</Typography>
            <Typography>N.A</Typography>
          </Box>
          <Box sx={{ mt: 2, pt: 2, borderTop: borderStyle, textAlign: 'right', minHeight: 60 }}>
            <Typography>Authority Signatory</Typography>
          </Box>
        </Grid>
      </Grid> */} 
    </Paper>
  );
}

export default InvoiceForm;


















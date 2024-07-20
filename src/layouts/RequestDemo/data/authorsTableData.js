import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomSelect = styled(Select)(({ status }) => ({
  backgroundColor:
    status === 'demo_done' ? 'green' :
    status === 'pending' ? 'blue' :
    status === 'request_cancel' ? 'red' :
    'transparent',
  color: 'white',
  '& .MuiSelect-select': {
    padding: '10px',
    color: 'white', // Ensure the text color is white
  },
  '& .MuiSvgIcon-root': {
    color: 'white', // Ensure the dropdown icon color is white
  },
}));

const authorsTableData = (data, handleClickOpen) => {
  const columns = [
    { Header: "Company name", accessor: "company_name", width: "20%", align: "left" },
    { Header: "Contact person name", accessor: "contact_person_name", width: "20%", align: "left" },
    { Header: "Contact number", accessor: "contact_number", width: "20%", align: "left" },
    { Header: "Date", accessor: "contact_date", width: "20%", align: "left" },
    { Header: "Time", accessor: "contact_time", width: "20%", align: "left" },
    { Header: "Status", accessor: "status", width: "20%", align: "center" },
  ];

  const rows = data.map((item) => ({
    company_name: item.company_name,
    contact_person_name: item.contact_person_name,
    contact_number: item.contact_number,
    contact_date: new Date(item.contact_date).toLocaleString(),
    contact_time: item.contact_time,
    status: (
      <CustomSelect
        value={item.status}
        onChange={(e) => handleClickOpen(item._id, e.target.value)}
        status={item.status}
      >
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="demo_done">Approve</MenuItem>
        <MenuItem value="request_cancel">Decline</MenuItem>
      </CustomSelect>
    ),
  }));

  return { columns, rows };
};

export default authorsTableData;

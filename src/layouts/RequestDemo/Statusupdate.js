import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import MDButton from "components/MDButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const StatusUpdateDialog = ({ open, onClose, onUpdateStatus }) => {
  const [newStatus, setNewStatus] = React.useState("");

  const handleStatusChange = (event) => {
    setNewStatus(event.target.value);
  };

  const handleUpdate = () => {
    onUpdateStatus(newStatus);
  };

  const handleClose = () => {
    setNewStatus(""); // Reset status on close
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Status</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select value={newStatus} onChange={handleStatusChange} fullWidth>
            <MenuItem value="approve">Approve</MenuItem>
            <MenuItem value="decline">Decline</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <MDButton onClick={handleClose} color="secondary">
          Cancel
        </MDButton>
        <MDButton onClick={handleUpdate} color="primary">
          Update
        </MDButton>
      </DialogActions>
    </Dialog>
  );
};

export default StatusUpdateDialog;

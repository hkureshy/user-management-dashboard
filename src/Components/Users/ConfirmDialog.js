import React, { useCallback } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const ConfirmDialog = ({
  id,
  open,
  deleteUser,
  removeUser,
  handleOpen
}) => {
  const handleDelete = useCallback(async () => {
    await deleteUser(id);
    removeUser(id);
    handleOpen(false);
  }, [id, deleteUser, removeUser, handleOpen])

  return (
    <Dialog
      open={open}
    >
      <DialogTitle>
        Warning
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleOpen(false)}>No</Button>
        <Button onClick={handleDelete} autoFocus>Yes</Button>
      </DialogActions>
    </Dialog>
  );
}

export { ConfirmDialog };

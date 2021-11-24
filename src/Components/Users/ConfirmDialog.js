import React, { useCallback } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, CircularProgress } from '@mui/material';

const ConfirmDialog = ({
  loading,
  user,
  open,
  deleteUser,
  removeUser,
  handleOpen
}) => {
  const handleDelete = useCallback(async () => {
    if (user.username) {
      await deleteUser(user.id);
    }
    removeUser(user.id);
    handleOpen(false);
  }, [user, deleteUser, removeUser, handleOpen])

  return (
    <Dialog open={open}>
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
        <Button onClick={handleDelete} autoFocus disabled={loading}>
          { loading && <CircularProgress color='inherit' size={25} />}
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export { ConfirmDialog };

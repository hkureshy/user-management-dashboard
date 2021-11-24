import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableSortLabel,
  TablePagination,
  Button,
  CircularProgress
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import { ConfirmDialog } from './ConfirmDialog';

const headCells = [
  {
    id: 'id',
    label: 'Id'
  },
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'username',
    label: 'Username'
  },
  {
    id: 'city',
    label: 'City'
  },
  {
    id: 'email',
    label: 'Email'
  },
  {
    id: 'actions',
    label: 'Actions'
  }
];

const TableHeader = (props) => {
  const { order, orderBy, active, handleRequestSort, setActive } = props;
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
    setActive(true);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            align={headCell.id === 'actions' ? 'center' : 'left'}
          >
            { headCell.id === 'username' ? 
              <TableSortLabel
                active={active}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel> :
              headCell.label
            }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const UsersList = ({
  loading,
  users,
  deleteUser,
  removeUser,
  sortUsers
}) => {
  const [order, setOrder] = useState('');
  const [orderBy, setOrderBy] = useState('username');
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [user, setUser] = useState(-1);
  const [open, handleOpen] = useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    sortUsers(isAsc ? 'desc' : 'asc');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table size='medium'>
          <TableHeader
            order={order}
            orderBy={orderBy}
            active={active}
            handleRequestSort={handleRequestSort}
            setActive={setActive}
          />
          <TableBody>
            { loading && users.length === 0 ?
              <TableRow>
                <TableCell align='center' colSpan={7}>
                  <CircularProgress color='inherit' size={25} />
                </TableCell>
              </TableRow> :
              users.length > 0 ?
                users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.address?.city}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell align='center'>
                        <Link className='pointer text-decor-none' to={`user/${row.id}`}>
                          <Edit color='primary' fontSize='small' />
                        </Link>
                        <Delete
                          className='pointer text-decor-none'
                          color='secondary'
                          fontSize='small'
                          onClick={() => {
                            setUser(row)
                            handleOpen(true)
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                }) :
                <TableRow>
                  <TableCell align='center' colSpan={7}>
                    Please
                    <Link className='text-decor-none' to='/user'>
                      <Button>ADD A USER</Button>
                    </Link>
                    to Display
                  </TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
      { users.length > 0 &&
        <TablePagination
          rowsPerPageOptions={[15, 30, 45]}
          component='div'
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      }
      <ConfirmDialog
        loading={loading}
        user={user}
        open={open}
        deleteUser={deleteUser}
        removeUser={removeUser}
        handleOpen={handleOpen}
      />
    </Paper>
  );
}

export { UsersList };

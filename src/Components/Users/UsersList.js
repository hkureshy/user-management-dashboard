import React, { useState } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableSortLabel,
  TablePagination
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

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

const EnhancedTableHead = (props) => {
  const { order, orderBy, handleRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
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
                active={orderBy === 'username'}
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

const UsersList = ({ users }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('username');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  return (
    <Paper>
      <TableContainer>
        <Table size='medium'>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            { users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
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
                      <Edit color='primary' fontSize='small' />
                      <Delete color='secondary' fontSize='small' />
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{height: (53) * emptyRows }} >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 30, 50]}
        component='div'
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export { UsersList };

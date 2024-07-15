import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Select, MenuItem } from '@mui/material';

const AdminPage = () => {
  const [matches, setMatches] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  useEffect(() => {
    // Fetch matches from the backend
    axios.get('/api/matches')
      .then(response => setMatches(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleApprove = (id) => {
    // Approve the match
    axios.post(`/api/matches/${id}/approve`)
      .then(response => {
        setMatches(matches.map(match => match.id === id ? { ...match, status: 'approved' } : match));
      })
      .catch(error => console.error(error));
  };

  const handleReject = (id) => {
    // Reject the match
    axios.post(`/api/matches/${id}/reject`)
      .then(response => {
        setMatches(matches.map(match => match.id === id ? { ...match, status: 'rejected' } : match));
      })
      .catch(error => console.error(error));
  };

  const handleStopMatching = (id) => {
    // Stop the matching process
    axios.post(`/api/matches/${id}/stop`)
      .then(response => {
        setMatches(matches.map(match => match.id === id ? { ...match, status: 'stopped' } : match));
      })
      .catch(error => console.error(error));
  };

  const filteredMatches = matches.filter(match => {
    return (filterStatus === 'all' || match.status === filterStatus) && 
           (filterPriority === 'all' || match.priority === filterPriority);
  });

  return (
    <Container>
      <h1>Welcome back!</h1>
      <p>Here's a list of your tasks for this month!</p>
      <div>
        <Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} displayEmpty>
          <MenuItem value="all">All Statuses</MenuItem>
          <MenuItem value="approved">Approved</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
          <MenuItem value="in_progress">In Progress</MenuItem>
          <MenuItem value="stopped">Stopped</MenuItem>
        </Select>
        <Select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)} displayEmpty>
          <MenuItem value="all">All Priorities</MenuItem>
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </Select>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMatches.map((match) => (
              <TableRow key={match.id}>
                <TableCell>{match.task}</TableCell>
                <TableCell>{match.title}</TableCell>
                <TableCell>{match.status}</TableCell>
                <TableCell>{match.priority}</TableCell>
                <TableCell>
                  <Button onClick={() => handleApprove(match.id)} variant="contained" color="primary">Approve</Button>
                  <Button onClick={() => handleReject(match.id)} variant="contained" color="secondary">Reject</Button>
                  <Button onClick={() => handleStopMatching(match.id)} variant="contained" color="warning">Stop Matching</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminPage;

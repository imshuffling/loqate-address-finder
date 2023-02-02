import React, { useState } from 'react';
import AddressSearch from 'react-loqate';
import 'react-loqate/dist/react-loqate.cjs.development.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const App = (props) => {
  const [addressLine, setAddressLine] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const addressSelected = (address) => {
    console.log(address);
    setAddressLine(address.Line1);
    setAddressLine2(address.Line2);
    setCity(address.City);
    setPostalCode(address.PostalCode);
  };

  const AddressSearchInput = (props) => {
    return (
      <TextField
        id='outlined-basic'
        label='Type your address or post code...'
        autocomplete='chrome-off'
        variant='outlined'
        fullWidth
        {...props}
      />
    );
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' gutterBottom={true}>
        Loqate Address Search
      </Typography>
      <AddressSearch
        locale='en-GB'
        apiKey='XT96-FX22-WY91-NJ79'
        onSelect={(address) => addressSelected(address)}
        countries={['GB', 'AUS', 'NZL', 'IRL']}
        components={{ Input: AddressSearchInput }}
        className='address-search-box'
        debounce={100}
      />
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='standard-basic'
          label='Address Line 1'
          variant='standard'
          value={addressLine}
        />
        <TextField
          id='standard-basic'
          label='Address Line 2'
          variant='standard'
          value={addressLine2}
        />
        <TextField
          id='standard-basic'
          label='City'
          variant='standard'
          value={city}
        />
        <TextField
          id='standard-basic'
          label='Post Code'
          variant='standard'
          value={postalCode}
        />
      </Box>
    </Container>
  );
};

export default App;

import React, { useState } from 'react';

import { TextField, Button } from '@mui/material';

interface SearchConfig {
  onSearch: (keyword: object) => void,
}

export default function SearchBox({ onSearch }: SearchConfig) {
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const onSearchKeyword = () => {
    onSearch({ searchKeyword });  
  }

  return (
    <div className="box-contents search-box">
      <TextField id="search" label="search" size="small" variant="outlined" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} className="inp-dft" />
      <Button onClick={onSearchKeyword} variant="outlined" >search</Button>
    </div>
  )
}

import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SortingProps {
    value: string;
    onChange: ((event: SelectChangeEvent<string>, child: React.ReactNode) => void) | undefined;
};

const Sorting: React.FC<SortingProps> = ({ value, onChange }) => (
    <div id="sorting">
        <FormControl fullWidth>
            <InputLabel id="sort-by-date-label">Sort by date</InputLabel>
            <Select
                labelId="sort-by-date-label"
                id="sort-by-date"
                value={value}
                label="Sort by date"
                onChange={onChange}
            >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
            </Select>
        </FormControl>
    </div>
);

export default Sorting;

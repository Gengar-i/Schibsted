import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxLabelProps {
    id: string;
    name: string;
    checked: boolean;
    handleChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void);
};

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ id, name, checked, handleChange }) => (
    <FormControlLabel control={
        <Checkbox
            id={id}
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    } label={name} />
);

export default CheckboxLabel;

import React from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxLabelProps extends Pick<CheckboxProps, "inputProps"> {
    id: string;
    name: string;
    checked: boolean;
    handleChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void);
};

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ id, name, checked, handleChange, inputProps }) => (
    <FormControlLabel control={
        <Checkbox
            id={id}
            checked={checked}
            onChange={handleChange}
            inputProps={inputProps}
        />
    } label={name} />
);

export default CheckboxLabel;

import React from "react";
import FormGroup from '@mui/material/FormGroup';
import CheckboxLabel from "./CheckboxLabel";
import { SourceProps } from "../structure/Main";
import "../styles/datasources.scss";

interface DataSourceProps {
    sources: Array<SourceProps>;
    handleChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void);
};
 
const DataSources: React.FC<DataSourceProps> = ({ sources, handleChange }) => (
    <div id="data-sources">
        <p id="data-source">Data Sources</p>
        <FormGroup>
            {sources.map(({ id, name, checked}) => (
                <CheckboxLabel
                    id={id}
                    checked={checked}
                    key={`${id}-source`}
                    name={name}
                    handleChange={handleChange}
                />
            ))}
        </FormGroup>
    </div>
);

export default DataSources;

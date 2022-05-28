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
        <p id="data-sources-title">Data Sources</p>
        <FormGroup>
            {sources.map(({ id, name, checked}) => (
                <CheckboxLabel
                    id={id}
                    checked={checked}
                    key={`${id}-source`}
                    name={name}
                    handleChange={handleChange}
                    inputProps={{
                        // @ts-ignore
                        "data-testid": `data-source-${id}`,
                        "aria-label": `controlled-${id}`
                    }}
                />
            ))}
        </FormGroup>
    </div>
);

export default DataSources;

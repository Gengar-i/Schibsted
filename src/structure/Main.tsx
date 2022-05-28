import React, { useEffect, useState } from "react";
import MuiSnackbar from "../components/MuiSnackbar";
import DataSources from "../components/DataSources";
import Sorting from "../components/Sorting";
import Card from "../components/Card";
import { SelectChangeEvent } from '@mui/material/Select';
import { loadCards } from "../actions/actions";
import "../styles/main.scss";

const SOURCES = ["sports", "fashion"];

export interface SourceProps {
    id: string;
    name: string;
    checked: boolean;
};

export interface ArticleProps {
    id: number;
    date: string;
    updatedDate: string;
    image: string;
    category: string;
    title: string;
    preamble: string;
};

const Main: React.FC = () => {
    const [data, setData] = useState<Array<ArticleProps>>([]);
    const [sources, setSources] = useState<Array<SourceProps>>([]);
    const [openAlert, setOpenAlert] = useState(false);
    const [sortDateValue, setSordDateValue] = useState<string>("");
    const sortDate = (data: Array<ArticleProps>, sortType: string) => {
        if (sortType === "asc") {
            const sortedData = data.sort((a, b) => new Date(a.updatedDate).getTime() - new Date(b.updatedDate).getTime());
            setData(sortedData);
        } else if (sortType === "desc") {
            const sortedData = data.sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime());
            setData(sortedData);
        }
    };
    const handleSort = (event: SelectChangeEvent) => {
        setSordDateValue(event.target.value as string);
        if (data.length) sortDate(data, event.target.value)
    };
    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenAlert(false);
    };
    const loadCardsHandler = (name: string, arr: Array<SourceProps>) => {
        loadCards(name).then((fetchedData) => {
            if (fetchedData) {
                if (fetchedData.length) {
                    setData([...data, ...fetchedData]);
                    setSources(arr);
                    sortDate([...data, ...fetchedData], sortDateValue);
                }
            } else setOpenAlert(true);
        });
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const arr: Array<SourceProps> = sources.map((source) => ({
            ...source,
            checked: event.target.id === source.id ? event.target.checked : source.checked
        }));
        if (arr.find(({ checked }) => checked)) {
            const sourceCategory = arr.find((source) => event.target.id === source.id);
            if (sourceCategory) {
                if (event.target.checked) {
                    loadCardsHandler(sourceCategory.name, arr);
                } else {
                    const sourceCategoryUpdate = sourceCategory.name === "sports" ? "sport" : sourceCategory.name;
                    const filteredData = data.filter((article) => sourceCategoryUpdate !== article.category)
                    setData(filteredData);
                    setSources(arr);
                }
            }
        }
    };
    //init
    useEffect(() => {
        const arr: Array<SourceProps> = SOURCES.map((source, index) => ({
            id: `${index}`,
            name: source,
            checked: index === 0
        }));
        arr.forEach((source) => {
            if (source.checked) {
                loadCards(source.name).then((fetchedData) => {
                    if (fetchedData) {
                        if (fetchedData.length) {
                            setData(fetchedData);
                            setSources(arr);
                        }
                    } else setOpenAlert(true);
                });
            }
        });
    }, []);
    return (
        <main>
            <MuiSnackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleCloseAlert} 
                label={"There was an error with request. Try again in a few minutes."}
            />
            <Sorting value={sortDateValue} onChange={handleSort} />
            <div id="main-container">
                <DataSources sources={sources} handleChange={handleChange} />
                <div id="card-container">
                    {data.map(({ id, date, image, category, title, preamble }) => (
                        <Card
                            key={`${id}`}
                            id={id}
                            date={date}
                            image={image}
                            category={category}
                            title={title}
                            preamble={preamble}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Main;

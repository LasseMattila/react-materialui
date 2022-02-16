import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./Header.css";
import categories from "../../data/category";


export const Header = ({ setCategory, category, setWord, word, LightMode }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main:LightMode?"#000" : "#fff",
            },
            type:LightMode?"light" : "dark"
        }
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

    return (
        <div className="header">
            <span className="title" >{word ? word : "Dictionary"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                <TextField
                    className="search"
                    label="Word"
                    helperText="Please type a word"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}    
                    />
                <TextField
                    className="select"
                    select
                    label="Select"
                    value={category}
                    onChange={(e) => handleChange(e.target.value)}
                    helperText="Please select language"
                >
            {categories.map((option) =>  (
            <MenuItem key={option.label} value={option.value}>{option.value}</MenuItem>
            ))}
            </TextField>
            </ThemeProvider>
            </div>
        </div>
    )
}

import { useState, useEffect} from "react";
import { API_URL } from "../config";
import axios from "axios";

export const useFetch = (msg: string = '') => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        axios.post(API_URL, {
            message: msg
        })
        .then((response) => {
            const value: any = response.data.responseId + response.data.data.message;
            setValue(value);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [msg])

    return { value };
}
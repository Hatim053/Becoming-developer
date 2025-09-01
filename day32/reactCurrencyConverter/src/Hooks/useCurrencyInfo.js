import React, { useState, useEffect } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((result) => setData(result[currency]))
    }, [currency])
    return data;
}

export default useCurrencyInfo;
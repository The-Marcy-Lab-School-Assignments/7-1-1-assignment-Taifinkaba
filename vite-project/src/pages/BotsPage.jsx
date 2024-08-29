import BotsList from "../components/BotsList";
import Filter from "../components/Filter";
import { useState } from 'react';

//more imports
import React from "react";
import { useNavigate } from "react-router-dom";

const BotPage = () => {
    // Decided not to use context here since only the two direct children of this
    // component use this state. I don't want to overpopulate the global context.
    const [botTypeFilter, setBotTypeFilter] = useState('');

    //Navigate
    const navigate=useNavigate();

    const handleNav=()=>{
        navigate('/')
    }

    return (
        <div>
            <h1>Robot Army:</h1>
            <Filter setBotTypeFilter={setBotTypeFilter} />
            <BotsList botTypeFilter={botTypeFilter} />
            <button onClick={handleNav}>Go Home</button>
        </div>
    )
}

export default BotPage
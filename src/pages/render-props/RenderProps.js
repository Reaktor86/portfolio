import React from 'react';
import DataProvider from "./DataProvider";

const RenderProps = () => {
    return (
        <div style={{ margin: '60px auto', width: '60%'}}>
            <p>работает</p>
            <DataProvider render={({ count }) => <h1>Render Props! { count } </h1>}>

            </DataProvider>
        </div>
    );
};

export default RenderProps;
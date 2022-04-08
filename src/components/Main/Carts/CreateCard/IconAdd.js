import React from 'react';

const IconAdd = ({onCreate}) => {
    return (
        <>

            <div className={"add"} onClick={onCreate}>
                <p>Нажмите "+" чтобы добавить новую категорию</p>
                <div className={"vertical"}></div>
                <div className={"horizontal"}></div>
            </div>
        </>

    );
};

export default IconAdd;
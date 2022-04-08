import React, { useState } from 'react';
import CreateCategory from '../CreateCategory/CreateCategory';
import Carts from "./Carts/Carts";

const Main = () => {
    const [isCreate, setCreate] = useState(false)

    const [ carts, setCarts ] = useState([
        {
            id: 1,
            title: "Темы для проповедей",
            bg_color: "#FFEF73",
            items: [
                {id: 1122312,
                    value: "Проповедь на 188 псалом",
                    link: "",
                }
            ]
        },{
            id: 1132,
            title: "Темы для проповедей",
            bg_color: "#EE6B9E",
            items: [
                {id: 131,
                    value: "Проповедь на 188 псалом",
                    link: "",
                },
                {id: 12432,
                    value: "Проповедь на Ев. Луки",
                    link: "",
                },
                {id: 1324,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 1312,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 1543,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 1763,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 1863,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 1453,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 14233,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 183,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 18093,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                }
            ]
        },{
            id: 14322,
            title: "Темы для проповедей",
            bg_color: "#64A8D1",
            items: [
                {id: 11,
                    value: "Проповедь на 188 псалом",
                    link: "",
                },
                {id: 12,
                    value: "Проповедь на Ев. Луки",
                    link: "",
                },
                {id: 13,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 14,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 15,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 16,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 17,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 18,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 19,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 20,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                },
                {id: 21,
                    value: "Проповедь на Ев. Матфея",
                    link: "",
                }
            ]
        }
    ])

    console.log(carts)
    const createCategory = (category) => {
        setCarts(state => {
            return [
                ...state,
                category
            ]
        })
        setCreate(!isCreate)
    }

    const onCreate = () => {
        setCreate(true)
    }

    return (
        <div className={"main"}>
            {
            !isCreate ?
                <Carts onCreate={onCreate} carts={carts}/>
                :
                <CreateCategory createCategory={createCategory}/>
            }
            
        </div>
    );
};

export default Main;
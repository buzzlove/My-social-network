import React, {useState} from "react";
import style from "./pagination.module.css";

const Pagination = ({totalUsersCount,pageSize,onPageChange,currentPage}) => {

    let partitionSize = 10;
    let [currentPartition,setPartition] = useState (1)
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i);}
    let prevNumber = (currentPartition-1)*partitionSize+1;
    let nextNumber = partitionSize*currentPartition;

    return (
        <div>
            <span>
                {currentPartition > 1 && <button onClick={()=>{setPartition(currentPartition-1)}}>Назад</button>}
            </span>
            <span>
            {pages.filter(page => (prevNumber <= page && page <= nextNumber)).map(page =>{
                return <button onClick={() => {onPageChange(page);}}
                className={currentPage === page && style.selectedPage} key={page}>
                {page}
                </button>})}
            </span>
            <span>
                {(currentPartition < pagesCount/10) && <button onClick={()=>{setPartition(currentPartition+1)}}>Вперед</button>}
            </span>
            <span>...{pagesCount}</span>
        </div>
    )
}

export default Pagination;
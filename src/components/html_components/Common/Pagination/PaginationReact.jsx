import React from "react";
import style from "./pagination.module.css";
import ReactPaginate from 'react-paginate';

const PaginationReact = ({totalUsersCount, pageSize, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    return (
    <div>
        <ReactPaginate
            previousLabel={'<-'}
            nextLabel={'->'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pagesCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={style.pagination}
            subContainerClassName={style.page}
            activeClassName={style.active}
        />
    </div>)
}

export default PaginationReact;
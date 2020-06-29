import React from "react";
import Preloader from "../Common/Preloader/preloader";
import User from "./User";
import PaginationReact from "../Common/Pagination/PaginationReact";

const Users = ({isFetching, inProgress, follow, onPageChange, currentPage, pageSize, totalUsersCount, users}) => {
    return (
        <div>
            <div>
                <PaginationReact
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    onPageChange={onPageChange}/>
            </div>
            {isFetching ? <Preloader/>
                :
                users.map(users =>
                          <User
                              key={users.id}
                              users={users}
                              isFetching={isFetching}
                              inProgress={inProgress}
                              follow={follow}
                              currentPage={currentPage}
                              pageSize={pageSize}/>)

            }
        </div>
    )
}

export default Users;
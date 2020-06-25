import loading from "../../Users/img/loading.svg";
import style from "../../Users/Users.module.css";
import React from "react";

let Preloader = () => {
    return <div> <img src={loading} alt='Загрузка' className={style.loading}/></div>
}

export default Preloader;
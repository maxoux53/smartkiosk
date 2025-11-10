import type { JSX } from "react";

function Event({name}: {name: string},/* {imgPath}: {imgPath: string}*/): JSX.Element {
    return (
        <div onClick={e => {console.log("test")}}>
            <img src="../../public/vite.svg" alt="" />
            <p>{name}</p>        
        </div>
    );
}

export default Event;
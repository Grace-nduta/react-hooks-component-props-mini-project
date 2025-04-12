import React from "react";

function Article ({title,date="January 1, 1970",preview}){
    return (
        <article>
            <h3>title:{title}</h3>
            <small>date:{date}</small>
            <p>preview:{preview}</p>
        </article>
    )
}

export default Article;
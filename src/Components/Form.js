import React from "react";

const Form = ({submit, handleChange, input}) => {
    return(
        <div className="form-input">
            <h3 className="subtitle">Search your favorite heroes from DC or Marvel</h3>
            <div className="search-box">
            <form onSubmit={submit}>
                <input onChange={handleChange} value={input} className="input-box"></input>
                <button type="submit" className="submit-btn">Search</button>
            </form>
        </div>
        </div>
        
    )
}
export default Form;
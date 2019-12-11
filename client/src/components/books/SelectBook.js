import React from 'react'

export const SelectBook = ({book}) => {
    return (
        <div className="card">
            <div className="container">
                {/* <h4><b>{book.name}</b></h4>
                <p>{book.author}</p>
                <h5>{book.description}</h5> */}
                {/* <div style="width:400px;"> */}
    <div style={{"float": "left", "width": "130px"}}> 
        <form>
            <input type="submit" name = "" value="OK" />
        </form>
    </div>
    <div style={{"float": "right", "width": "225px"}}> 
        <form>
            <input type="submit" name = "" value="Cancel" />
        </form>
    </div>
{/* </div> */}
            </div>
        </div>
    )
}

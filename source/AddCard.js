import React, { Component } from 'react';
import './AddCard.css';

class AddCard extends Component{
    render () {
        return (
            <div className="AddCard">
                <div className="AddCardTitle">
                    <span>Add a book</span>
                    <span className="CloseAddCard" onClick={() => this.props.closeAddCard()}>X</span>
                </div>
                <form>
                    <input className="AddCardField" type="text" placeholder="Book Title.." />
                    <input className="AddCardButton" type="submit" value="Add" onClick={(e) => e.preventDefault()}/>
                </form>
            </div>
        )
    }
}

export default AddCard;
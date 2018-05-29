import React, { Component } from 'react';
import './AddCard.css';

class AddCard extends Component{

    addBook(e) {
        e.preventDefault();
        this.props.addBook();
    }

    render () {
        return (
            <div className="AddCard">
                <div className="AddCardTitle">
                    <span>Add a book</span>
                    <span className="CloseAddCard" onClick={() => this.props.closeAddCard()}>X</span>
                </div>
                <form>
                    <input className="AddCardField" type="text" placeholder="Book Title.." value={this.props.title} onChange={(event) => this.props.textChange(event.target.value)}/>
                    <input className="AddCardButton" type="submit" value="Add" onClick={(e) => this.addBook(e)}/>
                </form>
            </div>
        )
    }
}

export default AddCard;
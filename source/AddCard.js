import React, { Component } from 'react';
import './AddCard.css';

class AddCard extends Component{

    addBook(e) {
        e.preventDefault();
        this.props.addBook();
    }

    render () {
        return (
            <div class="modal fade" id="addCard" tabindex="-1" role="dialog" aria-labelledby="addCard" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header AddCardTitle">
                    <h5 class="modal-title" id="exampleModalLabel">Add a book</h5>
                    <button type="button" class="close CloseButton" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="form-group">
                        <input type="text" class="form-control" id="book-title" placeholder="Book title.." value={this.props.title} onChange={(event) => this.props.textChange(event.target.value)} />
                        </div>
                        <div class="form-group">
                        <input type="text" class="form-control" id="author" placeholder="Author.." value={this.props.author} onChange={e => this.props.authorTextChange(e.target.value)}/>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary AddCardButton"  data-dismiss="modal" onClick={(e) => this.addBook(e)}>Add</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default AddCard;
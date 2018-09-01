module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
    }

    _createClass(Search, [{
        key: 'search',
        value: function search(e) {
            e.preventDefault();
            this.props.search();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'Search' },
                _react2.default.createElement(
                    'form',
                    { 'class': 'form-inline justify-content-center SearchForm' },
                    _react2.default.createElement('input', { 'class': 'form-control mr-2 SearchInput', type: 'search', placeholder: 'Find your favorite book..', 'aria-label': 'Search', value: this.props.searchStr, onChange: function onChange(e) {
                            return _this2.props.searchInput(e.target.value);
                        } }),
                    _react2.default.createElement(
                        'button',
                        { 'class': 'btn btn-outline-success SearchButton', onClick: function onClick(e) {
                                return _this2.search(e);
                            } },
                        _react2.default.createElement('i', { 'class': 'fa fa-search SearchIcon' })
                    )
                )
            );
        }
    }]);

    return Search;
}(_react.Component);

exports.default = Search;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("atob");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.database = undefined;

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bookSchema = _mongoose2.default.Schema({
    title: String,
    author: String,
    votes: Number
});

var userSchema = _mongoose2.default.Schema({
    id: Number,
    email: String,
    password: String,
    iat: Number
});

var favoriteSchema = _mongoose2.default.Schema({
    email: String,
    favorites: [String]
});

bookSchema.index({ title: 'text', author: 'text' });

var Book = _mongoose2.default.model('Book', bookSchema);
var getBooks = function getBooks(errorCallback, callback) {
    Book.find({}, null, { sort: { votes: -1, _id: -1 } }, function (err, books) {
        if (err) {
            errorCallback(err);
            return;
        }

        callback(books);
    });
};

var addBook = function addBook(title, author, errorCallback, callback) {
    var newBook = new Book({ title: title, author: author, votes: 0 });
    newBook.save(function (err, book) {
        if (err) {
            errorCallback(err);
            return;
        }

        callback(book);
    });
};

var voteBook = function voteBook(id, upvote, errorCallback, callback) {
    Book.findById(id, function (err, book) {
        if (err) {
            errorCallback(err);
            return;
        }

        var votes = upvote ? book.votes + 1 : book.votes - 1;
        book.set({ votes: votes });

        book.save(function (err, updatedBook) {
            if (err) {
                errorCallback(err);
                return;
            }

            callback(updatedBook);
        });
    });
};

var search = function search(str, errorCallback, callback) {
    Book.find({ $text: { $search: str } }, null, { sort: { votes: -1, _id: -1 } }, function (err, books) {
        if (err) {
            errorCallback(err);
            return;
        }

        callback(books);
    });
};

var User = _mongoose2.default.model('User', userSchema);

var getUser = function getUser(id, iat, errorCallback, callback) {
    User.findOne({ _id: _mongoose2.default.Types.ObjectId(id), iat: iat }, function (error, user) {
        if (error) {
            errorCallback(error);
            return;
        }

        callback(user);
    });
};

var getUserByEmail = function getUserByEmail(email, errorCallback, callback) {
    User.findOne({ email: email }, function (error, user) {
        if (error) {
            errorCallback(error);
            return;
        }

        callback(user);
    });
};

var addUser = function addUser(email, password, iat, errorCallback, callback) {
    var newUser = new User({ email: email, password: password, iat: iat });
    newUser.save(function (err, user) {
        if (err) {
            errorCallback(err);
            return;
        }

        callback(user);
    });
};

var updateUserToken = function updateUserToken(email, iat, errorCallback, callback) {
    User.findOne({ email: email }, function (error, user) {
        if (error) {
            errorCallback(error);
            return;
        }

        user.set({ iat: iat });

        user.save(function (err, updatedUser) {
            if (err) {
                errorCallback(err);
                return;
            }

            callback(updatedUser);
        });
    });
};

var Favorite = _mongoose2.default.model('Favorite', favoriteSchema);

var addFavorite = function addFavorite(email, bookId, addOrRemove, errorCallback, callback) {
    Favorite.findOne({ email: email }, function (error, favorite) {
        if (error) {
            errorCallback(error);
            return;
        }

        if (favorite) {
            var favorites = favorite.favorites;

            if (addOrRemove === 'a') {
                favorites.push(bookId);
            } else if (addOrRemove === 'r') {
                var index = favorites.indexOf(bookId);
                if (index > -1) {
                    favorites.splice(index, 1);
                }
            }

            favorite.set({ favorites: favorites });

            favorite.save(function (err, data) {
                if (err) {
                    errorCallback(err);
                    return;
                }

                callback(data);
            });
        } else {
            if (addOrRemove === 'r') {
                errorCallback('Can remove favorite');
                return;
            }

            var _favorite = new Favorite({ email: email, favorites: [bookId] });

            _favorite.save(function (err, data) {
                if (err) {
                    errorCallback(err);
                    return;
                }

                callback(data);
            });
        }
    });
};

var getFavorites = function getFavorites(email, errorCallback, callback) {
    Favorite.findOne({ email: email }, function (error, favorites) {
        if (error) {
            errorCallback(error);
            return;
        }

        callback(favorites);
    });
};

var database = exports.database = {
    getBooks: getBooks,
    addBook: addBook,
    voteBook: voteBook,
    search: search,
    getUser: getUser,
    getUserByEmail: getUserByEmail,
    addUser: addUser,
    updateUserToken: updateUserToken,
    addFavorite: addFavorite,
    getFavorites: getFavorites
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = exports.template = function template(title, body, initialData) {
    return "<!doctype html>\n        <html>\n            <head>\n                <title>" + title + "</title>\n                <link rel=\"stylesheet\" href=\"bootstrap-4.1.1-dist/css/bootstrap.min.css\" >\n                <link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n            </head>\n            <body>\n                <style>\n                    #root {\n                        display: none;\n                    }\n                </style>\n                <div id='root'>" + body + "</div>\n            </body>\n            <script>window._initialData=" + JSON.stringify(initialData) + ";</script>\n            <script src=\"jquery/jquery-3.3.1.slim.min.js\"></script>\n            <script src=\"bootstrap-4.1.1-dist/js/bootstrap.min.js\" ></script>\n            <script src='app.js'></script>\n            <script>\n                document.getElementById('root').style.display = \"block\";\n            </script>\n        </html>";
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".listItemStyle {\r\n    margin: 2px;\r\n}", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyBooks = function (_Component) {
    _inherits(MyBooks, _Component);

    function MyBooks() {
        _classCallCheck(this, MyBooks);

        return _possibleConstructorReturn(this, (MyBooks.__proto__ || Object.getPrototypeOf(MyBooks)).apply(this, arguments));
    }

    _createClass(MyBooks, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: { marginTop: 100 } },
                    _react2.default.createElement(
                        'h2',
                        { className: 'heading' },
                        'My Favorite Books'
                    ),
                    this.props.books.length === 0 ? _react2.default.createElement(
                        'span',
                        null,
                        'No favorite books'
                    ) : _react2.default.createElement(
                        'ul',
                        { 'class': 'list-group', style: { margin: 20 } },
                        this.props.books.map(function (_ref) {
                            var title = _ref.title,
                                votes = _ref.votes,
                                author = _ref.author;
                            return _react2.default.createElement(
                                'li',
                                { 'class': 'list-group-item d-flex justify-content-between align-items-center listItemStyle' },
                                _react2.default.createElement(
                                    'div',
                                    { style: { textAlign: 'left' } },
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        title
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'By: ',
                                        author
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'span',
                                        { 'class': 'badge badge-primary badge-pill' },
                                        votes
                                    ),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement(
                                        'small',
                                        null,
                                        'votes'
                                    )
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return MyBooks;
}(_react.Component);

exports.default = MyBooks;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".AddCardButton {\r\n    margin: 0 auto;\r\n    width: 250px;\r\n}\r\n\r\n.AddCardButton:focus {\r\n    outline: none;\r\n}\r\n\r\n.AddCardButton:hover {\r\n    background: orange;\r\n}\r\n\r\n.AddCardTitle {\r\n    font-size: 30px;\r\n    font-family: Helvetica sans-serif;\r\n    background: #455A64;\r\n    color: #fff;\r\n}\r\n\r\n.CloseButton {\r\n    color: #fff;\r\n}\r\n\r\n.CloseButton:hover {\r\n    color: #fff;\r\n}\r\n\r\n.modal.fade .fromBelow {\r\n    transfrom: translate(0, 100%) !important;\r\n    -webkit-transform: translate(0, 100%) !important;\r\n}\r\n\r\n.modalStyle {\r\n    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\r\n    border: none !important;\r\n}\r\n\r\n.modal.show .fromBelow {\r\n    transfrom: translate(0, 0) !important;\r\n    -webkit-transform: translate(0, 0) !important;\r\n}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCard = function (_Component) {
    _inherits(AddCard, _Component);

    function AddCard() {
        _classCallCheck(this, AddCard);

        return _possibleConstructorReturn(this, (AddCard.__proto__ || Object.getPrototypeOf(AddCard)).apply(this, arguments));
    }

    _createClass(AddCard, [{
        key: 'addBook',
        value: function addBook(e) {
            e.preventDefault();
            this.props.addBook();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { 'class': 'modal fade', id: 'addCard', tabindex: '-1', role: 'dialog', 'aria-labelledby': 'addCard', 'aria-hidden': 'true' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'modal-dialog modal-dialog-centered fromBelow', role: 'document' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'modal-content modalStyle' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'modal-header AddCardTitle' },
                            _react2.default.createElement(
                                'h5',
                                { 'class': 'modal-title', id: 'exampleModalLabel' },
                                'Add a book'
                            ),
                            _react2.default.createElement(
                                'button',
                                { type: 'button', 'class': 'close CloseButton', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                                _react2.default.createElement(
                                    'span',
                                    { 'aria-hidden': 'true' },
                                    '\xD7'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'modal-body' },
                            _react2.default.createElement(
                                'form',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'form-group' },
                                    _react2.default.createElement('input', { type: 'text', 'class': 'form-control', id: 'book-title', placeholder: 'Book title..', value: this.props.title, onChange: function onChange(event) {
                                            return _this2.props.textChange(event.target.value);
                                        } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { 'class': 'form-group' },
                                    _react2.default.createElement('input', { type: 'text', 'class': 'form-control', id: 'author', placeholder: 'Author..', value: this.props.author, onChange: function onChange(e) {
                                            return _this2.props.authorTextChange(e.target.value);
                                        } })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'modal-footer' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button', 'class': 'btn btn-primary AddCardButton', 'data-dismiss': 'modal', onClick: function onClick(e) {
                                        return _this2.addBook(e);
                                    } },
                                'Add'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddCard;
}(_react.Component);

exports.default = AddCard;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".card {\r\n\twidth: 240px;\r\n\theight: 280px;\r\n\tdisplay: inline-block;\r\n\tborder: none;\r\n\tmargin: 10px;\r\n\tpadding: 10px;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tbackground: #FFF;\r\n\tborder: 1px solid #dfdfdf;\r\n}\r\n\r\n.card-title {\r\n\tfont-size: 25px;\r\n\tfont-family: Georgia, 'Times New Roman', Times, sans-serif;\r\n\tmax-height: 93px;\r\n\toverflow: hidden;\r\n}\r\n\r\n.card-button {\r\n\tmargin: 7px;\r\n\tfont-size: 0.8rem;\r\n\tpadding: 1px 7px 2px;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n.button-left {\r\n\tleft: 20px;\r\n}\r\n\r\n.button-right {\r\n\tright: 20px;\r\n}\r\n\r\n.card-button:hover {\r\n\tbackground-color: orange;\r\n\tcolor: blue;\r\n}\r\n\r\n.card-button:focus {\r\n\toutline: none;\r\n}\r\n\r\n.card-votes {\r\n\tborder: 1px solid #dedede;\r\n\theight: 50px;\r\n\twidth: 40px;\r\n\tmargin: 5px auto;\r\n\tborder-radius: 4px;\r\n\tbackground-color: orange;\r\n\tcolor: blue;\r\n\tfont-size: 30px;\r\n}\r\n\r\n.favorite {\r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.voteButton {\r\n\tfont-size: 20px;\r\n\tmargin: 2px;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
	_inherits(Card, _Component);

	function Card() {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	}

	_createClass(Card, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ 'class': 'card', style: { width: '14rem' } },
				_react2.default.createElement(
					'div',
					{ 'class': 'card-body' },
					_react2.default.createElement(
						'div',
						{ style: { height: 135 } },
						_react2.default.createElement(
							'h5',
							{ 'class': 'card-title' },
							this.props.title
						),
						_react2.default.createElement(
							'p',
							{ 'class': 'card-text' },
							'By: ',
							this.props.author
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'card-votes' },
						this.props.votes
					),
					_react2.default.createElement(
						'button',
						{ 'class': 'btn btn-primary card-button', onClick: function onClick() {
								return _this2.props.upvote();
							} },
						_react2.default.createElement('i', { 'class': 'fa fa-thumbs-up voteButton' })
					),
					_react2.default.createElement('i', { 'class': 'fa fa-heart favorite', style: { color: this.props.isFavorite ? 'red' : 'gray' }, onClick: function onClick() {
							return _this2.props.favorite();
						} }),
					_react2.default.createElement(
						'button',
						{ 'class': 'btn btn-primary card-button', onClick: function onClick() {
								return _this2.props.downvote();
							} },
						_react2.default.createElement('i', { 'class': 'fa fa-thumbs-down voteButton' })
					)
				)
			);
		}
	}]);

	return Card;
}(_react.Component);

exports.default = Card;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(19);

var _Card2 = _interopRequireDefault(_Card);

var _AddCard = __webpack_require__(17);

var _AddCard2 = _interopRequireDefault(_AddCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: { marginTop: 100 } },
                    _react2.default.createElement(
                        'h2',
                        { className: 'heading' },
                        'Most Upvoted books'
                    ),
                    this.props.books.map(function (book) {
                        return _react2.default.createElement(_Card2.default, _extends({}, book, {
                            upvote: function upvote() {
                                return _this2.props.changeVotes(book, true);
                            },
                            downvote: function downvote() {
                                return _this2.props.changeVotes(book, false);
                            },
                            favorite: function favorite() {
                                return _this2.props.favorite(book);
                            } }));
                    })
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'AddButton', 'data-toggle': 'modal', 'data-target': '#addCard' },
                    '+'
                ),
                _react2.default.createElement(_AddCard2.default, { title: this.props.newTitle, addBook: this.props.addBook, textChange: function textChange(value) {
                        return _this2.props.textChange(value);
                    }, author: this.props.newAuthor, authorTextChange: function authorTextChange(value) {
                        return _this2.props.authorTextChange(value);
                    } })
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.service = undefined;

__webpack_require__(21);

var addBook = function addBook(book) {
    return fetch('/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(book)
    });
};

var upvote = function upvote(id) {
    return fetch('/upvote/' + id, {
        credentials: 'same-origin'
    });
};

var downvote = function downvote(id) {
    return fetch('/downvote/' + id, {
        credentials: 'same-origin'
    });
};

var search = function search(str) {
    return str.trim() !== '' ? fetch('/search/' + str) : fetch('/books');
};

var login = function login(user) {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(user)
    });
};

var signup = function signup(user) {
    return fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(user)
    });
};

var logout = function logout(email) {
    return fetch('/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({ email: email })
    });
};

var validateLogin = function validateLogin() {
    return fetch('/validateLogin', {
        credentials: 'same-origin'
    });
};

var addFavorite = function addFavorite(email, bookId, addOrRemove) {
    return fetch('/addFavorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({ email: email, bookId: bookId, addOrRemove: addOrRemove })
    });
};

var getFavorites = function getFavorites(email) {
    return fetch('/getFavorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({ email: email })
    });
};

var service = exports.service = {
    addBook: addBook,
    upvote: upvote,
    downvote: downvote,
    search: search,
    login: login,
    signup: signup,
    logout: logout,
    validateLogin: validateLogin,
    addFavorite: addFavorite,
    getFavorites: getFavorites
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".loginForm {\r\n    position: fixed;\r\n    z-index: 1200;\r\n    top: 60px;\r\n    right: 105px;\r\n    padding: 10px;\r\n    background: white;\r\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n    min-width: 280px;\r\n}", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'login',
        value: function login(e) {
            e.preventDefault();
            if (this.props.signup) {
                this.props.doSignup();
            } else {
                this.props.doLogin();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'form',
                { onClick: function onClick(e) {
                        return e.stopPropagation();
                    }, className: 'loginForm' },
                _react2.default.createElement(
                    'div',
                    { style: { padding: 10 } },
                    this.props.signup ? 'Sign up for FavBooks' : 'Login to FavBooks'
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'form-group' },
                    _react2.default.createElement('input', { type: 'email', 'class': 'form-control', 'aria-describedby': 'emailHelp', placeholder: 'Enter email', value: this.props.email, onChange: function onChange(e) {
                            return _this2.props.changeEmail(e.target.value);
                        } }),
                    this.props.signup ? _react2.default.createElement(
                        'small',
                        { id: 'emailHelp', 'class': 'form-text text-muted' },
                        'We\'ll never share your email with anyone else.'
                    ) : ''
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'form-group' },
                    _react2.default.createElement('input', { type: 'password', 'class': 'form-control', placeholder: 'Enter Password', value: this.props.password, onChange: function onChange(e) {
                            return _this2.props.changePassword(e.target.value);
                        } })
                ),
                this.props.signup ? _react2.default.createElement(
                    'div',
                    { 'class': 'form-group' },
                    _react2.default.createElement('input', { type: 'password', 'class': 'form-control', placeholder: 'Confirm Password', value: this.props.confirmPassword, onChange: function onChange(e) {
                            return _this2.props.changeConfirmPassword(e.target.value);
                        } })
                ) : '',
                _react2.default.createElement(
                    'button',
                    { type: 'submit', 'class': 'btn btn-primary', onClick: function onClick(e) {
                            return _this2.login(e);
                        } },
                    this.props.signup ? 'Sign Up' : 'Login'
                ),
                _react2.default.createElement(
                    'div',
                    { style: { marginTop: 15, fontSize: 14 } },
                    _react2.default.createElement(
                        'a',
                        { href: 'Javascript:void(0);', onClick: function onClick() {
                                return _this2.props.togglePanel();
                            } },
                        this.props.signup ? 'Login' : 'Sign up'
                    )
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".navstyle {\r\n    background: #455A64 !important;\r\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.navitemstyle {\r\n    color: #fff !important;\r\n}\r\n\r\n.navbrand {\r\n    font-size: 1.5rem !important;\r\n    font-weight: bold;\r\n}\r\n\r\n.logoutOptions {\r\n    position: absolute;\r\n    top: 33px;\r\n    right: -5px;\r\n    width: 100px;\r\n    background: #dedede;\r\n    list-style: none;\r\n    padding: 0 5px;\r\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".SearchInput {\r\n    border-top: 0px;\r\n    border-right: 0px;\r\n    border-left: 0px;\r\n    border-radius: 0px;\r\n    font-size: 20px;\r\n    padding-bottom: 0px;\r\n    padding-left: 1px;\r\n    margin-left: 7px;\r\n    border-bottom: 2px solid #ced4da;\r\n    font-family: 'Roboto', sans-serif;\r\n    background: transparent;\r\n    width: 80% !important;\r\n    color: #fff !important;\r\n}\r\n\r\n.SearchInput:focus {\r\n    box-shadow: none;\r\n    border-color: #ced4da;\r\n    background: transparent;\r\n    color: #fff !important;\r\n}\r\n\r\n.SearchInput:placeholder {\r\n    color: #dedede;\r\n}\r\n\r\n.SearchIcon {\r\n    font-size: 20px;\r\n    color: orange;\r\n}\r\n\r\n.SearchForm {\r\n    padding-right: 30px;\r\n}\r\n\r\n.SearchButton {\r\n    border-color: #fff;\r\n}\r\n\r\n.SearchButton:hover {\r\n    background: #fff;\r\n}\r\n\r\n.SearchButton:focus {\r\n    box-shadow: none;\r\n}", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Search = __webpack_require__(4);

var _Search2 = _interopRequireDefault(_Search);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuLink = function MenuLink(_ref) {
    var label = _ref.label,
        to = _ref.to,
        activeOnlyWhenExact = _ref.activeOnlyWhenExact;
    return _react2.default.createElement(_reactRouterDom.Route, {
        path: to,
        exact: activeOnlyWhenExact,
        children: function children(_ref2) {
            var match = _ref2.match;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: to, 'class': 'nav-link navitemstyle', href: 'Javascript:void(0);' },
                    label
                ),
                match ? _react2.default.createElement('div', { style: {
                        background: '#FFF',
                        height: 3,
                        marginTop: -5,
                        width: to === '/' ? 48 : 78,
                        marginLeft: 6 }
                }) : ''
            );
        }
    });
};

var Nav = function (_Component) {
    _inherits(Nav, _Component);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: 'login',
        value: function login(e) {
            e.preventDefault();
            e.stopPropagation();
            this.props.login();
        }
    }, {
        key: 'signup',
        value: function signup(e) {
            e.preventDefault();
            e.stopPropagation();
            this.props.signup();
        }
    }, {
        key: 'logout',
        value: function logout(e) {
            e.preventDefault();
            this.setState({ showOptions: false });
            this.props.logout();
        }
    }, {
        key: 'toggleOptions',
        value: function toggleOptions(e) {
            e.stopPropagation();
            this.props.toggleOptions();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'nav',
                { 'class': 'navbar navbar-expand-lg navbar-dark bg-light fixed-top navstyle' },
                _react2.default.createElement(
                    'a',
                    { 'class': 'navbar-brand col-2 navitemstyle navbrand', href: '#' },
                    'FavBooks'
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'col-6' },
                    _react2.default.createElement(_Search2.default, { search: this.props.search, searchStr: this.props.searchStr, searchInput: function searchInput(value) {
                            return _this2.props.searchInput(value);
                        } })
                ),
                _react2.default.createElement(
                    'button',
                    { 'class': 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                    _react2.default.createElement('span', { 'class': 'navbar-toggler-icon' })
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'collapse navbar-collapse', id: 'navbarSupportedContent' },
                    _react2.default.createElement(
                        'ul',
                        { 'class': 'navbar-nav mr-auto' },
                        _react2.default.createElement(
                            'li',
                            { 'class': 'nav-item ml-1 ml-xl-3' },
                            _react2.default.createElement(MenuLink, { to: '/', label: 'Home', activeOnlyWhenExact: true })
                        ),
                        _react2.default.createElement(
                            'li',
                            { 'class': 'nav-item ml-1 ml-xl-3' },
                            _react2.default.createElement(MenuLink, { to: '/mybooks', label: 'My Books' })
                        ),
                        this.props.loggedInUser ? _react2.default.createElement(
                            'li',
                            { 'class': 'nav-item ml-1 ml-xl-3', style: { position: 'relative' } },
                            _react2.default.createElement(
                                'span',
                                { 'class': 'nav-link navitemstyle', href: 'Javascript:void(0);', style: { pointerEvents: 'none' } },
                                this.props.loggedInUser
                            ),
                            _react2.default.createElement('i', { 'class': 'fa fa-caret-down', style: { position: 'absolute', top: 10, right: -5, cursor: 'pointer', color: '#fff' }, onClick: function onClick(e) {
                                    return _this2.toggleOptions(e);
                                } }),
                            this.props.showOptions ? _react2.default.createElement(
                                'ul',
                                { className: 'logoutOptions' },
                                _react2.default.createElement(
                                    'li',
                                    { style: { padding: 5, cursor: 'pointer', userSelect: 'none' }, onClick: function onClick(e) {
                                            return _this2.logout(e);
                                        } },
                                    'Logout'
                                )
                            ) : ''
                        ) : '',
                        !this.props.loggedInUser ? _react2.default.createElement(
                            'li',
                            { 'class': 'nav-item ml-1 ml-xl-3' },
                            _react2.default.createElement(
                                'a',
                                { 'class': 'nav-link navitemstyle', href: 'Javascript:void(0);', onClick: function onClick(e) {
                                        return _this2.login(e);
                                    } },
                                'Login'
                            )
                        ) : '',
                        !this.props.loggedInUser ? _react2.default.createElement(
                            'li',
                            { 'class': 'nav-item ml-1 ml-xl-3' },
                            _react2.default.createElement(
                                'a',
                                { 'class': 'nav-link btn-primary', style: { color: 'white' }, href: 'Javascript:void(0);', onClick: function onClick(e) {
                                        return _this2.signup(e);
                                    } },
                                'Sign up'
                            )
                        ) : ''
                    )
                )
            );
        }
    }]);

    return Nav;
}(_react.Component);

exports.default = Nav;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".App {\r\n  text-align: center;\r\n  padding: 10px;\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\nbody {\r\n  background: #f7f7f7;\r\n}\r\n\r\n.AppTitle {\r\n  font-size: 55px;\r\n  font-family: helvetica sans-serif;\r\n}\r\n\r\n.AddButton {\r\n  border-radius: 50%;\r\n  background: rgb(245, 0, 87);\r\n  color: white;\r\n  width: 56px;\r\n  height: 56px;\r\n  position: fixed;\r\n  bottom: 40px;\r\n  right: 50px;\r\n  font-size: 37px;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.AddButton:hover {\r\n  background-color: #ab003c;\r\n}\r\n\r\n.ShowAddCard {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.heading {\r\n  color: rgba(0, 0, 0, 0.54);\r\n  margin: 32px 0 24px;\r\n  font-size: 2.125rem;\r\n  font-weight: 400;\r\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\r\n  line-height: 1.20588em;\r\n}", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(28);

var _Nav = __webpack_require__(27);

var _Nav2 = _interopRequireDefault(_Nav);

var _Login = __webpack_require__(24);

var _Login2 = _interopRequireDefault(_Login);

var _Search = __webpack_require__(4);

var _Search2 = _interopRequireDefault(_Search);

var _service = __webpack_require__(22);

var _reactRouterDom = __webpack_require__(2);

var _Home = __webpack_require__(20);

var _Home2 = _interopRequireDefault(_Home);

var _MyBooks = __webpack_require__(15);

var _MyBooks2 = _interopRequireDefault(_MyBooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    var books = void 0;
    if (props.books) {
      books = props.books;
    } else {
      books = window._initialData;
      delete window._initialData;
    }

    _this.state = {
      books: books,
      newTitle: '',
      showLogin: false,
      showSignup: false,
      searchStr: '',
      newAuthor: '',
      email: '',
      password: '',
      confirmPassword: '',
      loggedInUser: null,
      showOptions: false
    };

    _this.addBook = _this.addBook.bind(_this);
    _this.showLogin = _this.showLogin.bind(_this);
    _this.showSignup = _this.showSignup.bind(_this);
    _this.togglePanel = _this.togglePanel.bind(_this);
    _this.search = _this.search.bind(_this);
    _this.seachInput = _this.searchInput.bind(_this);
    _this.hideLogin = _this.hideLogin.bind(_this);
    _this.authorTextChange = _this.authorTextChange.bind(_this);
    _this.doLogin = _this.doLogin.bind(_this);
    _this.doSignup = _this.doSignup.bind(_this);
    _this.changeEmail = _this.changeEmail.bind(_this);
    _this.changePassword = _this.changePassword.bind(_this);
    _this.changeConfirmPassword = _this.changeConfirmPassword.bind(_this);
    _this.logout = _this.logout.bind(_this);
    _this.toggleOptions = _this.toggleOptions.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'getFavorites',
    value: function getFavorites(loggedInUser) {
      var _this2 = this;

      if (loggedInUser === null) {
        return;
      }

      _service.service.getFavorites(loggedInUser).then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data && data.favorites && data.favorites.length > 0) {
          var favoriteBooks = data.favorites;
          var books = _this2.state.books.map(function (book) {
            return favoriteBooks.indexOf(book._id) >= 0 ? Object.assign({}, book, { isFavorite: true }) : book;
          });
          _this2.setState({ books: books });
        }
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _service.service.validateLogin().then(function (res) {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          _this3.setState({ loggedInUser: null });
          throw new Error('Unauthorized');
        } else {
          throw new Error('Server error');
        }
      }).then(function (_ref) {
        var message = _ref.message,
            email = _ref.email;

        if (message !== 'ok') {
          _this3.setState({ loggedInUser: null });
        } else {
          var loggedInUser = email;
          _this3.setState({ loggedInUser: loggedInUser }, function () {
            _this3.getFavorites(loggedInUser);
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'changeVotes',
    value: function changeVotes(book, incr) {
      var _this4 = this;

      if (incr) {
        _service.service.upvote(book._id).then(function (res) {
          if (res.status === 200) {
            var books = _this4.state.books.map(function (item) {
              if (item._id === book._id) {
                return Object.assign({}, book, { votes: book.votes + 1 });
              } else {
                return item;
              }
            });

            _this4.setState({ books: books });
          } else {
            _this4.setState({ showLogin: true, email: '', password: '', confirmPassword: '', loggedInUser: null });
          }
        });
      } else {
        _service.service.downvote(book._id).then(function (res) {
          if (res.status === 200) {
            var books = _this4.state.books.map(function (item) {
              if (item._id === book._id) {
                return Object.assign({}, book, { votes: book.votes - 1 < 0 ? 0 : book.votes - 1 });
              } else {
                return item;
              }
            });

            _this4.setState({ books: books });
          } else {
            _this4.setState({ showLogin: true, email: '', password: '', confirmPassword: '', loggedInUser: null });
          }
        });
      }
    }
  }, {
    key: 'addBook',
    value: function addBook() {
      var _this5 = this;

      if (this.state.newTitle !== '' && this.state.newAuthor !== '') {
        var newBook = { title: this.state.newTitle, author: this.state.newAuthor };
        _service.service.addBook(newBook).then(function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            _this5.setState({ showLogin: true, email: '', password: '', confirmPassword: '', loggedInUser: null });
            throw new Error('Unauthorized');
          }
        }).then(function (book) {
          var books = _this5.state.books.slice();
          books.unshift(book);
          _this5.setState({ books: books, newTitle: '' });
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: 'textChange',
    value: function textChange(value) {
      this.setState({ newTitle: value });
    }
  }, {
    key: 'showLogin',
    value: function showLogin() {
      this.setState({ showLogin: !this.state.showLogin, showSignup: false, email: '', password: '', confirmPassword: '' });
    }
  }, {
    key: 'showSignup',
    value: function showSignup() {
      this.setState({ showSignup: !this.state.showSignup, showLogin: false, email: '', password: '', confirmPassword: '' });
    }
  }, {
    key: 'togglePanel',
    value: function togglePanel() {
      this.setState({ showLogin: !this.state.showLogin, showSignup: !this.state.showSignup, email: '', password: '', confirmPassword: '' });
    }
  }, {
    key: 'search',
    value: function search() {
      var _this6 = this;

      _service.service.search(this.state.searchStr).then(function (data) {
        return data.json();
      }).then(function (books) {
        return _this6.setState({ books: books }, function () {
          return _this6.getFavorites(_this6.state.loggedInUser);
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'searchInput',
    value: function searchInput(value) {
      this.setState({ searchStr: value });
    }
  }, {
    key: 'hideLogin',
    value: function hideLogin(e) {
      this.setState({ showLogin: false, showSignup: false, showOptions: false });
    }
  }, {
    key: 'authorTextChange',
    value: function authorTextChange(newAuthor) {
      this.setState({ newAuthor: newAuthor });
    }
  }, {
    key: 'doLogin',
    value: function doLogin() {
      var _this7 = this;

      if (this.state.email === '') {
        alert('Please enter email');
      } else if (this.state.password === '') {
        alert('Please enter password');
      } else {
        _service.service.login({ email: this.state.email, password: this.state.password }).then(function (data) {
          return data.json();
        }).then(function (res) {
          if (res.message === 'ok') {
            var loggedInUser = res.email;
            _this7.setState({ showLogin: false, loggedInUser: loggedInUser }, function () {
              _this7.getFavorites(loggedInUser);
            });
          } else {
            alert('Error: ' + res.message);
          }
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: 'doSignup',
    value: function doSignup() {
      var _this8 = this;

      if (this.state.email === '') {
        alert('Please enter email');
      } else if (this.state.password === '') {
        alert('Please enter password');
      } else if (this.state.password !== this.state.confirmPassword) {
        alert('Passwords don\'t match');
      } else {
        _service.service.signup({ email: this.state.email, password: this.state.password }).then(function (data) {
          return data.json();
        }).then(function (res) {
          if (res.message === 'ok') {
            var loggedInUser = res.email;
            _this8.setState({ showSignup: false, loggedInUser: loggedInUser });
          } else {
            alert('Error: ' + res.message);
          }
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: 'changeEmail',
    value: function changeEmail(email) {
      this.setState({ email: email });
    }
  }, {
    key: 'changePassword',
    value: function changePassword(password) {
      this.setState({ password: password });
    }
  }, {
    key: 'changeConfirmPassword',
    value: function changeConfirmPassword(confirmPassword) {
      this.setState({ confirmPassword: confirmPassword });
    }
  }, {
    key: 'logout',
    value: function logout() {
      var _this9 = this;

      _service.service.logout(this.state.loggedInUser).then(function (res) {
        return res.json();
      }).then(function (_ref2) {
        var message = _ref2.message;

        if (message === 'ok') {
          var books = _this9.state.books.map(function (book) {
            return Object.assign({}, book, { isFavorite: false });
          });
          _this9.setState({ loggedInUser: null, books: books });
        }
      });
    }
  }, {
    key: 'toggleOptions',
    value: function toggleOptions() {
      this.setState({ showOptions: !this.state.showOptions });
    }
  }, {
    key: 'favorite',
    value: function favorite(book) {
      var _this10 = this;

      var addOrRemove = book.isFavorite ? 'r' : 'a';
      _service.service.addFavorite(this.state.loggedInUser, book._id, addOrRemove).then(function (res) {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          _this10.setState({ showLogin: true, email: '', password: '', confirmPassword: '', loggedInUser: null });
          throw new Error('Unauthorized');
        } else {
          throw new Error('Server error');
        }
      }).then(function (_ref3) {
        var message = _ref3.message;

        if (message === 'ok') {
          var books = _this10.state.books.map(function (b) {
            return b._id === book._id ? Object.assign({}, b, { isFavorite: !b.isFavorite }) : b;
          });
          _this10.setState({ books: books });
        }
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this11 = this;

      return _react2.default.createElement(
        'div',
        { className: 'App', onClick: this.hideLogin },
        _react2.default.createElement(_Nav2.default, { login: this.showLogin, signup: this.showSignup, search: this.search, searchStr: this.state.searchStr, searchInput: function searchInput(value) {
            return _this11.searchInput(value);
          }, loggedInUser: this.state.loggedInUser, logout: this.logout, showOptions: this.state.showOptions, toggleOptions: this.toggleOptions }),
        this.state.showLogin || this.state.showSignup ? _react2.default.createElement(_Login2.default, { signup: this.state.showSignup, togglePanel: this.togglePanel, doLogin: this.doLogin, doSignup: this.doSignup,
          email: this.state.email, changeEmail: this.changeEmail,
          password: this.state.password, changePassword: this.changePassword,
          confirmPassword: this.state.confirmPassword, changeConfirmPassword: this.changeConfirmPassword }) : '',
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/',
          render: function render(props) {
            return _react2.default.createElement(_Home2.default, _extends({}, props, {
              books: _this11.state.books,
              changeVotes: function changeVotes(book, isUpvote) {
                return _this11.changeVotes(book, isUpvote);
              },
              favorite: function favorite(book) {
                return _this11.favorite(book);
              },
              newTitle: _this11.state.newTitle,
              addBook: _this11.addBook,
              textChange: function textChange(value) {
                return _this11.textChange(value);
              },
              newAuthor: _this11.state.newAuthor,
              authorTextChange: function authorTextChange(value) {
                return _this11.authorTextChange(value);
              } }));
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/mybooks',
          render: function render(props) {
            return _react2.default.createElement(_MyBooks2.default, _extends({}, props, {
              books: _this11.state.books.filter(function (book) {
                return book.isFavorite;
              }) }));
          }
        })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(31);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(30);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(29);

var _App2 = _interopRequireDefault(_App);

var _server = __webpack_require__(13);

var _template = __webpack_require__(12);

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _database = __webpack_require__(11);

var _bcryptjs = __webpack_require__(10);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _cookieParser = __webpack_require__(9);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _reactRouterDom = __webpack_require__(2);

var _jsonwebtoken = __webpack_require__(8);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _passport = __webpack_require__(7);

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = __webpack_require__(6);

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _atob = __webpack_require__(5);

var _atob2 = _interopRequireDefault(_atob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saltRounds = 10;
//passport authentication


var ExtractJwt = _passportJwt2.default.ExtractJwt;
var JwtStrategy = _passportJwt2.default.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromExtractors([function (req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }

    return token;
}]);

jwtOptions.secretOrKey = 'bookmela';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    _database.database.getUser(jwt_payload.id, jwt_payload.iat, function (err) {
        return console.log(err);
    }, function (user) {
        if (user) {
            next(null, user);
        } else {
            next(null, false);
        }
    });
});

_passport2.default.use(strategy);
//passport authentication

var app = (0, _express2.default)();

app.use(_passport2.default.initialize());

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.use((0, _cookieParser2.default)());

app.use(_express2.default.static('client'));

app.post("/login", function (req, res) {
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
    } else {
        res.status(401).json({ message: 'invalid credentials' });
    }

    _database.database.getUserByEmail(email, function (err) {
        return console.err(err);
    }, function (user) {
        if (!user) {
            res.status(401).json({ message: "no such user found" });
            return;
        }

        _bcryptjs2.default.compare(req.body.password, user.password, function (err, result) {
            if (result) {
                var payload = { id: user._id, email: user.email };
                var token = _jsonwebtoken2.default.sign(payload, jwtOptions.secretOrKey);

                var _JSON$parse = JSON.parse((0, _atob2.default)(token.split('.')[1])),
                    iat = _JSON$parse.iat;

                _database.database.updateUserToken(email, iat, function (err) {
                    return console.log(err);
                }, function (user) {
                    res.cookie('jwt', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
                    res.json({ message: "ok", email: email });
                });
            } else {
                res.status(401).json({ message: "passwords did not match" });
            }
        });
    });
});

app.post("/signup", function (req, res) {
    var _req$body = req.body,
        email = _req$body.email,
        password = _req$body.password;


    if (email !== '' && password !== '') {
        _database.database.getUserByEmail(email, function (err) {
            return console.err(err);
        }, function (user) {
            if (!user) {
                _bcryptjs2.default.hash(password, saltRounds, function (err, hash) {
                    _database.database.addUser(email, hash, null, function (err) {
                        return console.log(err);
                    }, function (user) {
                        var payload = { id: user._id, email: user.email };
                        var token = _jsonwebtoken2.default.sign(payload, jwtOptions.secretOrKey);

                        var _JSON$parse2 = JSON.parse((0, _atob2.default)(token.split('.')[1])),
                            iat = _JSON$parse2.iat;

                        _database.database.updateUserToken(email, iat, function (err) {
                            return console.log(err);
                        }, function (user) {
                            res.cookie('jwt', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
                            res.json({ message: "ok", email: email });
                        });
                    });
                });
            } else {
                res.status(401).json({ message: 'User is already signed up' });
            }
        });
    } else {
        res.status(401).json({ message: 'invalid credentials' });
    }
});

app.post('/logout', function (req, res) {
    var email = req.body.email;
    _database.database.updateUserToken(email, null, function (err) {
        return console.log(err);
    }, function (user) {
        res.cookie('jwt', null, { maxAge: -60000, httpOnly: true });
        res.json({ message: 'ok' });
    });
});

app.get('/validateLogin', _passport2.default.authenticate('jwt', { session: false }), function (req, res) {
    var token = req.cookies['jwt'];

    var _JSON$parse3 = JSON.parse((0, _atob2.default)(token.split('.')[1])),
        email = _JSON$parse3.email;

    res.json({ message: 'ok', email: email });
});

app.post('/book', _passport2.default.authenticate('jwt', { session: false }), function (req, res) {
    if (req.body && req.body.title && req.body.author) {
        _database.database.addBook(req.body.title, req.body.author, function (err) {
            return console.log(err);
        }, function (book) {
            return res.send(book);
        });
    }
});

app.get('/upvote/:id', _passport2.default.authenticate('jwt', { session: false }), function (req, res) {
    var id = req.params.id;
    _database.database.voteBook(id, true, function (err) {
        return console.err(err);
    }, function (updatedBook) {
        return res.send(updatedBook);
    });
});

app.get('/downvote/:id', _passport2.default.authenticate('jwt', { session: false }), function (req, res) {
    var id = req.params.id;
    _database.database.voteBook(id, false, function (err) {
        return console.err(err);
    }, function (updatedBook) {
        return res.send(updatedBook);
    });
});

app.get('/search/:str', function (req, res) {
    var str = req.params.str;
    _database.database.search(str, function (err) {
        return console.err(err);
    }, function (books) {
        return res.send(books);
    });
});

app.get('/books', function (req, res) {
    _database.database.getBooks(function (err) {
        return console.err(err);
    }, function (books) {
        return res.send(books);
    });
});

app.post('/getFavorites', _passport2.default.authenticate('jwt', { session: false }), function (req, res) {
    var email = req.body.email;

    _database.database.getFavorites(email, function (err) {
        return console.log(err);
    }, function (favorites) {
        return res.send(favorites);
    });
});

app.post('/addFavorite', _passport2.default.authenticate('jwt', { session: false }), function (req, res) {
    var _req$body2 = req.body,
        email = _req$body2.email,
        bookId = _req$body2.bookId,
        addOrRemove = _req$body2.addOrRemove;

    _database.database.addFavorite(email, bookId, addOrRemove, function (err) {
        return console.log(err);
    }, function () {
        return res.json({ message: 'ok' });
    });
});

app.get(/^\/(mybooks)?$/, function (req, res) {
    _database.database.getBooks(function (err) {
        return console.err(err);
    }, function (books) {
        var body = (0, _server.renderToString)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            null,
            _react2.default.createElement(_App2.default, { books: books })
        ));
        var page = (0, _template.template)('My favorite books', body, books);
        res.send(page);
    });
});

app.get('/*', function (req, res) {
    res.status(404).json('This path does not exist');
});

_mongoose2.default.connect(process.env.MONGODB);
var db = _mongoose2.default.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('Database connected');
    app.listen('3000', function () {
        return console.log('Server listening at 3000');
    });
});

/***/ })
/******/ ]);
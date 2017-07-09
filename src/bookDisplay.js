import { addBooks } from './reduxStore/actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import axios from 'axios';


class BookDisplay extends Component {



    nextBooks = () => {
        let offset = this.props.bookData.length;
        axios.get(`https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=${offset}&limit=51&kindId=7`, {
            headers: {
                "ws-api": "2.1"
            }
        })
            .then((response) => {
                this.props.addBooks(response.data);

            })
    }

    componentDidMount = () => {
        axios.get('https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7', {
            headers: {
                "ws-api": "2.1"
            }
        })
            .then((response) => {
                this.props.addBooks(response.data);
            })
    };


    render() {


        return (
        <div className="App">
            <div className="App-header">
                <div className="header">
                <img src= "https://www.hoopladigital.com/images/hoopla-white-logo.svg" alt="qwdqwdwq"/>
                <h4>Click to load more <button className="load" onClick={this.nextBooks}>load</button></h4>
                </div>
                <div>Showing 1-{this.props.bookData.length}</div>
            </div>

            <div className="container text-center">
                <div className="row">
            {this.props.bookData.map((data, i) => {
                return (

                    <div className="mediaHolder col-md-2" key={`book+${i}`} >
                        <div>
                            <a href={`https://www.hoopladigital.com/title/${data.titleId}`}><img src={`https://d2snwnmzyr8jue.cloudfront.net/${data.artKey}_270.jpeg`} alt="Nothing here" height="116px;" width="140px;"/></a>
                            <div className="title">{data.title}</div>
                            <div className="artistName">{data.artistName}</div>
                        </div>
                    </div>);
            })
            }
            </div>
            </div>





        </div>

        )
    }
}



const mapStateToProps = (state) => {

    return {
        bookData: state.bookData || []
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBooks: (data)=> {
            dispatch(addBooks(data))
        }
    }
};
BookDisplay = connect(mapStateToProps, mapDispatchToProps)(BookDisplay);
export default BookDisplay
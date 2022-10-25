import { Component } from "react"
import { Link } from "react-router-dom";

export default class ErrorPage extends Component {
    render() {
        return (
            <>
                halaman tidak di temukan <Link to={"/"}><br/>kembali</Link>
            </>
        );
    }

}
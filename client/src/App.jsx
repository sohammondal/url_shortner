import React, { Component } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      shortUrl: "",
      longUrl: "",
      isError: false,
      isLoading: false,
      error: null
    };
  }
  async handleSubmit() {
    // e.preventDefault();
    try {
      this.setState({ isLoading: true });
      let url = await axios.post("http://localhost:5000/api/url/shorten", {
        longUrl: this.state.longUrl
      });
      if (url) {
        this.setState({ shortUrl: url.data.shortUrl, isLoading: false });
      }
    } catch (err) {
      this.setState({
        isError: true,
        error: {
          status: err.response.status,
          message: err.response.data
        },
        isLoading: false
      });
    }
  }

  renderError() {
    setTimeout(() => {
      this.setState({ isError: null, err: null });
    }, 3000);
    let { message, status } = this.state.error;
    return (
      <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="mr-auto">Error {status}</strong>
          <button
            onClick={() => this.setState({ isError: null, err: null })}
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    );
  }

  inputForm() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <input
            style={{ width: "100%" }}
            onChange={e => this.setState({ longUrl: e.target.value })}
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inputLink"
            placeholder="Paste your link here..."
            value={this.state.longUrl}
          />
        </div>
        <div className="col-sm-2">
          <button
            // style={{ width: "100%" }}
            type="submit"
            onClick={() => this.handleSubmit()}
            className="btn btn-primary mb-2"
          >
            Shorten
          </button>
        </div>
      </div>
    );
  }

  reset() {
    this.setState({
      isCopied: false,
      shortUrl: "",
      longUrl: "",
      isError: false,
      isLoading: false,
      error: null
    });
  }

  output() {
    let copied = this.state.copied;
    return (
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <input
            disabled
            style={{ width: "100%" }}
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inputLink"
            placeholder=""
            value={this.state.shortUrl}
          />
        </div>
        <div className="col-sm-2">
          <CopyToClipboard
            text={this.state.shortUrl}
            onCopy={() => this.setState({ isCopied: true })}
          >
            <button
              disabled={this.state.shortUrl ? false : true}
              // style={{ width: "56%" }}
              className={`btn ${copied ? "btn-success" : "btn-primary"} mb-2`}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </CopyToClipboard>
          <button
            className="btn btn-primary mb-2"
            style={{
              marginLeft: "2px"
              // width: "42%"
            }}
            onClick={() => this.reset()}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }

  spinner() {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  render() {
    let isLoading = this.state.isLoading;
    return (
      <div className="App-header">
        <div
          className="container"
          style={{
            opacity: isLoading ? 0.5 : 1
          }}
        >
          <div className="card rounded-sm">
            <div className="card-body">
              {isLoading ? this.spinner() : null}
              {this.inputForm()}
              {this.output()}
            </div>
          </div>
        </div>
        {this.state.isError ? this.renderError() : null}
      </div>
    );
  }
}
export default App;

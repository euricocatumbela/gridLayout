import React from "react";

const img = "./images/logo-designcode.svg";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = event => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={
          this.state.hasScrolled ? "Header   HeaderScrolled" : "Header"
        }
      >
        <div className="HeaderGroup">
          <a href="/">
            <img alt="" src={img} width="30" />
          </a>
          <a href="/courses">Courses</a>
          <a href="/dowloads">Downloads</a>
          <a href="/workshops">Workshops</a>
          <a href="/buy">
            <button>Buy</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;

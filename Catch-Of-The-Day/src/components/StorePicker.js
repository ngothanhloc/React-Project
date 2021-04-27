import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component { 
  static propType = {
    history: PropTypes.object
  }
    myInput = React.createRef();

    gotoStore= event =>{
        //1.stop form submitting
        event.preventDefault();
        //2.get the text form that input
        const storeName = this.myInput.current.value;
        //3.Change the page to /store/whatever-they-enter
        this.props.history.push(`/store/${storeName}`);
    }
  render() {    
    return (
      <form action="" className="store-selector" onSubmit={this.gotoStore}>
        <p>Please Enter A Store</p>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}
export default StorePicker;

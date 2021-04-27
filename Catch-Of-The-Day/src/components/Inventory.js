import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";
import Login from "./Login";
import firebase from "firebase";
import base, { firebaseApp } from "../base";


class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
  };

  // authHandle = async authData => {
  //   // 1.Look up the current store in the firebase databese
  //  const store = await base.fetch(this.props.storeId, { context: this });
  //   console.log(store);
  //   // 2.Claim it if there is no owner
  //   // 3.set the state of the inventory component to reflect the current user 
  //   console.log(authData);
  // };

  // authenticate = (provider) => {
  //   const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  //   firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandle);
  // };
  render() {
    // return <Login authenticate={this.authenticate} />;
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;

import React from "react";
import Avator from "./Avator";

const Card = (props) => {
  return (
    <div>
      <div className="card_content">
        <div className="container">
            <div className="row">
              <div className="col-7 c_h_section">
                <h2 className="con_name">{props.name}</h2>
                <p className="email">{props.email}</p>
                <p className="tel">{props.tel}</p>
              </div>

              <div className="col-5 c_d_section">
                <Avator img={props.img} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

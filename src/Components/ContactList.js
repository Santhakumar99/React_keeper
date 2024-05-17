import React from "react";
import Avator from "./Avator";
import Contacts from "./Contact";
import Header from "./Header";

const ContactList = () => {
  return (
    <>
    <Header/>
    <div className="contacts_card">
      {Contacts.map((props) => (
        <div className="card_content">
          <div className="container">
            <div className="c_h_section">
              <div className="row">
                <div className="col-4 c_d_section">
                  <Avator img={props.img} />
                </div>
                <div className="col-8 name_section">
                  <h4 className="con_name">{props.name}</h4>
                  <p className="tel">{props.tel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ContactList;

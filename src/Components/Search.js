import {React, useState} from "react";
import { FaSearch } from "react-icons/fa";
import ContactList from "./ContactList";
import Avator from "./Avator";

const Search = () => {
  const [products, setProducts] = useState(ContactList);
  const [searchVal, setSearchVal] = useState("");
  function handleSearchClick(e) {
    searchVal = e.target.value;
    setSearchVal(searchVal);
    if (searchVal === "") {
      setProducts(ContactList);
      return;
    }
    const filterBySearch = ContactList.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setProducts(filterBySearch);
  }

  return (
    <div>
      <div className="search_section">
        <input
          className="search_box"
          type="text"
          value={searchVal}
          onChange={(e)=>handleSearchClick()}
           name="searchvalue"
        />
      </div>
      {products.map((item) => (
        <div className="card_content">
          <div className="container">
            <div className="c_h_section">
              <div className="row">
                <div className="col-2 c_d_section">
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
  );
};

export default Search;

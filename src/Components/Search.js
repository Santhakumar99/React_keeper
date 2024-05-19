import { React, useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
import ContactList from "./ContactList";
import Avator from "./Avator";
import Contacts from "./Contact";
import Header from "./Header";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    setProducts(Contacts);
  }, []);

  const SearchOnChangeHandler = (e) => {
    const value = e.target.value;
    let inputValues = searchVal;
    inputValues = value;
    setSearchVal(inputValues);
    if (value) {
      const Projects = Contacts.filter(
        (item) =>
          (item.name != null &&
            item.name.toLowerCase().includes(value.toLowerCase())) ||
          (item.email != null &&
            item.email.toLowerCase().includes(value.toLowerCase()))
      );
      console.log(Projects);
      setProducts(Projects);
    } else {
      console.log("working");
      setProducts(Contacts);
      console.log(Contacts);
    }
  };

  return (
    <div>
      <div className="headerSC">
        <Header />
        <div className="search_section">
          <div className="container">
            <input
              type="text"
              value={searchVal}
              onChange={(e) => SearchOnChangeHandler(e)}
              name="searchvalue"
              class="form-control searchbox"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="listdata">
      {products!="" ?products.map((props) => (
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
      )):<div className="NO Data">No Data Available !!!</div>}
      </div>
    </div>
  );
};

export default Search;

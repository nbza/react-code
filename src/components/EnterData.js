import React, { useState } from "react";
import Sort from "./Sort";
import BinarySearch from "./Search";

function EnterData() {
  const [data, setData] = useState([]);
  const [searchData,setSearchData] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The data you entered was: ${data}`);
  };

  const handleSubmitBinarySearch = (event) => {
    event.preventDefault();
    alert(`The data you entered was: ${searchData}`);
  };

  const ClickHandler = () => {
    const string1 = localStorage.getItem("data");
    console.log(string1);
    const old = string1?.split(",");
    let update = [];

    if (string1) {
      update = [...old, data];
    } else {
      update = [data];
    }

    localStorage.setItem("data", update.join(","));
    console.log("data", update.join(","));

    //  let str_array = update.split(",");
    for (var i = 0; i < update.length; i++) {
      console.log(`item at ${i} is ${update[i]}`);
    }
    console.log(update);
    console.log(Sort(update));
  };

  //  for binary search
  const ClickHandlerBinarySearch = () => {
    const result=BinarySearch(localStorage.getItem('data'), Number(searchData));
    console.log("result",result)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your data:
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <button onClick={ClickHandler}>submit</button>
      </form>

      <br />
      <br />
      <br />

      <form onSubmit={handleSubmitBinarySearch}>
        <label>
          Enter the data you want to search:
          <input
            type="text"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </label>
        <button onClick={ClickHandlerBinarySearch}>search</button>
        
        <label>
          {ClickHandlerBinarySearch.result}
        </label>
      </form>
    </>
  );
}

export default EnterData;

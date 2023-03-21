import React from "react";

function Child({ age, incrementAge }) {
    function handleClick() {
      incrementAge();
    }
    return (
      <div id="child">
        <p id="text">Today I am {age} Years of Age</p>
        <button id="button" onClick={handleClick}>
          increments the age
        </button>
      </div>
    );
  }
  
  export default Child;

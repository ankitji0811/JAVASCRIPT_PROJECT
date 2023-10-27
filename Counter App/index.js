const countValue = document.getElementById('counter');

const increment = () => {
// get the value from ui
    let value = parseInt(countValue.innerText);
    // Update the value
    value = value + 1;
    // set value onto UI
    countValue.innerText = value;

};

const decrement = () => {
   // get the value from ui
   let value = parseInt(countValue.innerText);
   // Update the value
   value = value - 1;
   // set value onto UI
   countValue.innerText = value;
};
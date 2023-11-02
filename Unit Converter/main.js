import { t } from "./UnitAndTypes.js";

function showTime() {
  document.getElementById("currentTime").innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
  showTime();
}, 1000);

const convertionTypes = [
  "Temperature",
  "Speed",
  "Length",
  "Time",
  "Pressure",
  "Mass",
];

let types = {};
types["Temperature"] = ["Celsius", "Fahrenheit", "Kelvin"];
types["Speed"] = ["Mile/hr", "Foot/sec", "Meter/sec", "Kilometer/hr", "Knot"];

types["Length"] = [
  "Kilometer",
  "Meter",
  "Centimeter",
  "Millimeter",
  "Micrometer",
  "Nanometer",
  "Mile",
  "Yard",
  "Foot",
  "Inch",
  "Nautical Mile",
  "Statute Mile",
];

types["Time"] = [
  "Nanosecond",
  "Microsecond",
  "Millisecond",
  "Second",
  "Minute",
  "Hour",
  "Day",
  "Week",
  "Month",
  "Calendar Year",
  "Decade",
  "Century",
];

types["Pressure"] = ["Bar", "Pascal", "lbs/sq.in.", "Millibars", "Torr"];

types["Mass"] = [
  "Tonne",
  "Kilogram",
  "Gram",
  "Milligram",
  "Microgram",
  "Imperial ton",
  "US ton",
  "Stone",
  "Pound",
  "Ounce",
];

const ClearDropdownOptions = (dropdown) => {
  while (dropdown.options.length) {
    dropdown.remove(0);
  }
};

const AddDropdownOptions = (dropdown, unitList) => {
  for (let unit in unitList) {
    dropdown.innerHTML += `<option value='${unitList[unit]}'>
    ${unitList[unit]}</option>`;
  }
};

// Get dropdown elements
const selectedTypeDropdown = document.getElementById("ConvertionType");
const fromUnitDropdown = document.getElementById("Input_Type");
const toUnitDropdown = document.getElementById("Output_Type");

// initialize current type index with the first index always
let currentTypeIndex = convertionTypes[0];

// Get input field element
const userInput = document.getElementById("Value_Input");

// Get output field element
const outputField = document.getElementById("Value_Output");

const ClearUnitDropdowns = () => {
  ClearDropdownOptions(fromUnitDropdown);
  ClearDropdownOptions(toUnitDropdown);
};

const UpdateUnitDropdownOptions = () => {
  AddDropdownOptions(fromUnitDropdown, types[currentTypeIndex]);
  AddDropdownOptions(toUnitDropdown, types[currentTypeIndex]);
  toUnitDropdown.selectedIndex = 1;
};

const Initialize = () => {
  ClearDropdownOptions(selectedTypeDropdown);
  ClearUnitDropdowns();

  AddDropdownOptions(selectedTypeDropdown, convertionTypes);
  UpdateUnitDropdownOptions();
};

// Fn for handling events
const OnTypeChanged = (dropdown) => {
  currentTypeIndex = convertionTypes[dropdown.selectedIndex];
  ClearUnitDropdowns();
  UpdateUnitDropdownOptions();
};

const OnInputChanged = (newInput) => {
  const fromUnitIndex = fromUnitDropdown.selectedIndex;
  const toUnitIndex = toUnitDropdown.selectedIndex;

  // Get string format
  const fromUnit = fromUnitDropdown.options[fromUnitIndex].value;
  const toUnit = toUnitDropdown.options[toUnitIndex].value;

  let compute;
  window.alert(currentTypeIndex);

  outputField.innerText = parseFloat(newInput.value);
};

// ****************
// FLOW STARTS HERE
// ****************

Initialize();

selectedTypeDropdown.addEventListener("change", (e) => {
  e.stopPropagation();
  OnTypeChanged(e.target);
});

userInput.addEventListener("input", (e) => {
  e.stopPropagation();
  OnInputChanged(e.target);
});

let temp = t["Temperature"]["Celsius"];
//console.log(t.Temperature.Celsius.Fahrenheit(15));

// *******************************************
// ___________________________________________
//                 REMINDER
// Type(s) refer to the type of measurement
// examples are Temperature, Speed, etc...
//
// Unit(s) refer to the type(s) children
// examples are Celcius, Miles per Hr, etc...
// ___________________________________________
// *******************************************
import { typesAndUnits } from "./UnitAndTypes.js";

function showTime() {
  document.getElementById("currentTime").innerHTML = new Date().toUTCString();
}

const convertionTypes = [
  "Temperature",
  "Speed",
  "Length",
  "Time",
  "Pressure",
  "Mass",
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
let currentTypeString = convertionTypes[0];

// Get input field element
const userInput = document.getElementById("Value_Input");

// Get output field element
const outputField = document.getElementById("Value_Output");

const ClearUnitDropdowns = () => {
  ClearDropdownOptions(fromUnitDropdown);
  ClearDropdownOptions(toUnitDropdown);
};

const UpdateUnitDropdownOptions = () => {
  AddDropdownOptions(
    fromUnitDropdown,
    typesAndUnits[currentTypeString].TypeUnits
  );
  AddDropdownOptions(
    toUnitDropdown,
    typesAndUnits[currentTypeString].TypeUnits
  );
  toUnitDropdown.selectedIndex = 1;
};

const Initialize = () => {
  showTime();

  setInterval(function () {
    showTime();
  }, 1000);

  ClearDropdownOptions(selectedTypeDropdown);
  ClearUnitDropdowns();

  AddDropdownOptions(selectedTypeDropdown, convertionTypes);
  UpdateUnitDropdownOptions();
};

// Fn for handling events
const OnTypeChanged = (dropdown) => {
  currentTypeString = convertionTypes[dropdown.selectedIndex];

  userInput.value = "";
  outputField.innerText = "Result";

  ClearUnitDropdowns();
  UpdateUnitDropdownOptions();
};

let userInputValue;

const ShowConvertionResult = (val) => {
  // Get Indexes to be used in the options array
  const fromUnitIndex = fromUnitDropdown.selectedIndex;
  const toUnitIndex = toUnitDropdown.selectedIndex;

  // Get string format
  const fromUnit = fromUnitDropdown.options[fromUnitIndex].value; // ex. Celcius
  const toUnit = toUnitDropdown.options[toUnitIndex].value; // ex. Fahrenheit

  const typeSelected = typesAndUnits[currentTypeString]; // ex. Temperature
  const result = typeSelected[fromUnit][toUnit].GetConvertedValue(val); // ex. Celcius - Fahrenheit

  outputField.innerText = result;
};

const OnUnitChanged = () => {
  ShowConvertionResult(userInputValue);
};

const OnInputChanged = (newInput) => {
  // TODO:
  // Do a check before parsing here
  userInputValue = parseFloat(newInput.value);
  ShowConvertionResult(userInputValue);
};

// ****************
// FLOW STARTS HERE
// ****************

Initialize();

selectedTypeDropdown.addEventListener("change", (e) => {
  e.stopPropagation();
  OnTypeChanged(e.target);
});

fromUnitDropdown.addEventListener("change", (e) => {
  e.stopPropagation();
  OnUnitChanged();
});

toUnitDropdown.addEventListener("change", (e) => {
  e.stopPropagation();
  OnUnitChanged();
});

userInput.addEventListener("input", (e) => {
  e.stopPropagation();
  OnInputChanged(e.target);
});

//console.log(typesAndUnits[currentTypeString].TypeUnits);
//let temp = typesAndUnits["Temperature"]["Celsius"];
//console.log(t.Temperature.Celsius.Fahrenheit(15));
//console.log(temp.Fahrenheit(15));

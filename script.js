// DOM Elements
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert-btn');
const convertedTempDisplay = document.getElementById('converted-temp');

// Event Listener for Convert Button
convertButton.addEventListener('click', () => {
    const tempValue = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(tempValue)) {
        convertedTempDisplay.textContent = 'Invalid input!';
        return;
    }

    let convertedTemp;

    switch (unit) {
        case 'celsius':
            convertedTemp = `Fahrenheit: ${(tempValue * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(tempValue + 273.15).toFixed(2)}K`;
            break;
        case 'fahrenheit':
            convertedTemp = `Celsius: ${((tempValue - 32) * 5/9).toFixed(2)}°C, Kelvin: ${(((tempValue - 32) * 5/9) + 273.15).toFixed(2)}K`;
            break;
        case 'kelvin':
            convertedTemp = `Celsius: ${(tempValue - 273.15).toFixed(2)}°C, Fahrenheit: ${((tempValue - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
        default:
            convertedTemp = 'Invalid conversion!';
    }

    convertedTempDisplay.textContent = convertedTemp;
});

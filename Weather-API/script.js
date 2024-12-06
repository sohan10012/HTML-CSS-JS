const weatherform = document.querySelector(".Weatherform");
const getweather = document.getElementById("getweather");
const bigbox = document.getElementById("bigbox");
const card = document.querySelector(".card");
const ApiKey = ""/*Your api key here*/ ;

/*
 * To use this weather app, you need an API key from OpenWeatherMap.
 * Follow these steps to get your API key and add it to the JavaScript file:
 *
 * 1. Go to the OpenWeatherMap website: https://openweathermap.org/appid
 * 2. Sign up for a new account if you don't already have one, or log in if you have an existing account.
 * 3. Once logged in, navigate to the "API keys" section of your account.
 * 4. Click on the "Create Key" button to generate a new API key.
 * 5. Copy the API key provided.
 * 6. Open the JavaScript file in your project where the API key is used.
 * 7. Locate the line that defines the `ApiKey` variable:
 *    const ApiKey = "your_api_key_here";
 * 8. Replace `"your_api_key_here"` with the API key you copied.
 * 9. Save the JavaScript file.
 *
 * Your API key is now set up and ready to use in the weather app.
 */



window.addEventListener("load", () => {
  updateClock();
  setInterval(updateClock, 1000);
});/*clock constant run*/ 

weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = getweather.value;

  if (city) {
    try {
      const weatherdata = await getweatherdata(city);
      display(weatherdata, city);
    } catch (error) {
      console.error(error);
      displayerror(error.message);
    }
  } else {
    displayerror("Please enter a city name");
  }
});

// Add click event to the submit button
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  weatherform.dispatchEvent(new Event("submit"));
});

async function getweatherdata(city) {
  const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${ApiKey}`;
  const geocodingResponse = await fetch(geocodingUrl);

  if (!geocodingResponse.ok) {
    throw new Error("Could not fetch geocoding data");
  }

  const geocodingData = await geocodingResponse.json();
  if (geocodingData.length === 0) {
    throw new Error("City not found");
  }

  const { lat, lon, country } = geocodingData[0];
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${ApiKey}`;
  const response = await fetch(weatherUrl);

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  const weatherData = await response.json();
  return { ...weatherData, country };
}

function display(data, city) {
  const {
    sys: { country },
    main: { temp },
    weather: [{ description, id }],
  } = data;

  // Clear previous error message
  card.innerHTML = "";

  // Update place
  const placeElement = document.getElementById("place");
  placeElement.textContent = `${city.toUpperCase()}, ${country.toUpperCase()}`;

  // Update temperature
  const degreeElement = document.getElementById("degree");
  degreeElement.textContent = `${Math.round(temp)}°`;

  // Update weather icon and description
  const iconElement = document.getElementById("icon");
  const weatherEmoji = emoji(id);
  iconElement.textContent = weatherEmoji;

  // Update date
  const now = new Date();
  const day = now
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();
  const date = now.getDate();
  const month = now
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();
  const year = now.getFullYear();

  document.getElementById("day-date").textContent = `${day} ${date}`;
  document.getElementById("month-year").textContent = `${month} ${year}`;
}

function emoji(weatherid) {
  if (weatherid >= 200 && weatherid < 300) {
    return "⛈️ Storm";
  } else if (weatherid >= 300 && weatherid < 400) {
    return "🌧️Drizzle";
  } else if (weatherid >= 500 && weatherid < 600) {
    return "🌦️ Rain";
  } else if (weatherid >= 600 && weatherid < 700) {
    return "❄️ Snow";
  } else if (weatherid >= 700 && weatherid < 800) {
    return "🌫️ Fog";
  } else if (weatherid === 800) {
    return "☀️ Clear";
  } else if (weatherid > 800 && weatherid < 900) {
    return "☁️ Clouds";
  } else {
    return "🌡️ Default";
  }
}

function displayerror(message) {
  const errormessage = document.createElement("p");
  errormessage.textContent = message;
  errormessage.classList.add("errormessage");

  card.innerHTML = ""; // Clear previous content in card
  card.style.display = "flex";
  card.appendChild(errormessage);
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

# 🌤️ Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information for any city worldwide.

## 📋 About This Project

This Weather App allows users to search for current weather conditions in any city around the world. The application fetches real-time data from the OpenWeatherMap API and displays comprehensive weather information in a clean, user-friendly interface.

## ✨ Features

- 🔍 **City Search**: Search weather by city name
- 🌡️ **Real-time Data**: Current temperature, feels like, min/max temperatures
- 💧 **Detailed Info**: Humidity, pressure, sea level, wind speed
- 🎨 **Modern UI**: Clean interface built with Material-UI components
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development
- 🔒 **Secure**: API keys protected with environment variables

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Material-UI** - UI component library
- **OpenWeatherMap API** - Weather data source
- **ESLint** - Code linting and formatting

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek0736/Weather-App.git
   cd Weather-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

5. **Add your API key to .env file**
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🎯 How It Works

1. **Search**: Enter any city name in the search box
2. **Fetch**: App makes API call to OpenWeatherMap
3. **Display**: Weather data is displayed in organized cards
4. **Error Handling**: Shows error message for invalid city names

## 📁 Project Structure

```
src/
├── components/
│   ├── WeatherApp.jsx    # Main app component
│   ├── SearchBox.jsx     # Search input component
│   └── InfoBox.jsx       # Weather display component
├── styles/
│   ├── SearchBox.css     # Search box styles
│   └── InfoBox.css       # Info box styles
└── main.jsx              # App entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Reference

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current)

**Endpoint**: `https://api.openweathermap.org/data/2.5/weather`

**Parameters**:
- `q`: City name
- `appid`: Your API key
- `units`: metric (for Celsius)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhishek**
- GitHub: [@Abhishek0736](https://github.com/Abhishek0736)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Material-UI](https://mui.com/) for the beautiful UI components
- [Vite](https://vitejs.dev/) for the amazing build tool

---

⭐ **If you found this project helpful, please give it a star!** ⭐

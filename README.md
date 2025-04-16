# Urban Heat Island (UHI) Detection + Gemini AI Integration 🌳🤖

This project dynamically detects Urban Heat Island (UHI) risk zones using **Google Earth Engine** (GEE) and visualizes them on an interactive map using **React + Leaflet**. It also integrates **Google Gemini AI** for smart location-based Q&A.

---

## Features

-  Dynamic UHI risk mapping using **MODIS LST** and **Sentinel-2** data
-  Visualize maps on an interactive **React Leaflet map**
-  Ask location-based or environment-related questions with **Gemini Pro**
-  Fully hosted backend on **FastAPI + Google Cloud Run**

---

## Project Structure
## 🧱 Project Structure

```bash
UHI/
├── main.py                 # FastAPI backend - handles GEE + Gemini logic
├── service-account.json    # GEE service account credentials
├── requirements.txt        # Backend dependencies
├── env/                    # Python virtual environment (optional)
├── README.md               # Project documentation
├── frontend/               # React frontend
│   ├── public/             # Static files and index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── GeminiQuery.js   # Component for Gemini Q&A interface
│   │   │   └── UHIMap.js        # Component for interactive UHI Leaflet map
│   │   ├── App.js               # Main React component combining UI
│   │   └── index.js             # React DOM entry point
│   ├── package.json            # React project config
│   └── .gitignore              # Ignored frontend files
```

---

## ⚙️ Prerequisites

- ✅ Node.js and npm
- ✅ Python 3.9+
- ✅ Google Earth Engine enabled
- ✅ Gemini API access and key
- ✅ Google Cloud project + service account with GEE permissions

---

## 🧪 Backend Setup (FastAPI + GEE)

1. **Create and activate a virtual environment**:

```bash
cd UHI
python -m venv env
source env/bin/activate  # or `env\Scripts\activate` on Windows

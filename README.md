# 🎬 Movie Discovery Application

A modern movie discovery application that allows users to explore trending movies, search for titles seamlessly, and track analytics on search queries.

> 🌐 **Regional Network Note:** This app fetches live data from TMDB. If movie data or images fail to load, your ISP may be blocking the TMDB API endpoints. Turning on **Cloudflare WARP** or using a VPN will resolve this instantly.

## 🚀 Features
* **Live TMDB Data Fetching:** Displays real-time popular and trending movies.
* **Debounced Search:** Optimizes network calls while typing to prevent API spamming.
* **Backend Search Metrics:** Tracks search term counts and popular trends using Appwrite Databases.
* **Responsive Layout:** Beautiful grid interface built completely with Tailwind CSS.

## 🛠️ Tech Stack
* **Frontend:** React, Vite, Tailwind CSS
* **Backend/Database:** Appwrite Cloud
* **API Data:** The Movie Database (TMDB) API

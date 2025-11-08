# Pocket Watcher 👁️

A web application for tracking Ethereum wallet portfolios, including ETH balance and NFT collections with real-time valuation.

> ⚠️ **Note:** This project uses outdated dependencies and is no longer actively maintained.

## Overview

Pocket Watcher allows you to monitor any Ethereum wallet's portfolio by simply entering the wallet address. The app fetches:

- ETH balance and current USD value
- All NFT collections owned by the wallet
- Floor prices for each NFT collection
- Total net worth calculation (ETH + NFTs)

## Tech Stack

### Frontend

- **React 17.0.2** - UI framework
- **React Router v6** - Client-side routing
- **Create React App** - Build tooling
- **CSS3** - Custom styling

### Backend

- **Node.js** - JavaScript runtime (v14.4.0)
- **Express.js** - Web server framework
- **CORS** - Cross-origin resource sharing
- **Got** - HTTP request library

### APIs

- **OpenSea API** - NFT collection data and floor prices
- **Etherscan API** - Ethereum balance queries
- **CoinMarketCap API** - ETH/USD price conversion

## Features

- 🔍 **Wallet Search** - Enter any Ethereum address to view portfolio
- 💰 **ETH Balance** - See current ETH holdings and USD value
- 🖼️ **NFT Collections** - View all NFT collections with images
- 📊 **Floor Price Tracking** - Real-time floor prices for each collection
- 💎 **Net Worth Calculator** - Total portfolio value in ETH and USD
- 🔗 **OpenSea Integration** - Direct links to collection pages
- ⚡ **Real-time Data** - Live API calls for up-to-date information

## Project Structure

```
Pocket-Watcher-Web-App/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # React components
│       │   ├── HomePage.js
│       │   ├── SearchAddress.js
│       │   ├── InformationPage.js
│       │   ├── RetrievingInfo.js
│       │   ├── Inventory.js
│       │   ├── LoadingScreen.js
│       │   └── Footer.js
│       ├── assets/        # Images
│       └── App.js         # Main app component
├── server/
│   └── index.js           # Express API server
└── package.json           # Backend dependencies
```

## Getting Started

### Prerequisites

- Node.js v14.4.0 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Pocket-Watcher-Web-App.git
cd Pocket-Watcher-Web-App
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd client
npm install
cd ..
```

### Running Locally

1. Start the backend server:

```bash
npm start
```

2. In a separate terminal, start the frontend development server:

```bash
cd client
npm start
```

The app will open at `http://localhost:3000` and the API will run on `http://localhost:5000`.

### Building for Production

Build the React frontend:

```bash
npm run build
```

This command installs client dependencies and creates an optimized production build in `client/build`.

## API Endpoint

### GET `/api?address={ethAddress}`

Fetches portfolio data for a given Ethereum address.

**Parameters:**

- `address` - Valid Ethereum wallet address (required)

**Response:**

```json
{
  "ethBalance": "1.234",
  "ethPrice": 2500.0,
  "collections": [
    {
      "name": "Collection Name",
      "count": 5,
      "floorPrice": 0.5,
      "image": "https://...",
      "slug": "collection-slug"
    }
  ],
  "totalNftValue": 2.5,
  "totalValue": 3.734
}
```

## Deployment

The app is configured for Heroku deployment:

1. The `start` script runs the Express server
2. The `build` script prepares the React frontend
3. Node version is locked to v14.4.0 in `engines`

## How It Works

1. User enters an Ethereum wallet address
2. Frontend routes to the information page with the address
3. Backend API endpoint fetches data from multiple sources:
   - Etherscan for ETH balance
   - CoinMarketCap for current ETH/USD price
   - OpenSea for NFT collections and floor prices
4. Server aggregates data and calculates total portfolio value
5. Frontend displays the results with collection cards and net worth summary

## Performance Notes

- Loading times vary based on the number of NFTs in a wallet
- Larger wallets may take longer to process
- A loading screen with disclaimer is shown during data fetching

---

**Disclaimer:** This tool is for informational purposes only. Floor prices are estimates and actual NFT values may vary based on individual traits and market conditions.

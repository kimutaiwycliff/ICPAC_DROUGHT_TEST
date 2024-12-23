# Drought Data Visualization App

This project is a web application designed to visualize drought data over time for the East Africa Region. It fetches data from an external API and displays it in an interactive line graph, helping users understand the current drought conditions based on different data sources.

The application is built with **React**, **Docker**, and **Nginx**. It uses **Chart.js** to visualize the drought data and displays multiple date values for different drought indicators.

## Features

- **Drought Data Visualization**: Displays a line graph with data from multiple sources (e.g., Fapan, SMA, SPI).
- **Responsive Design**: Fully responsive, works across desktop, tablet, and mobile devices.
- **Dockerized Deployment**: The application can be containerized using Docker for easy deployment.
- **Fetches Data from an API**: The app fetches drought-related data from a remote API and renders it dynamically in a chart.

## Technologies Used

- **Frontend**: React, Chart.js
- **Backend**: None (API data is fetched from an external source)
- **Styling**: TailwindCSS (for utility-first styling)
- **Build Tool**: Webpack (bundles the React app)
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx (serves the built React app)

## Prerequisites

Before getting started, make sure you have the following installed:

- [Docker](https://www.docker.com/products/docker-desktop) (including Docker Compose)
- [Node.js](https://nodejs.org/) (if building locally without Docker)

## Setup & Installation

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/kimutaiwycliff/ICPAC_DROUGHT_TEST.git

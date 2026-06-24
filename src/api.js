// src/api.js
// Handles fetching portfolio data from the Google Apps Script Web App.

const API_URL =
  'https://script.google.com/macros/s/AKfycbzyPlHJw0fCSl28fg6agcNu0Smia8VcTkmttl-1ItxfK-aZ5Nt4gmztbphXjRzth1wbEg/exec'

/**
 * Fetch portfolio payload from the Google Sheets backend.
 * @returns {Promise<Object>} The `data` payload from the API response.
 */
export async function fetchPortfolioData() {
  const response = await fetch(API_URL, {
    method: 'GET',
    redirect: 'follow',
    cache: 'no-cache',
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: Failed to connect to Google Sheets API`)
  }

  const json = await response.json()

  if (!json.success) {
    throw new Error(json.error ?? 'Unknown API error')
  }

  return json.data
}

// src/main.js
import './style.css'
import { fetchPortfolioData } from './api.js'
import {
  renderProfile,
  renderSkills,
  renderExperience,
  renderEducation,
  renderProjects,
  renderRecommendations,
} from './renderer.js'

async function init() {
  try {
    const payload = await fetchPortfolioData()

    renderProfile(payload.profile)
    renderSkills(payload.skills)
    renderExperience(payload.experiences)
    renderEducation(payload.education)
    renderProjects(payload.projects)
    renderRecommendations(payload.recommendations)

    hideLoader()
  } catch (err) {
    console.error('Failed to load portfolio data:', err)
    alert('Failed to load integrated portfolio data: ' + err.message)
  }
}

function hideLoader() {
  const loader = document.getElementById('loading-screen')
  loader.style.transition = 'opacity 0.4s ease'
  loader.style.opacity = '0'
  setTimeout(() => loader.classList.add('hidden'), 400)
}

init()

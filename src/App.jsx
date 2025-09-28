import { useState } from "react";
import "./App.css";
import freshB4Logo from "./assets/freshB4_mascot.png";

function App() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(
      `Thank you for your interest! We'll keep you updated on FreshB4's launch.`
    );
    setEmail("");
  };

  return (
    <div className="main">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-badge">🏆 Hackathon Project 2025</div>
        <div className="hero-logo">
          <img src={freshB4Logo} alt="FreshB4 Logo" className="logo-image" />
        </div>
        <h1 className="hero-title">FreshB4</h1>
        <h2 className="hero-subtitle">Less Waste, More Taste</h2>
        <p className="hero-description">
          AI-powered food freshness detection and pantry management that helps
          you reduce food waste, save money, and discover delicious recipes
          using ingredients you already have.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">35%</span>
            <span className="stat-label">Food Waste Reduced</span>
          </div>
          <div className="stat">
            <span className="stat-number">$1500+</span>
            <span className="stat-label">Annual Savings</span>
          </div>
          <div className="stat">
            <span className="stat-number">AI-Powered</span>
            <span className="stat-label">Smart Analysis</span>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">How FreshB4 Works</h2>
        <div className="features-grid">
          {[
            {
              icon: "📸",
              title: "Smart Camera Analysis",
              text: "Simply scan your food with our AI-powered camera. Get instant freshness analysis using advanced computer vision and machine learning.",
              tech: "Expo Camera + Gemini AI",
            },
            {
              icon: "📊",
              title: "Intelligent Pantry Management",
              text: "Track all your items with color-coded freshness indicators. Never let food spoil again with smart expiry tracking.",
              tech: "React Native + Real-time Updates",
            },
            {
              icon: "🔔",
              title: "Proactive Notifications",
              text: "Get timely alerts for items approaching expiry. Stay ahead of spoilage with intelligent notification system.",
              tech: "Push Notifications",
            },
            {
              icon: "👨‍🍳",
              title: "AI Recipe Generation",
              text: "Transform expiring ingredients into delicious meals. Get personalized recipes with step-by-step instructions.",
              tech: "AI-Powered Suggestions",
            },
          ].map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <div className="tech-badge">{feature.tech}</div>
            </div>
          ))}
        </div>
      </section>

      {/* App Screenshots Gallery */}
      <section className="screenshots">
        <h2 className="section-title">Live App Screenshots</h2>
        <p className="screenshots-subtitle">
          See our fully functional React Native app in action
        </p>

        <div className="screenshots-gallery">
          <div className="screenshot-card">
            <div className="screenshot-frame">
              <div className="screenshot-content scanner">
                <div className="status-bar">4:14</div>
                <div className="app-header">FreshB4 Scanner</div>
                <div className="scanner-content">
                  <h2 className="scanner-title">Food Scanner</h2>
                  <p className="scanner-desc">
                    Take a photo or select from gallery to analyze food
                    freshness
                  </p>
                  <div className="ai-status">� AI Analysis Active</div>
                  <div className="action-buttons">
                    <div className="btn-take-photo">📷 Take Photo</div>
                    <div className="btn-gallery">🖼️ Choose from Gallery</div>
                  </div>
                </div>
                <div className="bottom-nav">
                  <span className="nav-active">📷 Food Scanner</span>
                  <span>🍽️ My Pantry</span>
                  <span>📖 Recipes</span>
                </div>
              </div>
            </div>
            <div className="screenshot-info">
              <h3>Smart Camera Scanner</h3>
              <p>
                AI-powered food analysis with camera integration and gallery
                selection
              </p>
            </div>
          </div>

          <div className="screenshot-card">
            <div className="screenshot-frame">
              <div className="screenshot-content pantry">
                <div className="status-bar">4:14</div>
                <div className="app-header">FreshB4 Pantry</div>
                <div className="pantry-content">
                  <h2 className="pantry-title">My Pantry</h2>
                  <p className="pantry-desc">
                    7 items • Track freshness and reduce waste
                  </p>
                  <div className="pantry-stats">
                    <div className="stat urgent">
                      <span>3</span>
                      <br />
                      URGENT
                    </div>
                    <div className="stat soon">
                      <span>1</span>
                      <br />
                      SOON
                    </div>
                    <div className="stat fresh">
                      <span>3</span>
                      <br />
                      FRESH
                    </div>
                  </div>
                  <div className="alert-urgent">
                    <div className="alert-icon">⚠️</div>
                    <div className="alert-content">
                      <h4>Items Spoiled!</h4>
                      <p>3 item(s) have spoiled and should be discarded</p>
                      <small>Yellow Onion, Not a food item, Lettuce</small>
                    </div>
                    <button className="btn-dispose">🗑️ Dispose</button>
                  </div>
                  <div className="alert-warning">
                    <div className="alert-icon">⏰</div>
                    <div className="alert-content">
                      <h4>Expiring Soon</h4>
                      <p>1 item(s) expire in 3 days or less</p>
                      <small>Banana</small>
                    </div>
                    <button className="btn-recipes">🍳 Recipes</button>
                  </div>
                  <div className="pantry-health">
                    <span>📊 Pantry Health: 43%</span>
                    <small>7 items total, 4 need attention</small>
                  </div>
                </div>
                <div className="bottom-nav">
                  <span>📷 Food Scanner</span>
                  <span className="nav-active">🍽️ My Pantry</span>
                  <span>📖 Recipes</span>
                </div>
              </div>
            </div>
            <div className="screenshot-info">
              <h3>Intelligent Pantry Management</h3>
              <p>
                Color-coded freshness tracking with smart alerts and health
                monitoring
              </p>
            </div>
          </div>

          <div className="screenshot-card">
            <div className="screenshot-frame">
              <div className="screenshot-content recipes">
                <div className="status-bar">4:15</div>
                <div className="app-header">FreshB4 Recipes</div>
                <div className="recipes-content">
                  <h2 className="recipes-title">Recipe Generator</h2>
                  <p className="recipes-desc">
                    AI-powered recipes using your pantry ingredients
                  </p>
                  <div className="recipe-stats">
                    <div className="rstat urgent">
                      <span>5</span>
                      <br />
                      Urgent Items
                    </div>
                    <div className="rstat fresh">
                      <span>5</span>
                      <br />
                      Fresh Items
                    </div>
                    <div className="rstat total">
                      <span>10</span>
                      <br />
                      Total Items
                    </div>
                  </div>
                  <div className="generate-btn">✨ Generate New Recipes</div>
                  <div className="recipe-section">
                    <h3>Your Personalized Recipes</h3>
                    <p>Recipes prioritizing items that expire soon</p>
                    <div className="recipe-card">
                      <h4>Golden Chicken & Spinach Savory Strata</h4>
                      <div className="recipe-badge">USE URGENT ITEMS</div>
                      <p>
                        A comforting baked dish perfect for using up stale
                        bread, tender chicken, and fresh spinach...
                      </p>
                      <div className="recipe-meta">
                        <span>⏱️ 45 minutes</span>
                        <span>📊 Medium</span>
                      </div>
                      <p className="ingredients">
                        <strong>Ingredients from your pantry:</strong>
                        <br />
                        Bread, Chicken Breast, Spinach, Milk...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bottom-nav">
                  <span>📷 Food Scanner</span>
                  <span>🍽️ My Pantry</span>
                  <span className="nav-active">📖 Recipes</span>
                </div>
              </div>
            </div>
            <div className="screenshot-info">
              <h3>AI Recipe Generation</h3>
              <p>
                Smart recipes that prioritize expiring ingredients with detailed
                cooking instructions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="inspiration">
        <h2 className="section-title">The Problem We're Solving</h2>
        <div className="problem-stats">
          <div className="stat-card">
            <div className="stat-icon">🗑️</div>
            <div className="stat-value">35-38%</div>
            <div className="stat-desc">of food supply wasted in the US</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-value">$1500-$3000</div>
            <div className="stat-desc">lost per family annually</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌍</div>
            <div className="stat-value">250 lbs</div>
            <div className="stat-desc">of food wasted per household</div>
          </div>
        </div>
        <div className="inspiration-text">
          <p>
            Food waste is a massive global problem contributing to climate
            change through methane emissions. As college students, we
            experienced firsthand the challenge of managing groceries and
            preventing waste.
          </p>
          <p>
            <strong>FreshB4 was built to solve this:</strong> Using cutting-edge
            AI and mobile technology, we're making it easier than ever to reduce
            food waste, save money, and eat sustainably.
          </p>
        </div>
      </section>

      {/* Team & Technology */}
      <section className="tech-stack">
        <h2 className="section-title">Built With Modern Technology</h2>
        <div className="tech-grid">
          <div className="tech-category">
            <h3>Mobile Development</h3>
            <div className="tech-items">
              <span className="tech-item">React Native</span>
              <span className="tech-item">Expo</span>
              <span className="tech-item">JavaScript</span>
            </div>
          </div>
          <div className="tech-category">
            <h3>AI & Analysis</h3>
            <div className="tech-items">
              <span className="tech-item">Google Gemini API</span>
              {/* <span className="tech-item">Computer Vision</span>
              <span className="tech-item">Machine Learning</span> */}
            </div>
          </div>
          <div className="tech-category">
            <h3>Features</h3>
            <div className="tech-items">
              <span className="tech-item">Camera Integration</span>
              <span className="tech-item">Push Notifications</span>
              <span className="tech-item">Firebase Firestore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h3>Ready to Reduce Food Waste?</h3>
        <p>Join the movement towards sustainable living with FreshB4</p>
        <div className="cta-form">
          <input
            type="email"
            placeholder="Enter your email for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Get Notified</button>
        </div>
        <div className="cta-links">
          <a
            href="https://youtube.com/shorts/sS7qIE8epnE"
            className="cta-link"
            target="_blank"
          >
            View Demo
          </a>
          <a href="mailto:team@freshb4.com" className="cta-link">
            Contact Team
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

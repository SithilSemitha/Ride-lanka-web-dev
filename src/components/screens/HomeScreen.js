"use client";

import { useState } from "react";
import Sidebar from "../Sidebar";

export default function HomeScreen({ active, showScreen }) {
  const [activeCategory, setActiveCategory] = useState("beach");

  return (
    <div id="screen-home" className={`screen ${active ? "active" : ""}`}>
      <div className="main-layout">
        <Sidebar
          activeItem="home"
          userName="Sithil Semitha"
          userRole="Trip planner for Sri Lanka"
          onNavigate={showScreen}
        />
        <div className="main-content">
          <div className="topbar">
            <div>
              <h1>Plan your Sri Lanka trip 🌴</h1>
              <div className="subtitle">Good morning, traveler! Design your perfect journey across Sri Lanka.</div>
            </div>
            <div className="topbar-actions">
              <div className="search-bar">
                <span className="icon">🔍</span>
                <input placeholder="Search places, trips or experiences" />
              </div>
              <div className="notif-btn" onClick={() => showScreen("screen-notif")} role="button" tabIndex={0}>🔔<span className="notif-dot" /></div>
              <div className="avatar" onClick={() => showScreen("screen-profile")} role="button" tabIndex={0} title="Sithil Semitha">SS</div>
            </div>
          </div>

          <div className="hero-banner">
            <div className="hero-text">
              <h2>Build your dream<br />trip in Sri Lanka</h2>
              <p>Choose destinations, dates and travelers to generate smart trip plans, just like in the mobile Ride Lanka app.</p>
              <div className="hero-search">
                <div className="hero-field">
                  <label>Starting city</label>
                  <input placeholder="e.g. Colombo" />
                </div>
                <div className="hero-field">
                  <label>Main destination</label>
                  <input placeholder="e.g. Kandy, Ella, Galle" />
                </div>
                <div className="hero-field">
                  <label>Start date</label>
                  <input type="date" />
                </div>
                <div className="hero-field">
                  <label>End date</label>
                  <input type="date" />
                </div>
                <div className="hero-field">
                  <label>Travelers</label>
                  <input placeholder="2 Adults" />
                </div>
                <button type="button" className="hero-search-btn">Plan Trip</button>
              </div>
            </div>
          </div>

          <div className="section-header"><h3>Trip style</h3></div>
          <div className="categories">
            {[
              { id: "beach", icon: "🏖️", label: "Beach & Relax" },
              { id: "hill", icon: "⛰️", label: "Hill Country" },
              { id: "cultural", icon: "🏛️", label: "Cultural Triangle" },
              { id: "nature", icon: "🌿", label: "Nature & Wildlife" },
              { id: "food", icon: "🍛", label: "Food & Local Life" },
              { id: "family", icon: "👨‍👩‍👧‍👦", label: "Family Friendly" },
            ].map((cat) => (
              <div
                key={cat.id}
                className={`cat-chip ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
                role="button"
                tabIndex={0}
              >
                <span className="icon">{cat.icon}</span> {cat.label}
              </div>
            ))}
          </div>

          <div className="section-header">
            <h3>Popular itineraries in Sri Lanka</h3>
            <span className="see-all">View all trips →</span>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { title: "Cultural Triangle Explorer", location: "Sigiriya · Dambulla · Kandy", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80", badge: "7 days · From LKR 95,000", rating: "4.8", trips: "2,134", price: "LKR 95,000" },
              { title: "South Coast Highlights", location: "Colombo · Galle · Mirissa", img: "https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=400&q=80", badge: "5 days · From LKR 72,000", rating: "4.7", trips: "1,042", price: "LKR 72,000" },
              { title: "Hill Country & Safari", location: "Kandy · Ella · Yala", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80", badge: "10 days · From LKR 145,000", rating: "4.9", trips: "864", price: "LKR 145,000" },
            ].map((card, i) => (
              <div key={i} className="dest-card" onClick={() => showScreen("screen-trips")} role="button" tabIndex={0}>
                <div className="card-img">
                  <img src={card.img} alt={card.title} />
                  <span className="card-badge">{card.badge}</span>
                  <div className="card-fav">⭐</div>
                </div>
                <div className="card-body">
                  <h4>{card.title}</h4>
                  <div className="card-location">{card.location}</div>
                  <div className="card-footer">
                    <span className="card-rating">⭐ {card.rating} ({card.trips} trips)</span>
                    <span className="card-price">{card.price}<span> per person</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-header">
            <h3>Top places in Sri Lanka</h3>
            <span className="see-all">See all destinations →</span>
          </div>
          <div className="cards-grid cards-grid-3">
            {[
              { title: "Colombo", location: "Capital city · 2–3 days", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&q=80", badge: "City & nightlife", rating: "4.6", reviews: "5,240", extra: "Best time: Dec–Mar" },
              { title: "Ella", location: "Tea country views · 2–4 days", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80", badge: "Hill country", rating: "4.9", reviews: "3,018", extra: "Best time: Feb–Apr" },
              { title: "Galle & South Coast", location: "Beaches & old town · 2–4 days", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&q=80", badge: "Coastal & heritage", rating: "4.8", reviews: "4,102", extra: "Best time: Nov–Apr" },
            ].map((card, i) => (
              <div key={i} className="dest-card" role="button" tabIndex={0}>
                <div className="card-img">
                  <img src={card.img} alt={card.title} />
                  <span className="card-badge">{card.badge}</span>
                  <div className="card-fav">❤️</div>
                </div>
                <div className="card-body">
                  <h4>{card.title}</h4>
                  <div className="card-location">{card.location}</div>
                  <div className="card-footer">
                    <span className="card-rating">⭐ {card.rating} ({card.reviews} reviews)</span>
                    <span className="card-price">{card.extra}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

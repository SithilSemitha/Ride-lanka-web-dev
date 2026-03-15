"use client";

import Sidebar from "../Sidebar";

export default function NotificationsScreen({ active, showScreen }) {
  const notifications = [
    { icon: "✈️", title: "Trip Reminder", text: "Your Maldives trip starts in 20 days! Make sure you've completed all bookings and have your documents ready.", time: "2h ago", unread: true },
    { icon: "💰", title: "Price Drop Alert!", text: "Santorini Villa dropped by $40/night! Book now while this deal lasts.", time: "4h ago", unread: true },
    { icon: "👤", title: "New Follower", text: "Jessica Lane started following you. She's visited 48 destinations!", time: "Yesterday", unread: true },
    { icon: "⭐", title: "Review Request", text: "How was your Bali trip? Share your experience to help other travelers.", time: "2 days ago", unread: false },
    { icon: "🎉", title: "Achievement Unlocked!", text: "Congratulations! You've visited 10+ countries. You've earned the \"World Explorer\" badge!", time: "3 days ago", unread: false },
    { icon: "❤️", title: "Post Liked", text: "Ahmed Rashid liked your Bali post — \"Amazing views from Tegalalang Rice Terrace!\"", time: "4 days ago", unread: false },
  ];

  return (
    <div id="screen-notif" className={`screen ${active ? "active" : ""}`}>
      <div className="main-layout">
        <Sidebar activeItem="notif" logoIcon="🌍" logoText="Dream" logoEm="Trip" userName="Sithil Semitha" userRole="Explorer · Pro" onNavigate={showScreen} />
        <div className="main-content">
          <div className="topbar">
            <div><h1>Notifications 🔔</h1><div className="subtitle">3 unread notifications</div></div>
            <button type="button" className="btn-teal" style={{ width: "auto", padding: "10px 20px", fontSize: 13 }}>Mark all read</button>
          </div>
          <div style={{ maxWidth: 680 }}>
            {notifications.map((n, i) => (
              <div key={i} className={`notif-item ${n.unread ? "unread" : ""}`}>
                <div className="notif-icon">{n.icon}</div>
                <div className="notif-body"><h5>{n.title}</h5><p>{n.text}</p></div>
                <div className="notif-time">{n.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

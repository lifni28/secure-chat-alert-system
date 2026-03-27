function goToDashboard() {
  let user = document.getElementById("username").value;
  localStorage.setItem("user", user);
  window.location.href = "dashboard.html";
}

function analyze() {
  let device = document.getElementById("device").value;
  let location = document.getElementById("location").value;
  let messages = document.getElementById("messages").value;

  localStorage.setItem("device", device);
  localStorage.setItem("location", location);
  localStorage.setItem("messages", messages);

  window.location.href = "result.html";
}

window.onload = function () {
  if (window.location.pathname.includes("result.html")) {
    let device = localStorage.getItem("device");
    let location = localStorage.getItem("location");
    let messages = localStorage.getItem("messages");

    let issues = [];
    let risk = 0;

    if (device === "Unknown Device") {
      issues.push("⚠️ Suspicious Device Detected");
      risk++;
    }

    if (location === "New Location") {
      issues.push("📍 Unusual Login Location");
      risk++;
    }

    if (messages > 20) {
      issues.push("💬 Abnormal Activity Detected");
      risk++;
    }

    let statusDiv = document.getElementById("status");
    let issuesDiv = document.getElementById("issues");
    let alertDiv = document.getElementById("alert");

    if (risk === 0) {
      statusDiv.innerHTML = "<h3 class='safe'>✅ Safe Activity</h3>";
    } else {
      statusDiv.innerHTML = "<h3 class='danger'>🚨 Suspicious Activity Detected</h3>";
      alertDiv.innerHTML = "⚠️ Warning: Possible Unauthorized Access Detected <br> Alert sent to user and security system";
    }

    issuesDiv.innerHTML = issues.join("<br>");

    // Risk level
    if (risk == 1) statusDiv.innerHTML += "<p>Risk: Low</p>";
    else if (risk == 2) statusDiv.innerHTML += "<p>Risk: Medium</p>";
    else if (risk >= 3) statusDiv.innerHTML += "<p>Risk: High</p>";
  }
};
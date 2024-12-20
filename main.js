// Function to calculate the Percentage Score (PS)
function calculatePercentageScore(rs, hps) {
  if (hps === 0) return 0; // Avoid division by zero
  return (rs / hps) * 100;
}

// Function to calculate the Weighted Score (WS)
function calculateWeightedScore(ps, weight) {
  return ps * weight;
}

// Written Works Calculation
function calculateWrittenWorks() {
  const rs = parseFloat(document.getElementById("wwMyTextBox").value);
  const hps = parseFloat(document.getElementById("wwMyTextBox2").value);
  const resultDiv = document.getElementById("wwResult");

  if (!isNaN(rs) && !isNaN(hps)) {
    const ps = calculatePercentageScore(rs, hps);
    resultDiv.innerHTML = `Percentage Score (PS): ${ps.toFixed(2)}%`;
  } else {
    resultDiv.innerHTML = "Please enter valid numbers for RS and HPS.";
  }
}

// Written Works Weighted Score Calculation
function calculateWrittenWorksWS() {
  const rs = parseFloat(document.getElementById("wwMyTextBox").value);
  const hps = parseFloat(document.getElementById("wwMyTextBox2").value);
  const weight = 0.2; // Fixed weight for Written Works
  const wsDiv = document.getElementById("wwWSResult");

  if (!isNaN(rs) && !isNaN(hps)) {
    const ps = calculatePercentageScore(rs, hps);
    const ws = calculateWeightedScore(ps, weight);
    wsDiv.innerHTML = `Weighted Score (WS): ${ws.toFixed(2)}`;
  } else {
    wsDiv.innerHTML = "Please calculate the Percentage Score (PS) first.";
  }
}

// Performance Tasks Calculation
function calculatePerformanceTasks() {
  const rs = parseFloat(document.getElementById("ptMyTextBox").value);
  const hps = parseFloat(document.getElementById("ptMyTextBox2").value);
  const resultDiv = document.getElementById("ptResult");

  if (!isNaN(rs) && !isNaN(hps)) {
    const ps = calculatePercentageScore(rs, hps);
    resultDiv.innerHTML = `Percentage Score (PS): ${ps.toFixed(2)}%`;
  } else {
    resultDiv.innerHTML = "Please enter valid numbers for RS and HPS.";
  }
}

// Performance Tasks Weighted Score Calculation
function calculatePerformanceTasksWS() {
  const rs = parseFloat(document.getElementById("ptMyTextBox").value);
  const hps = parseFloat(document.getElementById("ptMyTextBox2").value);
  const weight = 0.6; // Fixed weight for Performance Tasks
  const wsDiv = document.getElementById("ptWSResult");

  if (!isNaN(rs) && !isNaN(hps)) {
    const ps = calculatePercentageScore(rs, hps);
    const ws = calculateWeightedScore(ps, weight);
    wsDiv.innerHTML = `Weighted Score (WS): ${ws.toFixed(2)}`;
  } else {
    wsDiv.innerHTML = "Please calculate the Percentage Score (PS) first.";
  }
}

// Quarterly Assessment Calculation
function calculateQuarterlyAssessment() {
  const rs = parseFloat(document.getElementById("qaMyTextBox").value);
  const hps = parseFloat(document.getElementById("qaMyTextBox2").value);
  const resultDiv = document.getElementById("qaResult");

  if (!isNaN(rs) && !isNaN(hps)) {
    const ps = calculatePercentageScore(rs, hps);
    resultDiv.innerHTML = `Percentage Score (PS): ${ps.toFixed(2)}%`;
  } else {
    resultDiv.innerHTML = "Please enter valid numbers for RS and HPS.";
  }
}

// Quarterly Assessment Weighted Score Calculation
function calculateQuarterlyAssessmentWS() {
  const rs = parseFloat(document.getElementById("qaMyTextBox").value);
  const hps = parseFloat(document.getElementById("qaMyTextBox2").value);
  const weight = 0.2; // Fixed weight for Quarterly Assessment
  const wsDiv = document.getElementById("qaWSResult");

  if (!isNaN(rs) && !isNaN(hps)) {
    const ps = calculatePercentageScore(rs, hps);
    const ws = calculateWeightedScore(ps, weight);
    wsDiv.innerHTML = `Weighted Score (WS): ${ws.toFixed(2)}`;
  } else {
    wsDiv.innerHTML = "Please calculate the Percentage Score (PS) first.";
  }
}

// Initial Grade Calculation
function calculateInitialGrade() {
  const wwWS = parseFloat(document.getElementById("wwWSResult").textContent.replace('Weighted Score (WS): ', '')) || 0;
  const ptWS = parseFloat(document.getElementById("ptWSResult").textContent.replace('Weighted Score (WS): ', '')) || 0;
  const qaWS = parseFloat(document.getElementById("qaWSResult").textContent.replace('Weighted Score (WS): ', '')) || 0;
  const igResultDiv = document.getElementById("igResult");

  const initialGrade = wwWS + ptWS + qaWS;

  if (!isNaN(initialGrade)) {
    igResultDiv.innerHTML = `Initial Grade (IG): ${initialGrade.toFixed(2)}`;
  } else {
    igResultDiv.innerHTML = "Please calculate all WS values before computing the Initial Grade.";
  }
}

// Attach functions to buttons
document.getElementById("wwSubmit").onclick = calculateWrittenWorks;
document.getElementById("wwWSSubmit").onclick = calculateWrittenWorksWS;
document.getElementById("ptSubmit").onclick = calculatePerformanceTasks;
document.getElementById("ptWSSubmit").onclick = calculatePerformanceTasksWS;
document.getElementById("qaSubmit").onclick = calculateQuarterlyAssessment;
document.getElementById("qaWSSubmit").onclick = calculateQuarterlyAssessmentWS;
document.getElementById("igSubmit").onclick = calculateInitialGrade;
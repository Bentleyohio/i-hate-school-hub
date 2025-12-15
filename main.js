<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>I hate school hub</title>

<style>
body {
  margin: 0;
  min-height: 100vh;
  background: black;
  color: #00ff9c;
  font-family: "Courier New", monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

canvas { position: fixed; inset: 0; z-index: -1; }

.terminal {
  background: rgba(0,0,0,.85);
  border: 1px solid #00ff9c;
  padding: 20px;
  width: 800px;
  box-shadow: 0 0 25px rgba(0,255,156,.4);
  position: relative;
  overflow-y: auto;
  max-height: 80vh;
}

h1 { margin: 0 0 10px; }

#terminalText {
  white-space: pre-wrap;
  line-height: 1.4;
  min-height: 120px;
}

.cursor {
  display:inline-block;
  width:10px;
  height:18px;
  background:#00ff9c;
  animation: blink 1s infinite;
}

@keyframes blink { 50% { opacity:0; } }

button {
  width:100%;
  margin-top:10px;
  background:black;
  color:#00ff9c;
  border:1px solid #00ff9c;
  padding:10px;
  font-family:inherit;
  cursor:pointer;
  text-align:left;
}

button:hover { background:#00ff9c; color:black; }

.credits-btn {
  position:absolute;
  bottom:10px;
  right:10px;
  width:auto;
  font-size:12px;
}

.extra-btn {
  position:absolute;
  bottom:10px;
  right:90px;
  width:auto;
  font-size:12px;
}

.credits-box {
  display:none;
  margin-top:10px;
  border-top:1px solid #00ff9c;
  padding-top:8px;
}
</style>
</head>

<body>
<canvas id="matrix"></canvas>

<div class="terminal">
<h1>I hate school hub</h1>
<div id="terminalText"></div><span class="cursor"></span>

<button onclick="openBlank()">> launch_about_blank</button>
<button onclick="launchBritishMan()">> launch_british_man</button>
<button onclick="runEliteGamez()">> elite_gamez</button>

<button class="extra-btn" onclick="openExtra()">extra</button>
<button class="credits-btn" onclick="openCredits()">credits</button>
<div id="creditsBox" class="credits-box"></div>
</div>

<!-- LOAD ALL YOUR JS FROM GITHUB -->
<script src="https://cdn.jsdelivr.net/gh/Bentleyohio/i-hate-school-hub@main/main.js"></script>
</body>
</html>

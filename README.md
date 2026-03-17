# Tactical Building Clearance (Working Title)

A procedural **2D tactical strategy game** built using **HTML, CSS, and JavaScript**.
The player commands a SWAT-style squad tasked with clearing **randomly generated buildings**, rescuing hostages, collecting evidence, and neutralizing threats.

The focus of the game is **planning, information management, and tactical decision-making**, not fast shooting.

---

# Core Concept

Each mission takes place in a **procedurally generated multi-floor building**.

The player:

* controls a tactical squad
* explores unknown rooms
* reacts to enemy behavior
* rescues hostages
* collects evidence
* adapts to dynamic events

Rooms are initially **hidden**, and information is revealed gradually through exploration, scanning tools, and investigation.

Every building is different, which creates **high replayability**.

---

# Gameplay Philosophy

The game follows three design principles:

### 1. Tactical Decision Making

Players plan actions carefully rather than relying on reflexes.

### 2. Information Uncertainty

The player rarely has complete knowledge of the building.

### 3. Emergent Situations

Systems interact to create unpredictable scenarios.

---

# Technology Stack

* HTML
* CSS
* JavaScript (Vanilla)

Rendering options:

* CSS Grid (initial implementation)
* Canvas (possible upgrade later)

The architecture is designed to be **modular**, allowing new systems to plug in easily.

---

# Core Game Systems

## Procedural Building Generation

Each mission generates a building dynamically.

Building parameters include:

* building type
* number of floors
* room layout
* door placement
* enemy placement
* hostage placement
* evidence locations

Example building types:

Residential
Commercial
Abandoned / Scrapped

Each building type affects the room distribution.

Example:

Commercial buildings may contain:

* office rooms
* server rooms
* surveillance rooms
* storage rooms

---

## Grid Engine

The game world is based on a **tile grid**.

Each tile stores data such as:

* position
* room ID
* visibility
* entity presence
* lighting level

Example structure:

```
tile = {
  x: 5,
  y: 3,
  type: "floor",
  roomId: 2,
  visible: false,
  entity: null
}
```

---

## Fog of War

Rooms remain hidden until discovered.

States:

Hidden
Discovered
Visible

A room becomes visible when:

* the player opens a door
* the player enters the room
* a scanning tool reveals it

This mechanic allows **hidden enemies and ambushes**.

---

## Turn-Based Tactical System

Gameplay progresses through turns.

Typical cycle:

```
Player Turn
↓
Player Actions
↓
Enemy Turn
↓
Environment Updates
↓
Next Turn
```

Actions include:

* move
* open door
* breach door
* search room
* deploy tools

---

## Entity System

All characters and objects are entities.

Examples:

* squad operators
* enemies
* hostages

Example entity structure:

```
entity = {
  id: 1,
  type: "enemy",
  x: 10,
  y: 4,
  state: "idle"
}
```

---

# Tactical Mechanics

## Doors

Doors act as tactical chokepoints.

Door states:

Open
Closed
Locked
Barricaded

Player actions:

* open
* peek
* breach
* lockpick

Each action generates different noise levels.

---

## Sound System

Noise propagates through the building.

Examples of sound sources:

* gunshots
* breaches
* footsteps
* explosions

Sound radius influences enemy reactions.

Example:

```
gunshot radius = 5 rooms
footsteps radius = 1 room
```

Enemies may:

* investigate
* alert others
* retreat
* prepare ambush

---

## Lighting System

Lighting affects visibility and stealth.

Tile property:

```
tile.lightLevel = 0..3
```

Levels:

0 → dark
1 → dim
2 → normal
3 → bright

Players may disable building power to gain stealth advantages.

---

# Mission Systems

## Dynamic Objectives

Missions can evolve during gameplay.

Example progression:

```
Rescue Hostage
↓
Hostage Relocated
↓
Intercept Enemy Escort
```

---

## Hostage Behavior

Hostages are dynamic entities.

Possible states:

* calm
* panicked
* hiding
* fleeing

Their behavior changes depending on nearby threats.

---

## Enemy AI

Enemies use state-based behavior.

Example states:

Idle
Patrol
Investigate
Alert
Engage
Flee

Enemies may also coordinate using communication nodes.

---

# Evidence System

Evidence is tied to **rooms**, not individual objects.

This avoids immersion-breaking interactions with glowing objects.

Example evidence categories:

* digital
* documents
* weapons

Player actions:

Search Desk
Scan Electronics
Check Cabinets

Evidence may also trigger **evidence chains**, revealing new locations.

---

# Intelligence System

Before a mission begins, the player receives **partial information**.

Example briefing:

Location: Commercial Building
Hostages: 1–3
Suspects: 4–8
Possible explosives

Intel may be incomplete or inaccurate.

---

# Tactical Tools

The squad can use special tools:

Drone
Thermal Scanner
Door Camera
Breach Charges
Sniper Support

Each tool reveals information or changes tactical options.

---

# Environmental Systems

Buildings may contain dynamic elements:

* power systems
* traps
* hidden rooms
* destructible walls

These systems create emergent tactical situations.

---

# Escalation System

As the mission continues, the situation may escalate.

Example timeline:

Turn 5 → enemies alerted
Turn 10 → hostages moved
Turn 15 → reinforcements arrive

This encourages efficient planning.

---

# Procedural Story Seeds

Each mission begins with a generated scenario.

Example:

Drug Operation
Corporate Espionage
Hostage Situation

The scenario determines:

* enemy type
* room distribution
* evidence placement

---

# Debug Systems

Development tools include several debug overlays.

## Tile Debug

Shows tile metadata.

Example:

```
R3 V1
```

Meaning:

Room 3
Visible

---

## Entity Debug

Tracks entity states.

Example:

```
Enemy 2 | x:7 y:4 | patrol
```

---

## Sound Debug

Visualizes sound propagation.

Example:

```
1 2 3 2 1
2 3 4 3 2
3 4 5 4 3
```

---

## Evidence Debug

Displays which rooms contain evidence.

Example:

```
Room 4 → digital evidence
Room 7 → weapon cache
```

---

# Development Roadmap

## Phase 1

Grid engine
Tile rendering

---

## Phase 2

Room generation
Door placement

---

## Phase 3

Fog of war

---

## Phase 4

Entity system
Player movement

---

## Phase 5

Turn system

---

## Phase 6

Enemy AI

---

## Phase 7

Doors and tactical interactions

---

## Phase 8

Mission objectives

---

## Phase 9

Evidence and investigation systems

---

## Phase 10

Advanced mechanics:

* sound propagation
* lighting
* drones
* escalation events

---

# Project Structure

```
project-root/
│
├── index.html
├── style.css
├── package.json
│
└── src/
    └── js/
        ├── engine/
        │   ├── grid.js
        │   └── renderer.js
        │
        ├── generation/
        │   ├── buildingGenerator.js
        │   └── roomGenerator.js
        │
        ├── systems/
        │   ├── visibilitySystem.js
        │   ├── soundSystem.js
        │   └── evidenceSystem.js
        │
        ├── entities/
        │   ├── player.js
        │   └── enemy.js
        │
        └── missions/
            └── missionSystem.js
```

---

# Running Locally

This project uses Vite for fast development.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

---

# Design Goals

* Tactical gameplay over fast shooting
* High replayability through procedural generation
* Strong system interactions
* Modular architecture for easy expansion

---

# Inspiration

The project draws inspiration from several tactical and strategy games including:

* Door Kickers
* Frozen Synapse
* Invisible, Inc.

These games emphasize planning, visibility control, and tactical decision making.

---

# Current Status

Early development.

Focus is currently on building:

* the grid engine
* procedural building generator
* core tactical loop

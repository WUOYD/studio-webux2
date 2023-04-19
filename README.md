# README MashRoom
MashRoom was developed for studio_UxWebmobile2_2023 at Digital Ideation HSLU. The project is using vue.js, node.js, express, socket.io and howler.js. The Goal was creating a music sequencer with collaboration features for creating music together

## How to play?
Requirements: Node.js

1. Download repo

2. Start node server in console: "node src/server.js"

4. Start vue in console: "npm run dev"

5. Open http://127.0.0.1:5173/

6. Play!

## Architecture diagram
```mermaid
flowchart RL
    subgraph Server
    Node.js
    Express.js
    Socket.io-Server
    end
    subgraph Client
	Vue.js
	Socket.io-Client
    Howler.js
    end
    Server --> Client 
    Client --> Server
```
## Sequence diagram
```mermaid

sequenceDiagram

participant Client 1
participant Server
participant Client 2

Client 2->>Server: initialize connection
Server ->> Client 2: initialize socket
Client 2 ->> Server: join lobby
Client 1->>Server: initialize connection
Server ->> Client 1: initialize socket
Client 1 ->> Server: join lobby
Client 1 ->> Server: open track
Server ->> Client 1: synchronize server state
Client 1 ->> Server: click cell
Server ->> Client 2: toggle cell
Server ->> Client 2: send data to sequencer
Server ->> Client 1: send data to sequencer
Client 1 ->> Server: resume to sequencer
Server ->> Client 1: synchronize server state
```

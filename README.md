# Full Stack

Learning exercises covering the full web stack, from HTML and CSS to JavaScript, Node/Express, MongoDB and React.

## Contents
| Folder | What is inside | How to run |
|---|---|---|
| `Html/` | Anchor tags, forms, lists, tables | Open the `.html` files in a browser |
| `css/` | Selectors, box model, animations, responsive/media queries, bootstrap, exercises | Open `index.html` in each subfolder |
| `javascript/` | Basics, arrays, objects, OOP, async, callbacks/promises, timers, fetch API, etc. | Open the HTML files or run with `node` |
| `Libraries/` | AOS and Typed.js demos | `cd "Libraries/Typed js" && npm install && npm run dev` |
| `Express/Basic` | Minimal Express server with CORS (port 3000) | `npm install && npm start` |
| `Express/CRUD` | Student CRUD API with Mongoose (needs local MongoDB, port 3000) | `npm install && npm start` |
| `Express/Student File` | Student form: `Backend/` (Express + Mongoose) and `Frontend/` (Vite + React) | install and start each part separately |
| `Middlewares/` | Express middleware examples | `npm install && npm start` |
| `Mongodb/` | Exported JSON collections (Compass) used by the exercises and sibling projects | Import with MongoDB Compass |
| `React/` | React/Vite practice app | `npm install && npm run dev` |

Most backends expect MongoDB at `mongodb://localhost:27017`.

## Express CRUD / Student File backends: seed and env
Both read `MONGODB_URI` (default `mongodb://127.0.0.1:27017/CRUD` and `.../studentFormData`) and `PORT` (default 3000). `npm run seed` inserts 3 demo students (idempotent, upserts by email). The Student File frontend reads `VITE_API_URL` (default `http://localhost:3000`). API: `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`; duplicate email returns 409, missing fields 400, unknown id 404.

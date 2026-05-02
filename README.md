# Film Collection

A small movie catalog Single Page Application (SPA) built to demonstrate core Angular concepts, focusing on modern reactive state management.

## Demo

[Live Preview](https://vitiok2021.github.io/rs-film-collection/)

## Tech Stack

- **Framework:** Angular 20+ (Standalone components)
- **Reactivity:** Angular Signals (100% signal-based, strictly no RxJS)
- **Templates:** New Control Flow (`@if`, `@for`, `@empty`)
- **Language:** TypeScript (Strict mode)
- **Styling:** SCSS

## Key Features

- **Catalog & Search:** Displays a list of mock films with real-time filtering by title.
- **Favorites:** Users can toggle films to their favorites list (state managed via `computed()` signals).
- **Dynamic Routing:** Navigation between the main catalog and detailed film pages with parameter reading.
- **Custom Directive:** A standalone attribute directive for autofocusing the search input upon rendering.
- **Custom Pipe:** A standalone pipe transforming raw minutes into a human-readable format (e.g., `90` -> `1h 30min`).
- **Error Handling:** Wildcard routing that catches non-existent URLs and handles them gracefully.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/vitiok2021/rs-film-collection.git](https://github.com/vitiok2021/rs-film-collection.git)
   Navigate to the project folder:
   ```

Bash
cd rs-film-collection
Install dependencies:

Bash
npm install

4. Start the development server:
   ```bash
   ng serve
   Open your browser and navigate to http://localhost:4200/.
   ```

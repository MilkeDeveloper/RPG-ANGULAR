# RPG Dev Suite — Item Editor

A web-based RPG item creation tool built with **Angular and TypeScript** for a personal game-development project.

The application provides an interface for defining game items and submitting their data to a REST API. It was developed independently to simplify item creation and integration with a game built in Godot.

## Features

- Create items with names, types, descriptions, effects, and image URLs.
- Configure item weight, sale value, rarity, and character class.
- Select predefined values using dropdown menus.
- View created items in an expandable list showing their attributes.
- Retrieve existing items and submit new ones through HTTP requests.

## Tech Stack

- Angular 16
- TypeScript
- Angular Forms
- Angular HttpClient and RxJS
- PrimeNG
- Tailwind CSS

## Architecture

The project was designed around the following workflow:

**Angular Item Editor → REST API → Godot Integration → Item Resources**

The Angular application sends item data to an API. In the original game-development workflow, a separate Godot integration consumed this data to create item Resources inside the engine.

The Godot integration and backend source code are not included in this repository.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/MilkeDeveloper/RPG-ANGULAR.git
cd RPG-ANGULAR/rpg-dev-suite
npm install
npm start
```

Open `http://localhost:4200`.

### API Configuration

The Angular service uses the following API endpoint:

```text
http://127.0.0.1:8080/itens/potions
```

The application uses `GET` to retrieve items and `POST` to create them.

To use the application with another backend, update the endpoint in:

`src/app/services/items-api.service.ts`

A compatible backend is required for data retrieval and persistence.

## Project Structure

```text
rpg-dev-suite/
  src/app/
    item-register/
    services/
      items-api.service.ts
    Models/
      item models.ts
```

## Project Status

Personal game-development tool demonstrating item creation, frontend form handling, data modeling, and REST API integration.

## Author

[MilkeDeveloper](https://github.com/MilkeDeveloper)

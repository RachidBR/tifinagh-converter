# Tifinagh to Latin Converter

> Morning plan : from 9:30am to 12am learning with online courses.
> Afternoon plan : from 13:15 to 17:30 working on the Tifinagh converter app.

## Next thing to work on

### Frontend

- Developing the frontend part with angular.

### Backend

- Fixing some issues. (Read more in the [todo.md](./todo.md) file).

## Overview

This project is a small Nest.js application for converting text between Tifinagh and Latin scripts. It consists of a backend API and a frontend SPA.

## Features

- Tifinagh to Latin conversion
- Latin to Tifinagh conversion

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

```cmd
npm install
```

### Usage

1. Start the Nest.js server:

```cmd
npm run start:dev
```

2. The server will run on the 3000 port.
3. Use the provided API endpoints for Tifinagh to Latin and Latin to Tifinagh conversion.
   - **GET** : `/converter/tifinagh-to-latin/:text` : Tifinagh to Latin:
   - **GET** : `/converter/latin-to-tifinagh/:text` : Latin to Tifinagh:

> Replace :text with the text you want to convert.

### Examples

#### Latin to Tifinagh

##### Request

GET /converter/tifinagh-to-latin/rachid

##### Response

```json
{ "result": "ⵔⴰⵛⵉⴷ" }
```

### Swagger documentation

You can find the swagger documentation on the `/swagger`` endpoint.

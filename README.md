# Tifinagh to Latin Converter

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
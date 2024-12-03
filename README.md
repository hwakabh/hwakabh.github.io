# hwakabh.github.io

[![Backend CI](https://github.com/hwakabh/hwakabh.github.io/actions/workflows/backend.yaml/badge.svg?branch=main)](https://github.com/hwakabh/hwakabh.github.io/actions/workflows/backend.yaml) [![Frontend CI](https://github.com/hwakabh/hwakabh.github.io/actions/workflows/frontend.yaml/badge.svg?branch=main)](https://github.com/hwakabh/hwakabh.github.io/actions/workflows/frontend.yaml)

Personal Portfolio Page with GitHub fullstack

## Architecture
Based on JavaScript/TypeScript and fullstack features of GitHub
Frontend: Vue.js
Backend: Express

![Arch](./app-diagram.drawio.svg)

For more detailed design, including API design or URL patterns, will be noted in repository [Wiki](https://github.com/hwakabh/hwakabh.github.io/wiki).

## Run applications locally
For bringing up all components required, [Makefile](./Makefile) has prepared. \
Depending on your development requirements, there is a few options to use Makefile.

```shell
# Starting Frontend and Backend directly on your machine
% make all

# Build Frontend code bases and pulling containerized Backend images for UI
% make prod
```

## Motivations
Leveraging fullstack features of GitHub such as:
- GitHub Actions
- GHCR (GitHub Container Registry)
- Release automation
- Code Owners and scaffolded policy files (contributing/Security policies or Code of Conduct)
- Dependabot
- Issue/PR templates

Personal workouts with JavaScript ecosystem
- Vue.js for Frontend
- Express.js for Backend (stateless)
- generic Node.js project for Swagger documentations

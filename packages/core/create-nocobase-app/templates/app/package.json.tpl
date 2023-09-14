{
  "name": "{{{name}}}",
  "private": true,
  "workspaces": [
    "packages/*/*"
  ],
  "scripts": {
    "nocobase": "nocobase",
    "pm": "nocobase pm",
    "dev": "nocobase dev",
    "start": "nocobase start",
    "clean": "nocobase clean",
    "build": "nocobase build",
    "test": "nocobase test",
    "gen-tsconfig-paths": "nocobase gen-tsconfig-paths",
    "postinstall": "nocobase postinstall",
    "lint": "eslint ."
  },
  "resolutions": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0"
  },
  "dependencies": {
    "@nocobase/cli": "{{{version}}}",
    {{{dependencies}}}
  },
  "devDependencies": {
    "@nocobase/devtools": "{{{version}}}"
  }
}

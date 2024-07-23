# Awesome TODO

An awesome TODO list with some cool features (TBA).

## Prerequisites
In order to get started, you need to make sure you have the following things installed:
- [Rails](https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project-installing-rails) 7.1.0 or higher
- [Node.js](https://nodejs.org/en) 20.15.0 or higher

## Installation
Since this is React On Rails, you will need to ensure dependencies for both Rails and React apps are installed:
1. Install Rails dependencies
`bundle install` (Once you've installed Ruby, you should have `bundler`)

2. Install the React app's dependencies
- Go to the React app by doing `cd client`
- Do `npm install` to install all dependencies
- Back out to the project's root with `cd ..`

## Database Setup
Setting up the database is as easy as doing
```
bin/rails db:prepare
bin/rails db:seed
```
## Running the application
### Local development
Now that you have set everything up, you can start the development server:
```bash
bin/dev # If permission denied, grant execute permission with `chmod +x bin/dev``
```

This command will trigger 2 processes in the `Procfile.dev` that will start the React app on port 3001 and the Rails app on port 5100.

**Fun facts:** In case you're wondering how both ends are connected, please check `client/vite.config.ts` where you will find the configuration that maps any `/api` requests to our Rails app

```typescript
  server: {
    host: "localhost",
    port: 3001,
    proxy: {
      "^/api/.*": {
        target: "http://localhost:5100",
        changeOrigin: true,
      },
    },
  },
```

### Production
**To be updated, there will be a Dockerfile to build the React app into Rails `public` folder to render the client**
Before going on production, make sure your `.env` has the following contents:
```bash
DATABASE_URL=postgres://awesome_todos:iloveawesometodos@db/awesome_todos # It could be an external source like a Supabase or another Docker container
```

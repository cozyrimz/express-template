# Pre-requirements

Since this is a node server you'll need nvm, node 21+ (installed with nvm), and npm (which will be installed with node 21).

1. Install NVM - [instructions here](<[url](https://github.com/nvm-sh/nvm#installing-and-updating)>)
2. Using NVM install node 21

```
nvm install 21 # downloads node 21

nvm use 21 # switch to actually using the node version you've downloaded

node -v # checks the node version, confirms that node 18 is actually installed
```

3.  Download the latest version of npm
    `npm install -g npm`

# Note On DB

Currently this project contains a skeleton for a mongodb connection via mongoose. You can delete these files if you use another ORM or a SQL DB.

# environment variables for local development at server root

create a .env file with the following variables

```
PORT=<localPort_to_run_server_on>
NODE_ENV=<development_staging_production_etc>
MONGO_URI=mongodb+srv://<staging_or_local_mongodb_db_uri_string>/<db>?retryWrites=true&w=majority
```

# install packages

```sh
npm install
```

# start the server

```sh
npm run dev
```

# Debugging

Debugging has 2 steps

1. Running a builder task
   - Option 1: run `npm run build:watch`
   - Option 2: press `CMD+Shift+B` which will run a task that should be in the background during your vscode session
2. Running the actual debugger
   - On the debug tab click on the drop down at the top and select 'Debug Server'. Then click on the green play icon

# Write and Run a Script outside of the server

In general all scripts should be in the src/scripts folder. Note that since we're not directly starting up a node server but instead using ts-node to run a script we're going to have to manually connect mongoose to the db in order to use mongoose models or communicate with the db. An example of this is [here](https://github.com/cozyrimz/guidance-server/blob/main/src/scripts/seedSPConstituents.ts#L14).

Then in terminal run your script with npx and ts-node ex:

```bash
npx ts-node src/scripts/seedDBCleanedTranscripts.ts
```

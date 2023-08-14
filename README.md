# Pre-requirements

Since this is a node server you'll need npm, node 18+ (installed with nvm) and yarn installed.

1. Install NVM - [instructions here]([url](https://github.com/nvm-sh/nvm#installing-and-updating))
2. Using NVM install node 18
```
nvm install 18 # downloads node 18

nvm use 18 # switch to actually using the node version you've downloaded

node -v # checks the node version, confirms that node 18 is actually installed
```
3. Install yarn globally to your computer
```
npm install --global yarn
```
Check that yarn is running
```
yarn --version
```
# environment variables for local development at server root

create a .env file with the following variables
```
PORT=<localPort_to_run_server_on>
NODE_ENV=<development_staging_production_etc>
MONGO_URI=mongodb+srv://<staging_or_local_mongodb_db_uri_string>/<db>?retryWrites=true&w=majority
```

# install with yarn

```sh
yarn
```

# start the server

```sh
yarn dev
```

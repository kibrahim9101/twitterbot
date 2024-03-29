## Reweet Bot 
This bot runs a Twitter search and retweets the posts found in the search. The current search query gets the most recent tweets
from a list of accounts. It sends tweets once every 24 hours.

## Dependencies
This bot is dependent on the [twitter-api-v2](https://github.com/PLhery/node-twitter-api-v2) package. The functions simplifies the
process of making Twitter API calls. The forked bot used `twit` instead but it no longer works properly with Twitter's v2 API. It's
also designed to work with [Node.js](https://nodejs.org) and [npm](https://npmjs.com).

### Install Node.js and npm
Please see npm's documentation [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Clone this repository
Download the source code or clone the repository using `git`. I may upload and release zip file packages in the future.

### Install twitter-api-v2
First, navigate to the ./bot/ folder within the project and then install the package

```bash
npm i twitter-api-v2
```

### OPTIONAL install PM2
PM2 is a great tool to daemonize programs and works with Node.js. You can install it with npm as well.
 
## Connecting to Twitter
You will need access keys from Twitter in order to authenticate your requests. You can get them by doing the following: 

 - Create a Twitter App on Twitter Developers : [https://apps.twitter.com/app/new ](https://apps.twitter.com/app/new). 
 
 - Next you'll see a screen with a "Details" tab. Setup the App and "Application Type", choose "Read and Write". 

Then go to the Keys and Access Tokens tab, you will need this data to setup our **config.js** as shown below.

### Create an empty config.js file in the ./bot folder 
Paste the following into the config.js file:

```js
module.exports = {
    consumer_key:         'API key',
    consumer_secret:      'API secret key',
    access_token:         'Access token',
    access_token_secret:  'Access token secret'
  }
``` 

In between those quotes, instead of `'key'`, paste the appropriate info from the Details page. This will fullfill the 
[OAuth 1.0a User Context](https://developer.twitter.com/en/docs/authentication/oauth-1-0a) authentication that Twitter requires to 
send tweets on behalf of a user.

### Authentication Methods
If you plan on modifying this app to do something other than retweet please read 
[this page about Authentication](https://github.com/PLhery/node-twitter-api-v2/blob/master/doc/auth.md#basic-authentication-flow).

## Run the app
Now type the following in the command line while in the ./bot folder directory
 
```bash
node bot.js
``` 

### PM2 daemon
If you decide to use PM2 to keep the bot running as a daemon run this command instead:

```bash
pm2 start bot.js
```

## Celebrate
Expect a success message in your console! 

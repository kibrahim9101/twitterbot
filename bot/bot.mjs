// import twitter-api-v2
import { TwitterApi } from 'twitter-api-v2';

//import keys from config.mjs
import { keys } from './config.mjs';

// We need to include our configuration file...
const TC = new TwitterApi(keys);

// This saves a search query as a string
const searchQuery = 'from:@Middleeasteye OR from:@eyeonpalestine';
// Save optional search parameters as a string. Max 50 tweets a day for a free app
const searchParameters = { 'maxresults': 50 };

async function main() {
	//Saves your user ID as a variable to send as yourself
	const myUserId = await TC.v2.me();

	//runs a search and saves the list to tweetsFromSearch
	const tweetsFromSearch = await TC.v2.search(searchQuery, searchParameters);
	//iterate throught the list of tweets and retweet each one
	for await (const tweet of tweetsFromSearch) {
		TC.v2.retweet(myUserId, tweet.id);
		console.log("Success!");
	}
};

main();

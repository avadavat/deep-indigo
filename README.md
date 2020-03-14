# deep-indigo
Pokemon bot built off of [leftovers-again](https://avadavat.github.io/leftovers-again/) & [Pokemon-Showdown](https://github.com/smogon/Pokemon-Showdown)

# Setup
1. Clone the repo
```
git clone https://github.com/avadavat/deep-indigo.git
cd deep-indigo
```
2. Start a local Pokemon-Showdown server
```
git submodule update --init
npm run server
```
3. Start the bot
```
npm install
npm start
```
4. Navigate to localhost:8000 & challenge the bot to a battle
5. Alternatively run: `npm start -- --opponent=randumb` to watch the bot battle another bot

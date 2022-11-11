# Credits
Original Version: https://github.com/DeathVenom54/discord-terminal

# Discord Terminal

💻 A Discord bot to conveniently use Discord as your remote terminal

😉 Why use SSH clients when you can use your favourite chat app as one?

## Installation

1) Clone the repo and install dependencies

```bash
git clone https://github.com/SX-9/discord-terminal-v2.git
cd discord-terminal

# with yarn:
yarn

# with npm:
npm install --save
```

2) Create a new file `src/config.json` with these options:
* token: string = Your bot token
* allow: array = Strings of whitelisted user ids
* prefix: string = Bot prefix for executing commands

3) Run the bot using `npm run start` or `yarn start`

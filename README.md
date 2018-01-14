# catcat
![](img/kat-r-32.png)CatCat Chatbot is here to help you securely transfer your coins

![](img/overview.png)
[EDIT](http://www.nomnoml.com/#view/%5B%3Cactor%3EUser%5D%3C--%F0%9F%94%96%5B%E2%9C%89%EF%B8%8F%202Factors%7C%F0%9F%94%96%20ACCESS_TOKEN%5D%0A%5B%3Cactor%3EUser%5D%3C-%3E%F0%9F%94%96%5B%F0%9F%A4%96%20chatbot%5D%0A%0A%5B%F0%9F%A4%96%20chatbot%5D%0A%5B%F0%9F%A4%96%20chatbot%5D%3C-%3E%F0%9F%94%96%5B%F0%9F%95%B4%20agent%5D%0A%5B%F0%9F%A4%96%20chatbot%5D%3C-%3E%5B%F0%9F%95%B7%20web%5D%0A%0A%5B%F0%9F%95%B7%20web%5D%3C-%3E%5B%F0%9F%95%B4%20agent%5D%0A%0A%5B%F0%9F%95%B4%20agent%7C%F0%9F%97%9D%20API_KEY%7C%F0%9F%94%96%20ACCESS_TOKEN%7C%7CcreateWallet%7ClistWallet%7CgetWallet%7ClinkWallet%7CaddWallet%7CremoveWallet%5D%0A%0A%5B%F0%9F%95%B4%20agent%5D%3C-%3E%F0%9F%97%9D%F0%9F%94%96%5B%F0%9F%91%AE%20security%5D%0A%0A%5B%E2%9C%89%EF%B8%8F%202Factors%5D%3C--%F0%9F%94%96%5B%F0%9F%91%AE%20security%5D%0A%5B%F0%9F%91%AE%20security%7C%F0%9F%94%91%20MASTER_KEY%7C%F0%9F%97%9D%20API_KEY%7C%F0%9F%94%96%20ACCESS_TOKEN%5D%F0%9F%92%B0%3C-%3E%F0%9F%94%91%5B%F0%9F%97%84%20encrypted%20storage%5D%0A%5B%F0%9F%95%B4%20agent%5D%3C-%3E%F0%9F%92%B0%5B%F0%9F%92%8E%20web3%5D%0A%5B%F0%9F%92%8E%20web3%5D%3C-%3E%F0%9F%92%B0%5B%E2%9B%93%20blockchain%5D)

## Features
### Basic bank
- [ ] Can create wallet
- [ ] Can and link it with Facebook user.
- [ ] Can show current balance of each wallet.
- [ ] Can validate wallet address.
- [ ] Can transfer coins at lowest rate or fastest time use.
- [ ] Can notify when transaction complete.

### Advance bank
- [ ] Can use 2 factors before transfer.
- [ ] Can schedule transfer w/ or w/o multisig.

### Basic trade
- [x] Can check current coins exchange rate.
- [ ] Can draw price chart.
- [ ] Can draw current price charts.
- [ ] Can give basic information about coin.

### Advance trade
- [ ] Can draw floor and ceiling chart.
- [ ] Can give signal before price go up.
- [ ] Can notify high profit ICO.

## Foo
Will handle chat related
### Price
- [x] `$omg`               // To get `OMG` price in `THB`.
- [x] `$omg eth`           // To get `OMG` price in `ETH`.
- [ ] `$`                  // To begin flow of `$` command and list last or top 4 symbols.
- [ ] `$$`                 // To repeat last `$` command.

### Help
- [ ] `?`                  // To ask for help.
- [ ] `?$`                 // To ask for help about `$`.
- [ ] `?#`                 // To ask for help about `#`.
- [ ] `?-`                 // To ask for help about `-`.
- [ ] `?+`                 // To ask for help about `+`.
- [ ] `?!`                 // To ask for help about `!`.
- [ ] `?~`                 // To ask for help about `~`.
- [ ] `?^`                 // To ask for help about `^`.
- [ ] `?omg`               // To ask for information about `OMG`.

### Send
- [ ] `-`                  // To begin flow of `-` command.
- [ ] `-100 omg @katopz`   // To send `100` as `OMG` to user name `@katopz`.
- [ ] `--`                 // To repeat last `-` command with prompt for `to` targeted user.
- [ ] `-omg`               // To send `OMG` with prompt for `value` then `to` targeted user.
- [ ] `-100 omg`           // To send `100` as `OMG` with prompt for `to` targeted user.

### Receive
- [ ] `+`                  // To begin flow of `+` command.
- [ ] `+100 omg @katopz`   // To ask for `100` as `OMG` from user name `@katopz`.
- [ ] `++`                 // To repeat last `+` command with prompt for `to` targeted user.
- [ ] `+omg`               // To send `OMG` with prompt for `value` then `to` targeted user.
- [ ] `+100 omg`           // To send `100` as `OMG` with prompt for `to` targeted user.

### Chart
- [ ] `#`                  // To begin flow of `#` command and list last or top 4 symbols.
- [ ] `#omg`               // To see `OMG` chart.
- [ ] `##`                 // To repeat last `#` command.
- [ ] `#omg xzc`           // To see `OMG` chart against `XZC`.

### Forecast
- [ ] `~`                  // To begin flow of `~` command and list last or top 4 symbols.
- [ ] `~omg`               // To get forecast about `OMG`.
- [ ] `~~`                 // To repeat last `~` command.

### Wallets
- [ ] `=`                  // To begin flow of `=` command.
- [ ] `=+`                 // To create new wallet.
- [ ] `=-`                 // To show list for remove wallet.

### Portfolio
- [ ] `^omg`                // To prompt for `value` as `OMG` and show profit as `%`.
- [ ] `^omg%`               // To prompt for `value` as `OMG` and show profit as `%`.
- [ ] `^omg thb`            // To prompt for `value` as `OMG` and show profit as `thb`.
- [ ] `^+100 omg`           // To prompt for `price` and `100 OMG` then add it to port.
- [x] `^+100 omg 123`       // To add `100 OMG`at `123 THB` to port and show summary.
- [x] `^+100 omg 123 usd`   // To add `100 OMG`at `123 USD` to port and show summary.
- [ ] `^-100 omg 345 thb`   // To remove `100 OMG`at `345 THB` to port and show summary.
- [ ] `^bx.csv`             // To prompt for choose `bx-*.csv` file from `bx` and show summary.
- [ ] `^`                   // To begin flow of `^` command and list last or top 4 symbols.
- [ ] `^^`                  // To repeat last `^` command.
- [ ] `^*`                  // To show portfolio summary.
- [ ] `^#`                  // To show portfolio history.
  ```
  💵 PORTFOLIO - 2017/12/23 16:30:11
  
  OMG 100/300 = 300% (+200 THB)
  ETH 100/200 = 200% (+100 THB)

  Profit 500% (+300 THB)
  ```
- [ ] `^omg?`               // To show summary for `OMG`.
  ```
  # Gain
  You have 1 OMG at 100 THB
  Current price from BX is 300 THB 
  So you have +300% profit gain!
  +200 THB) Congrats!

  # Lost
  You have 1 OMG at 100 THB
  Current price from BX is 50 THB
  So you have -50% profit lost, Cheers up!
  ```

### News
- [ ] `*`                   // To begin flow of `*` command and list last or top 4 symbols.
- [ ] `*omg`                // To get news about `OMG`
- [ ] `**`                  // To repeat last `*` command.

### Alert
- [ ] `!`                   // To begin flow of `!` command and list last or top 4 symbols.
- [ ] `!omg>5%`             // To alert when `OMG` price up `5%` from now.
- [ ] `!omg<5%`             // To alert when `OMG` price down `5%` from now.
- [ ] `!omg<300`            // To alert when `OMG` price less then `300`.
- [ ] `!omg>300`            // To alert when `OMG` price more then `300`.
- [ ] `!!`                  // To repeat last `!` command.

### Exchanges
- [ ] `%`                   // To begin flow of `%` command and list last or top 4 exchanges.
- [ ] `%%`                  // To repeat last `%` command.
- [ ] `%bitfinex`           // To select `bitfinex`

## Bar
Will handle coins related

## alpha
### PROMPT state
- [ ] Can prompt for `CHECK_PRICE`, `SEND_COINS`, `WATCH_PRICE`

### CHECK_PRICE state
- [ ] Can check price by symbol.

### SEND_COINS state
- [ ] Can send ethereum by address
- [ ] Can send ethereum by userId
- [ ] Can notify when transfer start
- [ ] Can notify when transfer succeed
- [ ] Can notify when transfer failed
- [ ] Can retry or cancel when transfer failed
- [ ] Can prompt for next action after transfer  

## beta
- [ ] Can create ethereum wallet
- [ ] Can send mail about wallet and secret

## v1
- [ ] Can create bitcoin wallet

## v2
- [ ] Full node
- [ ] Can exchange
- [ ] Can create multisig wallet : https://github.com/gnosis/MultiSigWallet
- [ ] Can trigger transfer when low exchange rate.
- [ ] Can create schedule transfer.
- [ ] Can cancel scheduled transfer. 
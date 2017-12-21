# catcat
CatCat Chatbot is here to help you securely transfer your coins

## Features
- [x] Can check current coins exchange rate.
- [ ] Can transfer coins at lowest rate or fastest time use.
- [ ] Can schedule transfer w/ or w/o multisig.
- [ ] Can create wallet and bind it with Facebook user.
- [ ] Can give information about coin.

## Foo
Will handle chat related
### Price
- [x] `$omg`             // To get `OMG` price in `THB`.
- [x] `$omg eth`         // To get `OMG` price in `ETH`.
- [ ] `$`                // To repeat last `$` command.

### Help
- [ ] `?`                // To ask for help.
- [ ] `?$`               // To ask for help about `$`.
- [ ] `?#`               // To ask for help about `#`.
- [ ] `?-`               // To ask for help about `-`.
- [ ] `?+`               // To ask for help about `+`.
- [ ] `?!`               // To ask for help about `!`.
- [ ] `?~`               // To ask for help about `~`.
- [ ] `?^`               // To ask for help about `^`.
- [ ] `?omg`             // To ask for information about `OMG`.

### Send
- [ ] `-100 omg @katopz` // To send `100` as `OMG` to user name `@katopz`.
- [ ] `-`                // To repeat last `-` command with prompt for `to` targeted user.
- [ ] `-omg`             // To send `OMG` with prompt for `value` then `to` targeted user.
- [ ] `-100 omg`         // To send `100` as `OMG` with prompt for `to` targeted user.

### Receive
- [ ] `+100 omg @katopz` // To ask for `100` as `OMG` from user name `@katopz`.
- [ ] `+`                // To repeat last `+` command with prompt for `to` targeted user.
- [ ] `+omg`             // To send `OMG` with prompt for `value` then `to` targeted user.
- [ ] `+100 omg`         // To send `100` as `OMG` with prompt for `to` targeted user.

### Chart
- [ ] `#omg`             // To see `OMG` chart.
- [ ] `#`                // To repeat last `#` command.
- [ ] `#omg xzc`         // To see `OMG` chart against `XZC`.

### Forecast
- [ ] `~omg`             // To get forecast about `OMG`.
- [ ] `~`                // To repeat last `~` command.

### Portfolio
- [ ] `^omg`                // To prompt for `value` as `OMG` and show profit as `%`.
- [ ] `^omg%`               // To prompt for `value` as `OMG` and show profit as `%`.
- [ ] `^omg thb`            // To prompt for `value` as `OMG` and show profit as `thb`.
- [ ] `^+100 omg`           // To prompt for `price` and `100 OMG` then add it to port.
- [ ] `^+100 omg:123`       // To `100 OMG`at `123 THB` to port and show total.
- [ ] `^+100 omg:123 THB`   // To `100 OMG`at `123 THB` to port and show total.
- [ ] `^-100 omg:345 THB`   // To `100 OMG`at `345 THB` to port and show profit as `%`.
- [ ] `^bx.csv`             // To prompt for choose `bx-*.csv` file from `bx` and show total.
- [ ] `^`                   // Show all profit gain.

### News
- [ ] `*omg`             // To get news about `OMG`
- [ ] `*`                // To repeat last `*` command.

### Alert
- [ ] `!omg>5%`          // To alert when `OMG` price up `5%` from now.
- [ ] `!omg<5%`          // To alert when `OMG` price down `5%` from now.
- [ ] `!omg<300`         // To alert when `OMG` price less then `300`.
- [ ] `!omg>300`         // To alert when `OMG` price more then `300`.
- [ ] `!`                // To repeat last `!` command.

### Market
- [ ] `%`                // To show market for select
- [ ] `%bitfinex`        // To select `bitfinex`

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
- [ ] Can create multisig wallet
- [ ] Can trigger transfer when low exchange rate.
- [ ] Can create schedule transfer.
- [ ] Can cancel scheduled transfer. 
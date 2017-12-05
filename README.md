# catcat
CatCat Chatbot is here to help you securely transfer your coins

## Features
- [x] Can check current coins exchange rate.
- [ ] Can transfer coins at lowest rate or fastest time use.
- [ ] Can schedule transfer w/ or w/o multisig.
- [ ] Can create wallet and bind it with Facebook user.

## Foo
Will handle chat related
- [x] `$omg`             // To get `OMG` price in `THB`.
- [x] `$omg eth`         // To get `OMG` price in `ETH`.
- [ ] `.`                // To repeat last command.
- [ ] `?`                // To ask for help.
- [ ] `-omg 100 @katopz` // To send 100 `OMG` to user name `@katopz`.
- [ ] `+omg 100 @katopz` // To ask for 100 `OMG` from user name `@katopz`.
- [ ] `#omg`             // To see `OMG` trend.
- [ ] `!omg>5%`          // To alert when `OMG` price up `5%`.
- [ ] `!omg<5%`          // To alert when `OMG` price down `5%`.

## Bar
Will handle coins related

## alpha
### PROMPT state
- [ ] Can prompt for `CHECK_PRICE`, `SEND_COINS`, `WATCH_PRICE`

### CHECK_PRICE state
- [ ] Can invite user for price by ticker.
- [ ] Can check price by ticker.

### SEND_COINS state
- [ ] Can send ethereum by address
- [ ] Can send ethereum by userId
- [ ] Can notify when transfer start
- [ ] Can notify when transfer succeed
- [ ] Can notify when transfer failed
- [ ] Can retry or cancel when transfer failed
- [ ] Can prompt for next action after transfer  

### WATCH_PRICE state
- [ ] Can trigger when less than lower bound.
- [ ] Can trigger when less than higher bound.

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
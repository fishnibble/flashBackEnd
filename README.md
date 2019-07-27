# Flash card backend

## Installation

**Install dependencies**
```bash
npm install 
```
**Run**
```bash
node index.js 
```

## Working routes
```
Post:
/register
{ 
  username,
  email,
  password,
  decks 
}
```

```
Post: 
/addeck
{
  deckName,
  cards
}
```

```
Post:
/addcards
{
  deckId,
  cardsInfo
}
```

```
Patch:
/changedeckname
{
  deckId,
  newName
}
```

```
Patch: 
/changecards
{
  newCards
}
```

```
Delete: 
/removecards
{
  cardsId
}
```

```
Delete:
/removedeck
{
  deckId
}
```
## TODO

- [ ] implement user auth
- [x] figure out better parsing for JSON **for user controller**
- [ ] implement better error handling **use cases and for mongo**
- [ ] move over to jest for testing
- [ ] better way to handle JSON for http? 
- [ ] implement some type of repetition spacing feature

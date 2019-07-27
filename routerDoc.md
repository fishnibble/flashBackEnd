* post: /register
    - username
    - email
    - password
    - decks

* post: /addeck
    - deckName
    - cards

* post: /addcards
    - deckId
    - cardsInfo

* patch: /changedeckname
    - deckId
    - newName

* patch: /changecards
    - newcards

* delete: /removecards
    - cardsId

* delete: /removedeck
    - deckId
var chunk = require('lodash/array/chunk')
var shuffle = require('lodash/array/shuffle')
var fromPairs = require('lodash/array/fromPairs')
var zip = require('lodash/array/zip')
var range = require('lodash/util/range')
//
// from https://stackoverflow.com/questions/2518753/best-way-to-implement-a-deck-for-a-card-game-in-python//2518806
function create_deck_of_cards(){
  var values = [1,2,3,4,5,6,7,8,9,10].extend("Jack Queen King Ace".split(' '));
  var suits = "Diamonds Clubs Hearts Spades".split(' ');
  var deck_of_cards = [];
  for (v in values){
    for (s in suits){
      deck_of_cards.append([v,s]);
    }
  }
  shuffle(deck_of_cards);
}

function create_players_deck(deck_of_cards, players){
  return fromPairs(zip(range(1,players+1), chunk(deck_of_cards, players))));
}
// when one card on top of the other has the same value
function duplicate(player_stacks, player, ers_stack, x, y){
  if (x[1] === y[1]){
    pick_cards_up(player_stacks, player, ers_stack)
  }
  else {
    put_card_on_bottom(players_stack, players_stack, ers_stack)
  }
}

// when two cards with the same values are separated by one card
function sandwich(x,y,z){
  duplicate(x,z);
}

// used when player puts his card down
function put_card_on_top(players_stack, player, ers_stack){
  ers_stack.pushleft(player_stacks[player].shift());
  console.log(ers_stack[0]);
}

// used when a player wins the ers stack
function pick_cards_up(player_stacks, player, ers_stack){
  player_stacks[player].extend(ers_stack);
  ers_stack.clear();
  console.log(ers_stack);
}

// used when a player incorrectly tries to take the ers stack
function put_card_on_bottom(player_stacks, player, ers_stack){
  ers_stack.push(player_stacks[player].shift());
}

// the winning condition of the game
function player_has_all_cards(player_stacks, player, deck_length){
  console.log("To be implemented")
}

}

// used when a player loses all his cards
function player_has_no_cards(players_stack, player){
  console.log("To be implemented")
}

function ers_game(players){
    card_deck = create_deck_of_cards();
    players_stack = create_players_deck(card_deck,players)
    ers_stack = [];
    console.log("LET THE GAMES BEGIN!\n")
    while (!player_has_all_cards())
    {
      var turn = 1;
      while (turn <= players){
        /* need a way to concurrently check if another player
        has slapped the ers deck */
        if (!player_has_no_cards(players_stack,turn)){
          put_card_on_top(player_stacks, turn, ers_stack);
        }
      }
    }
}

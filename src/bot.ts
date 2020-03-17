/**
 * Deepindigo
 *
 */
import AI from 'leftovers-again/src/ai';
import decisions from 'leftovers-again/src/decisions';
type Decision = decisions.Decision;
type MOVE = decisions.MOVE;
type SWITCH = decisions.SWITCH;
import battle from 'leftovers-again/src/battle';
type State = battle.State;
import pokemon from 'leftovers-again/src/model/pokemon';
type PokemonData = pokemon.PokemonData;
/**
 * Your code is pre-built with a very simple bot that chooses a team, then
 * picks randomly from valid moves on its turn.
 */
export default class DeepIndigo extends AI {
  constructor() {
    super();
  }
  /**
   * Here's the main loop of your bot. `state` contains everything about the
   * current state of the game. Please read the documentation for more
   * details.
   *
   * @param  {Object} state The current state of the game.
   *
   * @return {Decision}     A decision object.
   */
  decide(state: State): Decision {
    // `forceSwitch` occurs if your Pokemon has just fainted, or other moves
    // that mean you need to switch out your Pokemon
    if (state.forceSwitch) {
      const myMon = this.pickOne(
        // filter through your reserve of Pokemon for ones that aren't dead
        state.self.reserve.filter(mon => !mon.active && !mon.dead)
      );
      // return a Decision object. SWITCH takes Pokemon objects, Pokemon names,
      // and the reserve index [0-5] of the Pokemon you're switching into.
      return new SWITCH(myMon);
    }

    const myMove = this.pickOne(
      // filter through your active Pokemon's moves for a move that isn't disabled
      (state.self.active as PokemonData).moves.filter(move => !move.disabled)
    );
    // return a Decision object. MOVE takes Move objects, move names, and
    // move indexes [0-3].
    return new MOVE(myMove);
  }

  // randomly chooses an element from an array
  pickOne(arr: Array<any>) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

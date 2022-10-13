import { ActionCreator, Reducer } from "./CreateRootReducer";
import { createReducer } from "./CreateReducer";
import { State } from "../State";
import { RequireAtLeastOne } from "../../Utils/RequireOne";
import { ExplicitAny } from "../../Utils/ExplicitAny";
import { isEmpty } from "../../Utils/IsEmpty";
import { isLastElement } from "../../Utils/IsLastElement";
import { isNil } from "../../Utils/IsNil";

/* no */
function createSimpleReducer<A extends ActionCreator<ExplicitAny, RequireAtLeastOne<State>>>(actionCreators: Array<A>): Reducer<State, A>;

/* one */
function createSimpleReducer<A extends ActionCreator<ExplicitAny, RequireAtLeastOne<State[P1]>>,
  P1 extends keyof State>(actionCreators: Array<A>, statePath: [P1]): Reducer<State, A>;

/* two */
function createSimpleReducer<A extends ActionCreator<ExplicitAny, RequireAtLeastOne<State[P1][P2]>>,
  P1 extends keyof State,
  P2 extends keyof State[P1]>(actionCreators: Array<A>, statePath: [P1, P2]): Reducer<State, A>;

/* three */
function createSimpleReducer<A extends ActionCreator<ExplicitAny, RequireAtLeastOne<State[P1][P2][P3]>>,
  P1 extends keyof State,
  P2 extends keyof State[P1],
  P3 extends keyof State[P1][P2]>(actionCreators: Array<A>, statePath: [P1, P2, P3]): Reducer<State, A>;

/* four */
function createSimpleReducer<A extends ActionCreator<ExplicitAny, RequireAtLeastOne<State[P1][P2][P3][P4]>>,
  P1 extends keyof State,
  P2 extends keyof State[P1],
  P3 extends keyof State[P1][P2],
  P4 extends keyof State[P1][P2][P3]>(actionCreators: Array<A>, statePath: [P1, P2, P3, P4]): Reducer<State, A>;

/* five */
function createSimpleReducer<A extends ActionCreator<ExplicitAny, RequireAtLeastOne<State[P1][P2][P3][P4][P5]>>,
  P1 extends keyof State,
  P2 extends keyof State[P1],
  P3 extends keyof State[P1][P2],
  P4 extends keyof State[P1][P2][P3],
  P5 extends keyof State[P1][P2][P3][P4]>(actionCreators: Array<A>, statePath: [P1, P2, P3, P4, P5]): Reducer<State, A>;

function createSimpleReducer(actionCreators: Array<ActionCreator>, statePath?: Array<string>): (state: State, payload: ExplicitAny) => State {
  if (isNil(statePath)) {
    return createReducer(
      actionCreators,
      (state, payload) => ({
        ...state,
        ...payload,
      }),
    );
  }

  if (isEmpty(statePath)) {
    throw new Error("State path can not be empty");
  }

  return createReducer(
    actionCreators,
    (state, payload) => {
      const newState = { ...state } as Record<string, ExplicitAny>;

      statePath.reduce(
        (curState, key, index) => {
          if (isLastElement(statePath, index)) {
            curState[key] = {
              ...curState[key],
              ...payload,
            }

            return curState;
          }

          curState[key] = { ...curState[key] };

          return curState[key];
        },
        newState,
      );

      return newState as State;
    },
  );
}

export { createSimpleReducer };

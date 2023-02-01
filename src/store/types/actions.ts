import { Productos } from "../../App";
import { ActionType } from "./actionTypes";

export interface Action {
  type: ActionType;
}

export interface AnyAction {
  type: any;
}

export interface AddArticlesAction extends Action {
  payload: Productos[];
}

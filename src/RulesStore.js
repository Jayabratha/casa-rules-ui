import { createStore } from 'redux';
import { RuleModel } from './Rule/Rule';

export const ADD_RULE = "ADD_RULE";
export const EDIT_RULE = "EDIT_RULE";
export const REMOVE_RULE = "REMOVE_RULE";

export const addRule = (rule) => ({
    type: ADD_RULE,
    payload: {
        rule: rule
    }
});

export const editRule = (index, rule) => ({
    type: EDIT_RULE,
    payload: {
        index: index,
        rule: rule
    }
});

export const removeRule = (index) => ({
    type: REMOVE_RULE,
    payload: {
        index: index
    }
});

function RulesReducers(state = [new RuleModel('Example', [{ param: 'age', operator: '<=', value: '18' }])], action) {
    switch (action.type) {
        case 'ADD_RULE': {
            const { rule } = action.payload;
            return [
                ...state,
                rule
            ]
        }

        case 'EDIT_RULE': {
            const { index, rule } = action.payload;
            state.splice(index, 1, rule);
            return [...state];
        }

        case 'REMOVE_RULE': {
            const { index } = action.payload;
            state.splice(index, 1);
            return [...state];
        }

        default:
            return state;
    }
}



export const ruleStore = createStore(RulesReducers);

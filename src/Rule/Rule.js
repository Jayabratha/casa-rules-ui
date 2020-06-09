import React from 'react';
import { useSelector } from 'react-redux';
import './Rule.css';

export class RuleModel {
    constructor(ruleName, ruleList) {
        this.ruleName = ruleName;
        this.ruleList = ruleList;
    }
}

function Rule({ruleIndex, onEdit, onDelete }) {

    const rule = useSelector(state => state[ruleIndex]);

    return (
        <div className='card rule'>
            <div className='rule-name'>{rule.ruleName}</div>
            <div>
                <button className='link' onClick={onEdit}>Edit</button>
                <button className='link' onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Rule;
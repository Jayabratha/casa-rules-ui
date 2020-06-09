import React from 'react';
import { PARAMS, OPERATORS, PRODUCTS_TYPES } from '../AppConstants';
import './RuleItem.css';

export class RuleItemModel {
    constructor(param, value, operator) {
        this.param = param;
        this.value = value;
        this.operator = operator;
    }
}

function RuleItem({ ruleItem, onChange }) {
    return (
        <div className='rule-item'>
            <div className='input-field'>
                <label htmlFor='param'>Parameter</label>
                <select id='param' type='text' className="full-width" value={ruleItem.param} onChange={(e) => onChange(e, 'param')}>
                    <option value=''>Select</option>
                    {PARAMS.map((param, index) => <option key={index} value={param}>{param}</option>)}
                </select>
            </div>
            <div className='input-field'>
                <label htmlFor='operator'>Operator</label>
                <select id='ruleName' type='text' className="full-width" value={ruleItem.operator} onChange={(e) => onChange(e, 'operator')}>
                    <option value=''>Select</option>
                    {OPERATORS.filter(operator => (ruleItem.param === 'product' && operator === '=') || ruleItem.param !== 'product').map((operator, index) => <option key={index} value={operator}>{operator}</option>)}
                </select>
            </div>
            {
                ruleItem.param === 'product' ?
                    <div className='input-field'>
                        <label htmlFor='value'>Value</label>
                        <select id='value' type='text' className="full-width" value={ruleItem.value} onChange={(e) => onChange(e, 'value')}>
                            <option value=''>Select</option>
                            {PRODUCTS_TYPES.map((type, index) => <option key={index} value={type}>{type}</option>)}
                        </select>
                    </div> :
                    <div className='input-field'>
                        <label htmlFor='value'>Value</label>
                        <input id='value' type='text' className="full-width" value={ruleItem.value} onChange={(e) => onChange(e, 'value')}></input>
                    </div>
            }

        </div>
    )
}

export default RuleItem;

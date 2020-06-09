import React from 'react';
import RuleItem, { RuleItemModel } from '../RuleItem/RuleItem';
import { useSelector, useDispatch } from 'react-redux';
import { editRule } from '../RulesStore';
import './RuleEditor.css';

function RuleEditor({ ruleIndex, onClose, onSave }) {

    const dispath = useDispatch();
    const rule = useSelector(state => state[ruleIndex]);

    function handleChange(event, propName, index) {
        if (index !== undefined) {
            rule.ruleList[index][propName] = event.target.value;
        } else {
            rule.ruleName = event.target.value;
        }
        dispath(editRule(ruleIndex, rule));
    }

    function addRuleParam() {
        const ruleParam = new RuleItemModel('', '', '');
        dispath(editRule(ruleIndex, { ...rule, ruleList: [...rule.ruleList, ruleParam] }));
    }

    return (
        <div className='rule-editor'>
            <button className='link' onClick={onClose}>Back to Rules list </button>
            <div className='main-editor'>
                <div className="card preview">
                    <h2>Create/Edit Rule</h2>
                    <div className='input-field'>
                        <label htmlFor='ruleName'>Rule Name</label>
                        <input id='ruleName' type='text' className="full-width" value={rule.ruleName} onChange={(e) => handleChange(e, 'name')}></input>
                    </div>
                    <div className='rule-list'>
                        {rule.ruleList.length > 0 &&
                            rule.ruleList.map((ruleItem, index) => <RuleItem key={index} ruleItem={ruleItem} onChange={(e, prop) => handleChange(e, prop, index)}></RuleItem>)
                        }
                        <button className='link' onClick={addRuleParam}>Add Rule Parameter</button>
                    </div>
                    <button className='full-width' onClick={() => onSave(rule)}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default RuleEditor;
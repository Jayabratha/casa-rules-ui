import React, { useState } from 'react';
import Rule, { RuleModel } from '../Rule/Rule';
import RuleEditor from '../RuleEditor/RuleEditor';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addRule, removeRule } from '../RulesStore';
import './RuleApp.css';

function RuleApp(props) {
    const [ruleIndex, setRuleIndex] = useState();

    const ruleList = useSelector(state => state);
    const dispath = useDispatch();

    function createRule() {
        const newRule = new RuleModel('New Rule', []);
        dispath(addRule(newRule));
        setRuleIndex(ruleList.length);
    }

    function editRule(index) {
        setRuleIndex(index);
    }

    function deleteRule(index) {
        dispath(removeRule(index));
    }

    function saveRule(rule) {
        setRuleIndex(null);
        // Save Rule to Server
        alert(JSON.stringify(ruleList));
    }

    return (
        <main>
            <h1>Welcome! to Rules Editor</h1>
            {ruleIndex >= 0 && ruleIndex !== null ? 
            <div className="editor-wrapper">
                <RuleEditor ruleIndex={ruleIndex} onClose={() => setRuleIndex(null)} onSave={saveRule}></RuleEditor>
            </div> :
                <div className='rules-wrapper'>
                    <h2>Current Rules</h2>
                    {ruleList.length ?
                        <ul className="rules-list">
                            {ruleList.map((rule, index) => <li key={index}><Rule ruleIndex={index} onEdit={() => editRule(index)} onDelete={() => deleteRule(index)}></Rule></li>)}
                        </ul> :
                        <div className='msg'>No applied Rules</div>
                    }
                    <button className='full-width' onClick={createRule}>Create New Rule</button>
                </div>
            }
        </main>
    );
}
export default connect()(RuleApp);
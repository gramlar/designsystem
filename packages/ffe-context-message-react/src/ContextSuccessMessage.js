import React from 'react';
import ContextMessage from './ContextMessage';
import { HakeIkon } from '@sb1/ffe-icons-react';

const ContextSuccessMessage = props => (
    <ContextMessage {...props} messageType="success" icon={<HakeIkon />} />
);

export default ContextSuccessMessage;

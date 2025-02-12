import React from 'react';
import { node, string, bool } from 'prop-types';

import { UtropstegnIkon } from '@sb1/ffe-icons-react';

import BaseMessage from './BaseMessage';

const ErrorMessage = props => {
    const { alert, ...rest } = props;

    return (
        <BaseMessage
            type="error"
            icon={<UtropstegnIkon aria-hidden="true" />}
            role={alert ? 'alert' : false}
            {...rest}
        />
    );
};

ErrorMessage.defaultProps = {
    alert: true,
};

ErrorMessage.propTypes = {
    /** The content of the message box */
    children: node,
    /** Any extra class names to the wrapping DOM node */
    className: string,
    /**
     * Deprecated. Use `children` instead.
     * @deprecated
     */
    content: node,
    /** The icon to show. Has a default value, but can be overridden */
    icon: node,
    /** An optional title for the message */
    title: node,
    /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
    alert: bool,
};

export default ErrorMessage;

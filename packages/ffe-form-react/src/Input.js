import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

const Input = React.forwardRef((props, ref) => {
    const { className, inline, textLike, textRightAlign, ...rest } = props;
    return (
        <input
            className={classNames(
                'ffe-input-field',
                { 'ffe-input-field--inline': inline },
                { 'ffe-input-field--text-like': textLike },
                { 'ffe-input-field--text-right-align': textRightAlign },
                className,
            )}
            ref={ref}
            {...rest}
        />
    );
});

Input.propTypes = {
    className: string,
    /** Input fields default to `display: block;`. Set this to `true` to apply the inline modifier. */
    inline: bool,
    /** Apply the text-like modifier by setting this to `true`. */
    textLike: bool,
    /** Make the text right aligned */
    textRightAlign: bool,
};

export default Input;

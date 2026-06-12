import { clsx } from "clsx";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

function Button({ primary = false, bordered = false, rounded = false, disabled = false, loading = false, children, href, size = "medium", className, ...passProps }) {
    const classNames = clsx(styles.wrapper, styles[size], {
        [styles.primary]: primary,
        [styles.bordered]: bordered,
        [styles.rounded]: rounded,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
    }, className);

    const Component = href ? "a" : "button";
    return (
        <Component {...passProps} disabled={disabled || loading} href={href} className={classNames}>
            <span className={clsx(styles.content, { [styles.hidden]: loading })}> {children}</span>
            {loading && <span className={styles.loadingIcon} aria-hidden="true"></span>}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};

export default Button;

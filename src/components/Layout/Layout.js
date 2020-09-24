import React from 'react';
import styles from './Layout.module.css'

const layout = (props) => {
    return(
        <React.Fragment>
            <div>
                Toolbar, Sidebar etc
            </div>
            <main className={styles.content}>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default layout;
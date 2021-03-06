import React from 'react'

import {TransitionGroup, Transition as ReactTransition} from 'react-transition-group'



const timeout=300;

const getTransitionStyles = {
    entering: {
        opacity: 0,
        position: `absolute`
    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1,

    },
    exiting: {
        transition: `all ${timeout}ms 1 ease-in-out`,
        opacity: 0,

    }
}

class Transition extends React.PureComponent {
    render() {
        const {children, location} = this.props;

        return (
            <TransitionGroup>
                <ReactTransition
                key={location.pathname} timeout={{enter: timeout, exit: timeout}}>
                    {status=> (
                        <div style={{ ...getTransitionStyles[status]}}>
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        )
    }
}

export default Transition;
import React, { useState } from 'react'

export const Collapse = ({ title, collapsed, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed)

    return (
        <div className="collapse mb-2">
            <header
                className={`collapse__header is-flex is-align-items-center is-justify-content-space-between`}
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                <h3 className="collapse__title is-size-6 has-text-weight-bold">
                    {title}
                </h3>
                {isCollapsed ? "+" : "-"}
            </header>
            <div
                className={`collapse__content notification ${isCollapsed ? "collapsed" : "expanded"
                    }`}
                aria-expanded={isCollapsed}
            >
                {children}
            </div>
        </div>
    )
}
import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside id="ui-sidebar">
            <div id="action-menu">
                <h3>Actions</h3>
                {/* Actions driven by React */}
                <p>Awaiting Orders</p>
            </div>
            <div id="entity-info">
                <h3>Selection</h3>
                {/* Entity info */}
                <p>None</p>
            </div>
        </aside>
    );
};

export default Sidebar;

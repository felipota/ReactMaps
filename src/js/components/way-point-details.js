import React, {Component} from 'react';

class WayPointDetails extends Component {
    render() {
        return (
            <div className="way-point-details">
                <h2>Detalles</h2>
                <button onClick={this.props.onClose}>Cerrar</button>
            </div>
        )
    }
}

export default WayPointDetails;
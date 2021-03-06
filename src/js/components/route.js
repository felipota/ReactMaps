var React = require('react');
var EditableText = require('./core/editable-text');
var RouteInfo = require('./route-info');
var WayPoints = require('../containers/way-points');
import AppBar from "./app-bar";
import RouteObservation from "./RouteObservation";

class Route extends React.Component {

    constructor(props) {
        super(props);
    }

    handleRouteNameChange(newName) {
        this.props.onNameChange(this.props.route.id, newName);
    }


    renderRouteName() {
        var route = this.props.route;
        return (
            <div className="route-name">
                <EditableText
                    onSave={this.handleRouteNameChange.bind(this)}
                    value={route.name}/>
            </div>
        )
    }

    render() {
        var route = this.props.route;
        return (
            <div className={'route'}>
                <AppBar/>
                <RouteInfo route={route}/>
                <RouteObservation route={route}/>
                <WayPoints route={route} mapService={this.props.mapService}/>
            </div>
        )

    }
}

module.exports = Route;
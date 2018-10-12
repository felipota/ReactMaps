let React = require('react');
import RouteVisual from './route-visual';
var EditableText = require('./core/editable-text');
class RouteObservation extends React.Component {

    constructor(props) {
        super(props);
        
    }

      render() {
        return (
            <ul className="way-points empty">
            <li><i className="icon-disc"/> Observación
            <EditableText
                placeholder="Escriba una ruta"                
            /></li>
        </ul>
         
        );
      }
 
  
}

module.exports = RouteObservation;
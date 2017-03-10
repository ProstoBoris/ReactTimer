var React = require('react');

var TimerControls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function () {
        var renderStartStopButton = () => {
            if (this.props.countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (this.props.countdownStatus === 'paused' || this.props.countdownStatus === 'stopped') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
});

module.exports = TimerControls;
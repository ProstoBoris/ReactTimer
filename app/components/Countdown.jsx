var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function () {
      return {
          count: 0,
          countdownStatus: 'stopped'
      };
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log('componentWillUpdate fired. nextState is ', nextState);
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count: 0 });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillMount: function () {
        console.log('Countdown\'s componentWillMount just triggered');
    },
    componentDidMount: function () {
        console.log('componentDidMount just triggered');
    },
    componentWillUnmount: function () {
        console.log('componentWillUnmount triggered');
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({ count: newCount > 0 ? newCount : 0 });
            if (newCount === 0) {
                this.setState({ countdownStatus: 'stopped' });
            }
        }, 1000);
    },
    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({ countdownStatus: newStatus });
    },
    render: function () {
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={this.state.count}/>
                { this.state.countdownStatus !== 'stopped' ?
                    <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange}/>
                        :
                    <CountdownForm onSetCountdown={this.handleSetCountdown}/> }
            </div>
        );
    }
});

module.exports = Countdown;
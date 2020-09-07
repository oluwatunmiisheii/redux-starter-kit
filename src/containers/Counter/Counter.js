import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { counterIncrease, counterDecrease } from '../../store/actions/counter'
import { storeResult, deleteResult } from '../../store/actions/result'

class Counter extends Component {
	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={() => this.props.onIncrementCounter(1)} />
				<CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter(1)} />
				<CounterControl label="Add 5" clicked={() => this.props.onIncrementCounter(5)} />
				<CounterControl label="Subtract 5" clicked={() => this.props.onDecrementCounter(5)} />
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
				<ul>
					{this.props.storedResult.map(result => (
						<li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>{result.val}</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.counter.counter,
		storedResult: state.result.results
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: (value) => dispatch(counterIncrease(value)),
		onDecrementCounter: (value) => dispatch(counterDecrease(value)),
		onStoreResult: result => dispatch(storeResult(result)),
		onDeleteResult: (id) => dispatch(deleteResult(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
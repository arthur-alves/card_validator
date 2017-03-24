// Result process component

var ResultComponent = React.createClass({
	getInitialState: function() {
		return {}
	}
	, componentDidMount: function() {
		window.emitter.addChangeListener(this.updateResult)
	}
	, render: function(){
		var state = this.state;
		if(!state.results && !state.error){
			return null
		}

		if(state.error){
			return <ErrorComponent error={state.error}/>
		}

		return (
			<ul className="list-group">
				{this.state.results.map(this.mountItems)}
			</ul>
		)
	}
	, updateResult: function(results){
		if(results){
			this.setState(results)
		}
	}
	, mountItems: function(item, idx){

		var badge_class = item[1].toLowerCase() == 'invalid' ? 'danger': 'success';

		return (
		    <li className="list-group-item justify-content-between" key={idx}>
		        {item[0]}
		        <span className={"badge badge-" + badge_class +" badge-pill"}>
		        	{item[1]}
		        </span>
		    </li>
		)
	}
})


// Error Component

var ErrorComponent = React.createClass({
	render: function(){
		return (
			<div className="text-center">
		        <span className={"badge badge-danger badge-pill"}>
		        	{this.props.error}
		        </span>
			</div>
		)
	}
})

var result_container = document.getElementById("result_container")

ReactDOM.render(
	<ResultComponent />,
	result_container
)
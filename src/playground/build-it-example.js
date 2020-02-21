

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props) 
            this.handToggleVisibility = this.handToggleVisibility.bind(this)
            this.state = {
                visibility: false
            }
    }
    handToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
  
    render() {
        return (
                    <div>   
                        <h1>Visibility Toggle</h1>
                        <button onClick={this.handToggleVisibility}>
                            {this.state.visibility ? 'Hide details' : 'Show details'}
                        </button>
                        {this.state.visibility && (
                            <div>
                            <p>Hey. These are some details</p>
                            </div>
                        )}
                    </div>
                )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))





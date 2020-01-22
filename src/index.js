import React, { Component ,useEffect } from 'react';
import { render } from 'react-dom';

export const useMountEffect = (fun) => useEffect(fun, []);

// Gneral Focus Hook
const utilizeFocus = () => {
	const ref = React.createRef()
	const setFocus = () => {ref.current &&  ref.current.focus()}

	return {setFocus, ref} 
}

class App extends Component {
  constructor(props){
    super(props)
    this.input1Focus = utilizeFocus()
    this.input2Focus = utilizeFocus()
    this.BtnFocus = utilizeFocus()
  }

  componentDidMount(){
    this.input1Focus.setFocus()
  }

  render(){
    return (
      <div>
        <label>1 char long 
          <input
            onChange={(e)=>{
              if (e.target.value.length>=1) this.input2Focus.setFocus()
            }}

            ref={this.input1Focus.ref}
          />
        </label>
        <label>2 char long 
          <input
            onChange={(e)=>{
              if (e.target.value.length>=2) this.BtnFocus.setFocus()
            }}
            ref={this.input2Focus.ref}
          />
        </label>
        <button
          ref={this.BtnFocus.ref}
        >
          Complete
        </button>
        <button
          onClick={ ()=> {
            this.input1Focus.setFocus() 
          }}
        >
          start again
        </button>
      </div>
    )

  } 
}

render(<App />, document.getElementById('root'));

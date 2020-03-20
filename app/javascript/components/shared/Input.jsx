import React from 'react'
import PropTypes from 'prop-types'
import { inputClasses } from '../../shared/helpers'

const Input = ( props ) => (
  <div className="form-group row">
    <label 
      htmlFor={ props.name }
      className="col-md-3 col-form-label">
      { props.title }
    </label>
    <div className="col-md-9">
      <input 
        type={ props.type }  
        name={ props.name } 
        value={ props.value }
        onChange={ props.handleChange }
        // onBlur={ this.handleBlur }
        id={ props.name } 
        className={inputClasses(`${props.name}`, props.state )} 
        placeholder={ props.placeholder } 
        autoFocus={ props.autoFocus } 
      />
        
          {/* {this.state.erros.name ? 
            <div className="invalid-feedback">
            {this.state.errors.name}
          </div> : null
          } */}
    </div>
  </div>
)

Input.propTypes = {
  type: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  state: PropTypes.object.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input
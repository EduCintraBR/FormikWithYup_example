import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import schema from './schema'

import './App.css';

function App() {

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit} 
        initialValues={{ email: '', password: ''}}
        validationSchema={schema}
        render={({ values, isValid }) => (
        <React.Fragment>
          <Form>
            <div className="form-group">
              <label>Email</label>
              <Field  name="email" type="text" className="form-control"/>
              <ErrorMessage name="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <Field  name="password" type="password" className="form-control"/>
              <ErrorMessage name="password" />
            </div>

            <div className="form-group">
              <button 
                className="btnSubmit"
                type="submit"
                disabled={!isValid}
                >
                  Entrar
              </button>
            </div>
        </Form>

          
        </React.Fragment>
        )}
      />
    </div>
  );
}

export default App;

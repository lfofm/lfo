import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';

import { uploadAsset } from '../uploader'

const CreateTrack = gql`
  mutation CreateTrack($payload: CreateTrackPayload) {
    createTrack(payload: $payload) {
      id
      user { id }
    }
  }
`

class Upload extends React.Component {
  requiredFields = ['name', 'audio']

  state = {
    isSubmitting: false,
    errors: {},
    touched: {},
    values: {}
  }

  constructor(args) {
    super(args)

    this.fileCallback = this.fileCallback.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBlur(evt) {
    const { errors, touched, values } = this.state
    const { target: { name }} = evt

    const updatedTouched = Object.assign({}, touched, {
      [name]: true
    })

    let updatedErrors = Object.assign({}, errors, {
      [name]: !values[name] && this.requiredFields.includes(name) ? true : null
    })

    if (!_.compact(_.values(updatedErrors)).length) {
      updatedErrors = null
    }

    this.setState({
      errors: updatedErrors,
      touched: updatedTouched
    })
  }

  fileCallback(evt) {
    const { target } = evt
    const { name, files } = target

    if (!files || !files.length) {
      throw new Error('Tried to fle callback on an input with no files')
    }

    const clientCb = key => this.handleFileUpload(name, key)
    uploadAsset(files[0], clientCb)
  }

  handleFileUpload(name, url) {
    const { values } = this.state
    const updatedValues = Object.assign({}, values, {
      [name]: url
    })

    this.setState({
      values: updatedValues
    })
  }

  handleChange(evt) {
    const { values } = this.state
    const { target: { name, value }} = evt

    const updatedValues = Object.assign({}, values, {
      [name]: value
    })

    this.setState({
      values: updatedValues
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({ isSubmitting: true })
    const { name, description, cover, audio } = this.state.values
    this.props.mutate({ variables: { payload: { name, description, cover, audio }}})
      .then(response => {
        const { data } = response
        if (data) {
          const { createTrack } = data
          const { id, user } = createTrack
          const userId = user.id

          if (id && userId) {
            window.location.replace(window.origin + `/u/${userId}/${id}`)
          } else {
            throw new Error('Something went wrong')
          }
        } else {
          throw new Error('Something went wrong')
        }
        console.log(response)
      })
      .catch(err => this.setState({ errors: { form: true }}))
  }

  render() {
    const { errors, isSubmitting, touched, values } = this.state
    const nameError = errors && errors.name
    const descriptionError = errors && errors.description
    const validForm =
      _.compact(this.requiredFields.map(f => values[f])).length == this.requiredFields.length

    return (
      <div>
        <div className='row py-4'>
          <h1>Upload a track</h1>
        </div>

        <div className='row'>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *required</label>
              <input
                type="text"
                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                placeholder="Name"
                name="name"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={values.name}
                required
              />
              {touched.name && nameError && <div className="invalid-feedback">
                A track name is required.
              </div>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
                placeholder="Description"
                name="description"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={values.description}
              />
              {touched.description && descriptionError && <div className="invalid-feedback">
                A track description is required.
              </div>}
            </div>

            <div className="form-group">
              <label htmlFor="cover">Cover</label>

              {values.cover ? ([
                <div key='coverLabel text-success'>Uploaded cover</div>,
                <input key='coverHiddenField' type='hidden' name='cover' value={values.cover} />
              ]): <input
                type="file"
                className="form-control-file"
                name='cover'
                onChange={this.fileCallback}
              />}
            </div>

            <div className="form-group">
              <label htmlFor="audio_file">Audio file *required</label>
              {values.audio ? ([
                <div key='uploadLabel text-success'>Uploaded audio</div>,
                <input key='audioHiddenField' type='hidden' name='audio' value={values.audio} />
              ]): <input
                type="file"
                className="form-control-file"
                name='audio'
                onChange={this.fileCallback}
                required
              />}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

/* disabled={!validForm || errors || isSubmitting} }>*/

export default graphql(CreateTrack)(Upload)

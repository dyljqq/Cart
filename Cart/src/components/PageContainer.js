import React from 'react'
import { View, PropTypes } from 'react-native'
import { match } from 'react-router'
import routesConfig from '../routes'

export default class PageContainer extends React.Component {
  componentWillMount () {
    this.doMatch(this.props)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.location !== this.props.location)
      this.doMatch(newProps)
  }

  doMatch (props) {
    const { location, routesConfig } = props
    match({
      location,
      routes: routesConfig,
    }, (err, redirectLocation, renderProps) => {
      this.setState({ routerState: renderProps });
    })
  }

  render () {
    if (this.state.routerState) {
      const {
        routes,
        params
      } = this.state.routerState
      return [...routes].reduceRight((children, route)=>{
        const Component = route.Component
        return Component ? (
          <Component
            route = {route}
            navigator = {this.props.navigator}
            params = {params}
            {...this.props.extraProps}
          >
            {children}
          </Component>
        ) : children
      }, null)
    }
    return (<View />)
  }
}

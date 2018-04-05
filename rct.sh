COMPONENT_NAME="$1"

mkdir src/app/${COMPONENT_NAME}

touch src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js

echo "import React, { Component } from 'react';" > src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "import PropTypes from 'prop-types';" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "import store from '../../store';" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "import { connect } from 'react-redux';" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "import * as actions from './$1.actions'" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "import * as api from './$1.api'" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "class $1 extends Component {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  constructor(props) {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "    super(props);" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "    this.state = {};" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  };" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  componentWillMount() {};" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  componentDidMount() {};" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  componentWillReceiveProps(nextProps) {};" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  componentDidReceiveProps(nextProps) {};" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  render() {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "    return (<div></div>);" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  }" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "};" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "$1.propTypes = {};" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "const storeToProps = (store) => {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  return {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "  }" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "}" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js
echo "export default connect(storeToProps)($1);" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.component.js


touch src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.actions.js

echo "export const new_action_goes_here = () => {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.actions.js
echo "  return {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.actions.js
echo "    type: A_NEW_ACTION_GOES_HERE," >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.actions.js
echo "    payload: something" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.actions.js
echo "  }" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.actions.js
echo "}" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.actions.js


touch src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js

echo "import axios from 'axios';" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "import store from '../../store'" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "import * as actions from './$1.actions'" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "export const new_api_call_here = () => {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "  return new Promise((resolve, reject) => {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "    axios.get(url, {headers: {}})" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "      .then(response => resolve(response))" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "      .catch(error => reject(error))" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "  });" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js
echo "}" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.api.js

touch src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js

echo "const initalState = {};" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "export default (state = initalState, action) => {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "  switch (action.type) {" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "    case '$1_ACTION_TYPE':" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "      return" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "    default:" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "      return state;" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "  }" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "  return state;" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js
echo "};" >> src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.reducer.js

touch src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.model.js

touch src/app/${COMPONENT_NAME}/${COMPONENT_NAME}.scss
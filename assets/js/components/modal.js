/**
 * Modal component.
 *
 * Site Kit by Google, Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { Component, createPortal } = wp.element;

export default class Modal extends Component {
	constructor( props ) {
		super( props );
		this.el = document.createElement( 'div' );
		// This class is the outermost wrapper which is present on all Site Kit pages.
		this.root = document.querySelector( '.googlesitekit-plugin' );
	}

	componentDidMount() {
		this.root.appendChild( this.el );
	}

	componentWillUnmount() {
		this.root.removeChild( this.el );
	}

	render() {
		return createPortal(
			this.props.children,
			this.el,
		);
	}
}

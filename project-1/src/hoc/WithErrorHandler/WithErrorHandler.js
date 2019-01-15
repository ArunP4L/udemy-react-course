import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const WithErrorHandler = (WrappedComponent, axious) => {
    return class extends Component {

        state = {
            error: null,
        };

        componentWillMount() {
            this.requestInterceptor = axious.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });
            this.responseInterceptor = axious.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        };

        errorAcknowledged = () => {
            this.setState({error: null});
        };

        componentWillUnmount() {
            axious.interceptors.request.eject(this.requestInterceptor);
            axious.interceptors.response.eject(this.responseInterceptor);
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorAcknowledged}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        };
    }
};

export default WithErrorHandler;


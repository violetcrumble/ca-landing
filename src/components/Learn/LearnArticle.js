import React from 'react';
import Modal from 'react-modal';

class LearnArticle extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div className="learn-article">
                <a onClick={this.openModal}>
                    <img src={this.props.image} />
                    <h4>{this.props.heading}</h4>
                    <p>Learn More &gt;</p>
                </a>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.75)'
                        },
                        content: {
                            overflow: 'hidden',
                            padding: '0'
                        }
                    }}
                >

                    <div className="nav-hider">&nbsp;</div>

                    <button onClick={this.closeModal}>close</button>

                    <iframe width="100%" height="100%" src={this.props.url}></iframe>

                </Modal>
            </div>
        );
    }
}

export default LearnArticle;
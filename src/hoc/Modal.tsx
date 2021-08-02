import ReactDOM from 'react-dom';

function Modal(props: any) {

    return ReactDOM.createPortal(
        props.children,
        document.getElementById('modal')!
    )
}

export default Modal;

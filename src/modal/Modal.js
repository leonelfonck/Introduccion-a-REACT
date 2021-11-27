import ReactDOM from 'react-dom';
import "./modal.css"

export function Modal(props){
    return(
        ReactDOM.createPortal(<div className="ModalBackground">
            {props.children}
        </div>
            ,
            document.getElementById('modal')
        )
    );
}


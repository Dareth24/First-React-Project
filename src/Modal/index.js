import ReactDOM from "react-dom";
import './Modal.css';

function Modal({children}) {//ponemos children como parametro ya que la finalidad del componente modal es 'teletransportar' el contenido interno que tenga es decir sus componentes hijos/children
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };
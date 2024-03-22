import '../../App.css'

export default function ModalLogin(props) {
    return(
        <div className="modalPseudo">
            <div className="modal-contentPseudo">
                <p className="texteModalPseudo">Your email and/or password are incorrect.</p>
                <button type="btn" className="btnModalPseudo" id="no" onClick={()=>props.setDisplay("caché")}>
                    Close
                </button>
            </div>
        </div>
    )
}
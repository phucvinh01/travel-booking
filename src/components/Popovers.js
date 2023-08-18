import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
function Popovers({ name }) {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <button>Log out</button>
                <button>ProFile</button>
            </Popover.Body>
        </Popover>
    );
    return (
        <>
            <OverlayTrigger trigger="hover" placement="bottom" overlay={ popover } show='3000'>
                <span> Wellcome <strong>{ name }</strong></span>
            </OverlayTrigger>
        </>
    );
}

export default Popovers;